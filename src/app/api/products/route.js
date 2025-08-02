import { connectToDatabase } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  await connectToDatabase();
  const products = await Product.find().sort({ createdAt: -1 });

  return new Response(JSON.stringify(products), { status: 200 });
}
