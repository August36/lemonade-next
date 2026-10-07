//Denne component håndtere state management for cart
//Vi opretter den som en component for at gøre den globalt tilgængelig i hele appen

"use client";

import { createContext, useContext, useState } from "react";

//Vi opretter en context som vi kan bruge til at dele state mellem komponenter
const CartContext = createContext<any>(null);

//React node bruges til at angive typen af children prop
export default function CartProvider({ children }: { children: React.ReactNode }) {
    //Dette er vores state. Vi bruger useState hook til at oprette en state variabel
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export function addToCart(item: any) {
    const { cart, setCart } = useCart();
}