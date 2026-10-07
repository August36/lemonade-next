"use client";
import RemoveFromCartBtn from "../components/RemoveFromCartBtn";

import { useCart } from "../components/CartProvider";

export default function Cart() {
  const { cart } = useCart();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold text-zinc-900">
          Cart
        </h1>

        {cart.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-10 text-center shadow-sm">
            <p className="text-lg text-zinc-500">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center gap-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-zinc-100 p-3">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-zinc-900">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    ${item.price} each
                  </p>

                  <p className="mt-2 text-sm text-zinc-700">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-zinc-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <RemoveFromCartBtn id={item.id}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}