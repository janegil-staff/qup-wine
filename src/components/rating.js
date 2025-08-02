import React, { useState } from "react";
import Comment from "./comment";

const Rating = ({ reviews, setReviews }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating || !comment) return;

    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating, comment }),
    });

    const newReview = await res.json();
    
    setReviews([newReview, ...reviews]);
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Din vurdering:</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              className={`text-2xl ${
                star <= rating ? "text-yellow-400" : "text-gray-600"
              } hover:scale-110 transition-transform`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <Comment comment={comment} setComment={setComment} />
      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded transition"
      >
        Send inn anmeldelse
      </button>
    </form>
  );
};

export default Rating;
