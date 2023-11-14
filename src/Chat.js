import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    name: {type:String, required: true, },
    text: { type: String, required: true, },
    sentAt: {type: Date, required: true, default: Date.now},
})

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;