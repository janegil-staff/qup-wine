import { useState, useEffect } from "react";
import Reviews from "./reviews";
import AverageRating from "./avarageRating";
import Rating from "./rating";
import Review from "@/components/reviews";
import ProductReviews from "./ProductssReviews";

const Product = ({ selectedType, setSelectedType }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${selectedType}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        setProduct(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load product.");
      }
    };

    if (selectedType) {
      fetchProduct();
    }
  }, [selectedType]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <>
      {product?.image && (
        <img
          src={product.image}
          alt={product.name || "Product image"}
          className="w-full rounded-md mb-4"
        />
      )}

      <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
      <p className="text-gray-300 mb-2">
        {product?.description} inneholder {product?.percentage}% alkohol
      </p>
      <p className="text-xl font-semibold text-green-400 mb-6">
        {product?.price} NOK
      </p>

      <ProductReviews productId={product._id}/>
    </>
  );
};

export default Product;
