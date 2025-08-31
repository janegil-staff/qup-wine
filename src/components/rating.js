import React, { useState } from "react";
import Comment from "./comment";
import WineDropdown from "./WindeDropdown";

const Rating = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [selected, setSelected] = useState("Vin");

  const handleSubmit = async () => {
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId, // should be defined and non-empty
        rating, // should be a number like 4 or 5
        comment,
        type: selected, // optional, but good to include
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className=" text-green-200">Velg vin type</p>
      <WineDropdown setSelected={setSelected} selected={selected} />

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
