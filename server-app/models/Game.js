import mongoose from "mongoose";
const { Schema } = mongoose;

const GameSchema = new mongoose.Schema ({
    gametype:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    score:{
        type: String,
        required: true
    },
    oppscore:{
        type: String,
        required: false
    },
    status:{
        type: String,
        required: false
    }
})

export default mongoose.model("Game", GameSchema)