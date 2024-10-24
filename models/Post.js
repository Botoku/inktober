import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  artistName: { type: String, required: true },
  artistClerkID: { type: String, required: true },
  imgUrl: { type: String, required: true },
  theme: { type: String, required: true },
});

const Post = mongoose.models.IMGPost || mongoose.model("IMGPost", PostSchema);

export default Post;
