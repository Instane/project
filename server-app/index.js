import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import gamesRoute from "./routes/games.js";
import questionsRoute from "./routes/questions.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB!")
    } catch (error) {
        throw(error);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!")
})

app.use(cookieParser())
app.use(express.json())

app.use("/auth", authRoute)
app.use("/games", gamesRoute)
app.use("/users", usersRoute)
app.use("/questions", questionsRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(8800, () => {
    connect()
    console.log("Connected to Database!");
});