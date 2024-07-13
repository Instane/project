import User from "../models/User.js"

export const createUser = async (req,res,next) => {
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        next(err)
    }
    
}

export const updateUser = async (req,res,next) => {

    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new:true })
        res.status(200).json(updateUser)
    } catch (err) {
        next(err)
    }
    
}

export const deleteUser = async (req,res,next) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Question has been deleted")
    } catch (err) {
        next(err)
    }
    
}

export const getUser = async (req,res,next) => {

    try {
        const question = await User.findById(req.params.id)
        res.status(200).json(question)
    } catch (err) {
        next(err)
    }
    
}

export const getAllUser = async (req,res,next) => {

    console.log("User")
    next()
    try {
        const User = await User.find()
        res.status(200).json(User)
    } catch (err) {
        next(err)
    }
    
}