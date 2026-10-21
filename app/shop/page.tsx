import { getProducts } from "@/lib/api/products";
import Link from "next/link";
import AddtoCartBtn from "../components/AddtoCartBtn";

export default async function Shop() {
  const data = await getProducts();
  //vi bruger async fordi vi arbejder med api kald
  //async gør det muligt at bruge await i funktionen
  //await venter på at getproducts() returnerer sit resultat før næste linje i funktionen fortsætter
  //vi henter altså alle produkterne inden vi forsøger at vise dem

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-zinc-900">
          Shop
        </h1>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.products.map((product: any) => (
      // dette er containeren der viser products hentet fra dummyjson api
            //de phones vi har fået fra api'et er gemt i vores variabel data
            //i data objektet tilgår vi products og bruger map
            //products er et array. map() er en arraymethod
            //den skaber et nyt array ved at kalde en funktion for hvert array element.
            //så vores funktion gør sådan at der skabes nedenstående html elementer for hvert element i products arrayet.
            //hvert element indeholder et id, et image, title osv
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/shop/${product.id}`}>
                <div className="flex h-56 items-center justify-center bg-zinc-100 p-6">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="p-5 pb-2">
                  <h2 className="text-lg font-semibold text-zinc-900">
                    {product.title}
                  </h2>
                </div>
              </Link>

              <div className="px-5 pb-5">

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-zinc-900">
                    ${product.price}
                  </span>

                  <AddtoCartBtn item={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}