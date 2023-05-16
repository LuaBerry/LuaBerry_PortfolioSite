import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    body: { type: String, required: true, },
    hashtags: [{ type: String, }],
    createdAt: {type: Date, required: true, default: Date.now},

})

const Post = mongoose.model("Post", postSchema);

export default Post;