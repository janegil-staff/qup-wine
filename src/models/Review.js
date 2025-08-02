import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

export default mongoose.models?.Review ||
  mongoose.model("Review", ReviewSchema);
