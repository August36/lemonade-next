"use client";

import Link from "next/link";
import { useCart } from "../components/CartProvider";

function Nav() {
  const { cart } = useCart();

  const amount = cart.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  );

  return (
    <nav className="flex flex-col items-center justify-center gap-4 p-4 text-center sm:flex-row sm:justify-between sm:text-left">
      <Link href="/">Home</Link>

      <ul className="flex flex-row items-center justify-center gap-4 sm:gap-8">
        <li>
          <Link href="/shop">Shop</Link>
        </li>

        <li>
          <Link href="/cart">
            Cart ({amount})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;