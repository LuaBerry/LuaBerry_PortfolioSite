import mongoose from "mongoose";

const vaultSchema = new mongoose.Schema({
    title: {type:String, required: true, },
    link: { type: String, default: "",},
    image: { type: String, required: true, },
    time: {type: String, required: true, },
})

const Vault = mongoose.model("Vault", vaultSchema);

export default Vault;