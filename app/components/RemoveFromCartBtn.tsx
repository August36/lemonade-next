"use client";

import { useCart } from "./CartProvider";

export default function RemoveFromCartBtn({ id }: { id: number }) {
  const { removeFromCart } = useCart();

  return (
    <button
      onClick={() => removeFromCart(id)}
      className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
    >
      Remove
    </button>
  );
}