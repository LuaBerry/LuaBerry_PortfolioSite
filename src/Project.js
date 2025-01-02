import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {type:String, required: true, },
    link: { type: String, default: "",},
    image: { type: String, required: true, },
    description: { type: String, required: true, },
    descriptionKR: { type: String, required: true, },
    skills: { type: Array, required: true, },
    time: {type: String, required: true, },
})

const Project = mongoose.model("Project", projectSchema);

export default Project;