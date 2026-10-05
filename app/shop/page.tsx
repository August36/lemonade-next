import { getProducts } from "@/lib/api/products";
import Link from "next/link";

export default async function Shop() {
  const data = await getProducts();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-zinc-900">
          Shop
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.products.map((product: any) => (
            <Link key={product.id} href={`/shop/${product.id}`}>
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-56 items-center justify-center bg-zinc-100 p-6">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-5">
                  <h2 className="mb-2 text-lg font-semibold text-zinc-900">
                    {product.title}
                  </h2>
                  <p className="mb-4 line-clamp-2 text-sm text-zinc-500">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-zinc-900">
                      ${product.price}
                    </span>
                    <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700">
                      Add to cart
                    </button>
                  </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}