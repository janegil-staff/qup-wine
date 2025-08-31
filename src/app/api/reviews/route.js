import Review from "@/models/Review";
import Product from "@/models/Product";

import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req) {
  const { productId, rating, type, comment } = await req.json();

  if (!productId || !rating || !type) {
    return Response.json({ message: "Missing fields" }, { status: 400 });
  }

  await connectToDatabase();
  const review = await Review.create({ rating, comment, type, product: productId });
  console.log(review);
  return new Response(JSON.stringify(review), { status: 201 });
}

export async function GET(req) {
  await connectToDatabase();

  const { searchParams } = new URL(req.url);

  const productId = searchParams.get("productId");

  if (!productId) {
    return new Response(JSON.stringify({ error: "Missing productId" }), {
      status: 400,
    });
  }

  const reviews = await Review.find({ product: productId }).sort({
    createdAt: -1,
  });

  return new Response(JSON.stringify(reviews), { status: 200 });
}
