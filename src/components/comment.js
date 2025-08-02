import React from "react";

const Comment = ({ comment, setComment }) => {
  return (
    <div>
      <label className="block font-medium mb-1">Din Kommentar:</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-gray-100"
        rows={3}
        placeholder="Skriv din vurdering..."
      />
    </div>
  );
};

export default Comment;
