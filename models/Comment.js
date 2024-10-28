import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  imageId: { type: String, required: true },
  userName: { type: String, required: true },
  commentText: { type: String, required: true },
  timestamp: Date,
});

const Comment =
  mongoose.models.Comments || mongoose.model("Comments", CommentSchema);

export default Comment;
