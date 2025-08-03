import React, { useEffect, useState } from "react";

const Reviews = ({productId}) => {
  const [reviews, setReviews] = useState([]);
const [product, setProduct] = useState([]);

 useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`/api/reviews?productId=${productId}`);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };

    if (productId) {
      fetchReviews();
    }
  }, [productId]);


 useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${productId}`);
        const data = await res.json();
        console.log("PRODUCT: ", data);
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };

    if (product) {
      fetchProduct();
    }
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-3">Anmeldelser</h2>
      {reviews?.length === 0 && <p className="text-gray-400">Ingen Anmeldelser enda.</p>}
      {reviews?.map((r, i) => (
        <div key={i} className="border-t border-gray-700 pt-3 mt-3">
          <div className="text-yellow-400 text-lg">
            {"★".repeat(r.rating)}
            {"☆".repeat(5 - r.rating)}
          </div>
          <p className="text-gray-200">{r.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
