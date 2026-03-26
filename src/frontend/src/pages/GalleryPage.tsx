import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { GalleryItem } from "../backend.d.ts";
import { useActor } from "../hooks/useActor";
import { useStorageClient } from "../hooks/useStorageClient";

const CATEGORIES = ["All", "T-Shirts", "Hoodies", "Caps", "Uniforms", "Events"];
const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"];

function GalleryCard({
  item,
  getImageUrl,
}: { item: GalleryItem; getImageUrl: (url: string) => Promise<string> }) {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    getImageUrl(item.imageUrl).then(setImgSrc);
  }, [item.imageUrl, getImageUrl]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-square relative bg-muted overflow-hidden">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="h-12 w-12 text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Badge className="bg-primary/90 text-primary-foreground text-xs">
            {item.category}
          </Badge>
        </div>
      </div>
      <div className="p-3">
        <p className="font-semibold text-sm text-foreground truncate">
          {item.title}
        </p>
      </div>
    </motion.div>
  );
}

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { actor, isFetching } = useActor();
  const { getImageUrl } = useStorageClient();

  const { data: items = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ["galleryItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGalleryItems();
    },
    enabled: !!actor && !isFetching,
  });

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Work Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of custom DTF-printed apparel. Quality
            you can trust, craftsmanship you can see.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* Category Filters */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-10"
          data-ocid="gallery.tab"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              data-ocid="gallery.tab"
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {isLoading ? (
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            data-ocid="gallery.loading_state"
          >
            {SKELETON_KEYS.map((key) => (
              <div key={key} className="rounded-xl overflow-hidden">
                <Skeleton className="aspect-square w-full" />
                <div className="p-3">
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
            data-ocid="gallery.empty_state"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <ImageIcon className="h-12 w-12 text-primary/50" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Photos Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're building our gallery with stunning work examples. Check back
              soon or contact us to see samples of our DTF printing work.
            </p>
          </motion.div>
        ) : (
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            data-ocid="gallery.list"
          >
            {filtered.map((item, idx) => (
              <div key={String(item.id)} data-ocid={`gallery.item.${idx + 1}`}>
                <GalleryCard item={item} getImageUrl={getImageUrl} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
