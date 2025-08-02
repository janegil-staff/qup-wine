import React from "react";

const AverageRating = ({averageRating, reviews}) => {
  return (
    <div className="flex items-center space-x-2 mt-2 mb-4">
      <div className="text-yellow-400 text-xl">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            {averageRating >= star
              ? "★"
              : averageRating >= star - 0.5
              ? "⯪"
              : "☆"}
          </span>
        ))}
      </div>
      <span className="text-sm text-gray-400">
        {reviews.length > 0
          ? `${averageRating.toFixed(1)} out of 5 (${reviews.length} reviews)`
          : "No reviews yet"}
      </span>
    </div>
  );
};

export default AverageRating;
