import { useEffect, useState } from "react";
import AverageRating from "./avarageRating";
import Rating from "./rating";
import Reviews from "./reviews";

export default function ProductReviews({ productId }) {
  const [reviews, setReviews] = useState([]);

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

    const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id} className="mb-4">
            <p>
              <strong>Rating:</strong> {review.rating}
            </p>
            <p>{review.comment}</p>
          </div>
        ))
      )}
         <AverageRating averageRating={averageRating} reviews={reviews} />

            

      <Rating reviews={reviews} setReviews={setReviews} />
      <Reviews reviews={reviews} productId={productId} />
    </div>
  );
}
