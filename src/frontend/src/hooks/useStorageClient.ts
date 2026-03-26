import { HttpAgent } from "@icp-sdk/core/agent";
import { useEffect, useState } from "react";
import { loadConfig } from "../config";
import { StorageClient } from "../utils/StorageClient";

const SENTINEL = "!caf!";

export function useStorageClient() {
  const [storageClient, setStorageClient] = useState<StorageClient | null>(
    null,
  );

  useEffect(() => {
    loadConfig().then((config) => {
      const agent = new HttpAgent({ host: config.backend_host });
      const client = new StorageClient(
        config.bucket_name,
        config.storage_gateway_url,
        config.backend_canister_id,
        config.project_id,
        agent,
      );
      setStorageClient(client);
    });
  }, []);

  async function uploadFile(
    file: File,
    onProgress?: (pct: number) => void,
  ): Promise<string> {
    if (!storageClient) throw new Error("Storage client not ready");
    const bytes = new Uint8Array(await file.arrayBuffer());
    const { hash } = await storageClient.putFile(bytes, onProgress);
    return hash;
  }

  async function getImageUrl(imageUrl: string): Promise<string> {
    if (!storageClient) return "";
    // imageUrl may be a raw hash or have the sentinel prefix
    let hash = imageUrl;
    if (hash.startsWith(SENTINEL)) {
      hash = hash.substring(SENTINEL.length);
    }
    try {
      return await storageClient.getDirectURL(hash);
    } catch {
      return "";
    }
  }

  return { storageClient, uploadFile, getImageUrl };
}
