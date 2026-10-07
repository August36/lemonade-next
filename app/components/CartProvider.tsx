"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<any[]>([]);

  function addToCart(item: any) {
    const existingItem = cart.find(
      (cartItem: any) => cartItem.id === item.id
    );

    if (existingItem) {
      setCart(
        cart.map((cartItem: any) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);
    }
  }

  function removeFromCart(id: number) {
    setCart(cart.filter((item: any) => item.id !== id));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}