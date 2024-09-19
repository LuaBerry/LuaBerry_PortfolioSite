import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    name: { type: String, default: "",},
    link: { type: String, default: "",},
})

const Link = mongoose.model("Link", linkSchema);

export default Link;