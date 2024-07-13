import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema ({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    rank:{
        type: String
    },
    total_games:{
        type: Number
    },
    total_wins:{
        type: Number
    },
    total_lose:{
        type: Number
    }
}, {timestamps: true})

export default mongoose.model("User", UserSchema)