import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
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
