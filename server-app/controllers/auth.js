import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../util/error.js"
import jwt from "jsonwebtoken"

export const register = async (req,res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            rank:req.body.rank,
            total_games:req.body.total_games,
            total_wins:req.body.total_wins,
            total_lose:req.body.total_lose
        })

        await newUser.save()
        res.state(200).send("User has been created")

    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) return next(createError(404, "User not found!"));
  
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPasswordCorrect)
        return next(createError(400, "Wrong password!"));

      const token = jwt.sign({ id: user._id }, process.env.JWT)
      res.cookie("access_token", token, {httpOnly: true,})

      res.status(200).json("You are now logged in.")

    } catch (err) {
        next(err);
    }
};