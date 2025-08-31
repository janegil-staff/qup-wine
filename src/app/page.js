"use client";
import AverageRating from "@/components/avarageRating";
import HorizontalTabs from "@/components/HorizontalTabs";
import Product from "@/components/product";
import ProductReviews from "@/components/ProductssReviews";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProductId(data[0]._id);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 px-6 py-10 font-sans">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <Product selectedType={productId} setProductId={setProductId} />
      </div>
    </main>
  );
}
