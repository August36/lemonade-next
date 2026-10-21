"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../components/CartProvider";

export default function Checkout() {
  const { cart, setCart } = useCart();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (sum: number, item: any) =>
      sum + item.price * item.quantity,
    0
  );

  async function completeOrder() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Could not complete order.");
        return;
      }

      setMessage(data.message);
      setCart([]);
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function clearCart() {
    setCart([]);
    setMessage("Cart cleared.");
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-zinc-900">
          Checkout
        </h1>

        {message && (
          <p
            role="status"
            className="mb-6 rounded-lg border border-zinc-200 bg-white p-4 text-zinc-800"
          >
            {message}
          </p>
        )}

        {cart.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-10 text-center shadow-sm">
            <p className="text-lg text-zinc-600">
              Your cart is empty.
            </p>

            <Link
              href="/shop"
              className="mt-5 inline-block rounded-lg bg-black px-5 py-3 text-white hover:bg-zinc-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900">
              Order Summary
            </h2>

            <div className="divide-y divide-zinc-200">
              {cart.map((item: any) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-4"
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="h-20 w-20 rounded-lg bg-zinc-100 object-contain p-2"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-zinc-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-500">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold text-zinc-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between border-t border-zinc-200 pt-6">
              <span className="text-lg font-semibold text-zinc-900">
                Total
              </span>

              <span className="text-2xl font-bold text-zinc-900">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={completeOrder}
                disabled={loading}
                className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Processing..." : "Complete Order"}
              </button>

              <button
                onClick={clearCart}
                disabled={loading}
                className="rounded-lg border border-zinc-300 px-5 py-3 font-medium text-zinc-700 hover:bg-zinc-100 disabled:opacity-50"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}