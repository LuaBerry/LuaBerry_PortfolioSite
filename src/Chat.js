import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    text: { type: String, required: true, },
    sentAt: {type: Date, required: true, default: Date.now},

})

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;