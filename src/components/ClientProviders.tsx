"use client";

import { CartProvider } from "@/lib/CartContext";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
