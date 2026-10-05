import { getProducts } from "@/lib/api/products";

export default async function Shop() {
  const data = await getProducts();

  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Shop</h1>

      {data.products.map((product: any) => (
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4" key={product.id}>
          {product.title}
          {product.description}
          {product.price}
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </main>
  );
}