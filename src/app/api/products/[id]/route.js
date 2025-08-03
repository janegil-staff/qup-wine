import { NextResponse } from "next/server";
import Product from "@/models/Product";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET(request, context) {
  await connectToDatabase();
  const { params } = await context;

  const productId = params?.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
