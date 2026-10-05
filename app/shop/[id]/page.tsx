import { getProduct } from "@/lib/api/products";
import Link from "next/link";

export default async function Product({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/shop"
          className="mb-8 inline-block text-sm font-medium text-zinc-600 hover:text-black"
        >
          ← Back to shop
        </Link>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            
            {/* Product image */}
            <div className="flex min-h-[400px] items-center justify-center bg-zinc-100 p-10">
              <img
                src={product.images[0]}
                alt={product.title}
                className="max-h-[400px] w-full object-contain"
              />
            </div>

            {/* Product information */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="mb-2 text-sm font-medium uppercase tracking-wide text-zinc-500">
                {product.category}
              </p>

              <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900">
                {product.title}
              </h1>

              <p className="mb-6 leading-relaxed text-zinc-600">
                {product.description}
              </p>

              <p className="mb-8 text-3xl font-bold text-zinc-900">
                ${product.price}
              </p>

              <button className="w-full rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:bg-zinc-800">
                Add to cart
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}