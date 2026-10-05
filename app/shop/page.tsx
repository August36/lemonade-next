import { getProducts } from "@/lib/api/products";


export default function Shop() {
  return (
    <main>
      <h1>Shop</h1>

      {data.products.map((product: any) => (
        <div key={product.id}>
          {product.title}
        </div>
      ))}
    </main>
  );
}
