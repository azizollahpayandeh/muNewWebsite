import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    products: [
      {
        id: 1,
        name: "hat",
        price: 1000,
      },
      {
        id: 2,
        name: "shoes",
        price: 1500,
      },
      {
        id: 3,
        name: "bag",
        price: 5000,
      },
    ],
  });
}

