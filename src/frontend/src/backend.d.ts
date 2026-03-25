import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
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
    getAllQuoteRequests(): Promise<Array<QuoteRequest>>;
    getQuoteRequest(id: bigint): Promise<QuoteRequest>;
    submitQuoteRequest(request: QuoteRequest): Promise<bigint>;
}
