"use client";

import { useCart } from "./CartProvider";

export default function AddtoCartBtn({ item }: { item: any }) {
  const { addToCart } = useCart();

  return (
    <button 
    onClick={() => addToCart(item)}
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
    >
      Add to Cart
    </button>
  );
}