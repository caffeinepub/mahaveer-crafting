import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ImageIcon, Loader2, Lock, LogOut, Trash2, Upload } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import type { GalleryItem } from "../backend.d.ts";
import { useActor } from "../hooks/useActor";
import { useStorageClient } from "../hooks/useStorageClient";

const ADMIN_USER = "MahaveerDev";
const ADMIN_PASS = "Mahaveer@123";
const CATEGORIES = ["T-Shirts", "Hoodies", "Caps", "Uniforms", "Events"];

export function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadCategory, setUploadCategory] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { actor, isFetching } = useActor();
  const { uploadFile: uploadToStorage } = useStorageClient();
  const queryClient = useQueryClient();

  const { data: galleryItems = [], isLoading: loadingItems } = useQuery<
    GalleryItem[]
  >({
    queryKey: ["galleryItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGalleryItems();
    },
    enabled: !!actor && !isFetching && isLoggedIn,
  });

  const uploadMutation = useMutation({
    mutationFn: async () => {
      if (!actor || !uploadFile) throw new Error("Missing data");
      const hash = await uploadToStorage(uploadFile, setUploadProgress);
      await actor.addGalleryItem(uploadTitle, uploadCategory, hash, [
        ADMIN_USER,
        ADMIN_PASS,
      ]);
    },
    onSuccess: () => {
      toast.success("Photo uploaded successfully!");
      setUploadTitle("");
      setUploadCategory("");
      setUploadFile(null);
      setUploadProgress(0);
      if (fileInputRef.current) fileInputRef.current.value = "";
      queryClient.invalidateQueries({ queryKey: ["galleryItems"] });
    },
    onError: (err: Error) => {
      toast.error(`Upload failed: ${err.message}`);
      setUploadProgress(0);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not ready");
      await actor.deleteGalleryItem(id, [ADMIN_USER, ADMIN_PASS]);
    },
    onSuccess: () => {
      toast.success("Photo deleted.");
      queryClient.invalidateQueries({ queryKey: ["galleryItems"] });
    },
    onError: (err: Error) => {
      toast.error(`Delete failed: ${err.message}`);
    },
  });

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);
    try {
      if (!actor) throw new Error("Not connected");
      const ok = await actor.adminLogin([username, password]);
      if (ok) {
        setIsLoggedIn(true);
      } else {
        setLoginError("Invalid username or password.");
      }
    } catch {
      setLoginError("Login failed. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-muted flex items-center justify-center px-4">
        <div
          className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-lg p-8"
          data-ocid="admin.panel"
        >
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Mahaveer Crafting Management
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                data-ocid="admin.input"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                data-ocid="admin.input"
              />
            </div>
            {loginError && (
              <p
                className="text-sm text-destructive"
                data-ocid="admin.error_state"
              >
                {loginError}
              </p>
            )}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoggingIn}
              data-ocid="admin.submit_button"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging
                  in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <p className="text-primary-foreground/70 text-sm">
            Mahaveer Crafting Gallery
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsLoggedIn(false)}
          className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          data-ocid="admin.secondary_button"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Upload Section */}
        <section
          className="bg-card border border-border rounded-2xl p-6"
          data-ocid="admin.panel"
        >
          <h2 className="text-lg font-bold text-foreground mb-5">
            Upload New Photo
          </h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Photo Title</Label>
              <Input
                id="title"
                value={uploadTitle}
                onChange={(e) => setUploadTitle(e.target.value)}
                placeholder="e.g. Custom Event T-Shirt"
                data-ocid="admin.input"
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={uploadCategory} onValueChange={setUploadCategory}>
                <SelectTrigger id="category" data-ocid="admin.select">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="photo">Photo File</Label>
              <Input
                id="photo"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                data-ocid="admin.upload_button"
              />
            </div>
            {uploadMutation.isPending && uploadProgress > 0 && (
              <div
                className="text-sm text-muted-foreground"
                data-ocid="admin.loading_state"
              >
                Uploading... {uploadProgress}%
                <div className="w-full bg-muted rounded-full h-2 mt-1">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}
            <Button
              onClick={() => uploadMutation.mutate()}
              disabled={
                !uploadTitle ||
                !uploadCategory ||
                !uploadFile ||
                uploadMutation.isPending
              }
              data-ocid="admin.primary_button"
            >
              {uploadMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" /> Upload Photo
                </>
              )}
            </Button>
          </div>
        </section>

        {/* Gallery Management */}
        <section className="bg-card border border-border rounded-2xl p-6">
          <h2 className="text-lg font-bold text-foreground mb-5">
            Gallery Items ({galleryItems.length})
          </h2>
          {loadingItems ? (
            <div
              className="text-center py-8 text-muted-foreground"
              data-ocid="admin.loading_state"
            >
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
              Loading items...
            </div>
          ) : galleryItems.length === 0 ? (
            <div className="text-center py-8" data-ocid="admin.empty_state">
              <ImageIcon className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground">No photos uploaded yet.</p>
            </div>
          ) : (
            <div className="space-y-3" data-ocid="admin.list">
              {galleryItems.map((item, idx) => (
                <div
                  key={String(item.id)}
                  className="flex items-center justify-between p-3 border border-border rounded-lg"
                  data-ocid={`admin.item.${idx + 1}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        {item.title}
                      </p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteMutation.mutate(item.id)}
                    disabled={deleteMutation.isPending}
                    data-ocid={`admin.delete_button.${idx + 1}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
