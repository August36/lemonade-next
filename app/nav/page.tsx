import Link from "next/link";

function Nav() {
  return (
    <nav className="flex flex-col items-center justify-center gap-4 p-4 text-center sm:flex-row sm:justify-between sm:text-left">
      <Link href="/">Home</Link>

      <ul className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;