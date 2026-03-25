import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  orderType: string;
  quantity: number;
  message: string;
}

export function useSubmitQuote() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: QuoteFormData) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitQuoteRequest({
        name: data.name,
        phone: data.phone,
        email: data.email,
        orderType: data.orderType,
        quantity: BigInt(data.quantity),
        message: data.message,
        timestamp: BigInt(Date.now()),
      });
    },
  });
}
