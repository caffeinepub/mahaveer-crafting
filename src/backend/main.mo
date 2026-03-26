
import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Blob "mo:core/Blob";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";


actor {
  include MixinStorage();

  type GalleryItem = {
    id : Nat;
    title : Text;
    category : Text;
    imageUrl : Text;
    uploadedAt : Int;
  };

  module GalleryItem {
    public func compare(a : GalleryItem, b : GalleryItem) : Order.Order {
      Int.compare(b.uploadedAt, a.uploadedAt);
    };
  };

  let galleryItems = Map.empty<Nat, GalleryItem>();
  var nextGalleryId = 0;
  var isAdminLoggedIn = false;

  func authenticate(credentials : (Text, Text)) : Bool {
    credentials.0 == "MahaveerDev" and credentials.1 == "Mahaveer@123";
  };

  public shared ({ caller }) func adminLogin(credentials : (Text, Text)) : async Bool {
    if (authenticate(credentials)) {
      isAdminLoggedIn := true;
      true;
    } else {
      false;
    };
  };

  public shared ({ caller }) func addGalleryItem(
    title : Text,
    category : Text,
    imageId : Text,
    credentials : (Text, Text),
  ) : async Nat {
    if (not authenticate(credentials)) {
      Runtime.trap("Admin authentication failed");
    };
    let id = nextGalleryId;
    nextGalleryId += 1;
    let item : GalleryItem = {
      id;
      title;
      category;
      imageUrl = imageId;
      uploadedAt = Time.now();
    };
    galleryItems.add(id, item);
    id;
  };

  public shared ({ caller }) func deleteGalleryItem(id : Nat, credentials : (Text, Text)) : async () {
    if (not authenticate(credentials)) {
      Runtime.trap("Admin authentication failed");
    };
    galleryItems.remove(id);
  };

  public query ({ caller }) func getGalleryItems() : async [GalleryItem] {
    galleryItems.values().toArray().sort();
  };

  public query ({ caller }) func getGalleryItemsByCategory(category : Text) : async [GalleryItem] {
    galleryItems.values().toArray().filter(
      func(item) { Text.equal(item.category, category) }
    ).sort();
  };

  type QuoteRequest = {
    name : Text;
    phone : Text;
    email : Text;
    orderType : Text;
    quantity : Nat;
    message : Text;
    timestamp : Int;
  };

  module QuoteRequest {
    public func compare(qr1 : QuoteRequest, qr2 : QuoteRequest) : Order.Order {
      Int.compare(qr2.timestamp, qr1.timestamp);
    };
  };

  let quoteRequests = Map.empty<Nat, QuoteRequest>();
  var nextId = 0;

  public shared ({ caller }) func submitQuoteRequest(request : QuoteRequest) : async Nat {
    let newRequest : QuoteRequest = {
      request with
      timestamp = Time.now();
    };
    quoteRequests.add(nextId, newRequest);
    let id = nextId;
    nextId += 1;
    id;
  };

  public query ({ caller }) func getQuoteRequest(id : Nat) : async QuoteRequest {
    switch (quoteRequests.get(id)) {
      case (null) { Runtime.trap("Quote request not found") };
      case (?request) { request };
    };
  };

  public query ({ caller }) func getAllQuoteRequests() : async [QuoteRequest] {
    quoteRequests.values().toArray().sort();
  };
};
