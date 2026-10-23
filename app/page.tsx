import Link from "next/link";
import ProfitCalculator from "./components/ProfitCalculator";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-zinc-50">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-12">
        <h1 className="mb-4 text-4xl font-bold text-zinc-900">
          Welcome to the Phone Shop!
        </h1>

        <section className="mb-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold text-zinc-900">
            Profit Calculator
          </h2>

          <ProfitCalculator />
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold text-zinc-900">
            Check out the shop
          </h2>

          <Link
            href="/shop"
            className="inline-block rounded-lg bg-black px-5 py-3 text-white transition hover:bg-zinc-700"
          >
            View Products
          </Link>
        </section>
      </div>
    </main>
  );
}