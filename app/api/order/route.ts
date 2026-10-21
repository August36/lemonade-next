import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const order = await request.json();

  if (!order.items || order.items.length === 0) {
    return NextResponse.json(
      { message: "Your cart is empty." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: "Order placed successfully!",
    order,
  });
}