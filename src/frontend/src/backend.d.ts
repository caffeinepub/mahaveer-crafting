import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface GalleryItem {
    id: bigint;
    title: string;
    imageUrl: string;
    category: string;
    uploadedAt: bigint;
}
export interface QuoteRequest {
    name: string;
    orderType: string;
    email: string;
    message: string;
    timestamp: bigint;
    quantity: bigint;
    phone: string;
}
export interface backendInterface {
    addGalleryItem(title: string, category: string, imageId: string, credentials: [string, string]): Promise<bigint>;
    adminLogin(credentials: [string, string]): Promise<boolean>;
    deleteGalleryItem(id: bigint, credentials: [string, string]): Promise<void>;
    getAllQuoteRequests(): Promise<Array<QuoteRequest>>;
    getGalleryItems(): Promise<Array<GalleryItem>>;
    getGalleryItemsByCategory(category: string): Promise<Array<GalleryItem>>;
    getQuoteRequest(id: bigint): Promise<QuoteRequest>;
    submitQuoteRequest(request: QuoteRequest): Promise<bigint>;
}
