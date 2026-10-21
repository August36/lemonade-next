import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav";
import CartProvider from "./components/CartProvider";

export const metadata: Metadata = {
  title: "August iphone shop",
  description: "School project",
};

//Layout bruges til main layoutet
//Layout tager imod prop children som automatisk, med next app router, indsættes alt efter hvilken page der tilgås i URL'en
//CartProvider indeholder cart state
//CartProvider omringer de andre components, og er derfor parent, derfor kan child components tilgå det state cartprovider tilbyder
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Nav />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
