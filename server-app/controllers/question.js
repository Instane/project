import Questions from "../models/Questions.js"

export const createQuestions = async (req,res,next) => {
    const newQuestions = new Questions(req.body)

    try {
        const savedQuestions = await newQuestions.save()
        res.status(200).json(savedQuestions)
    } catch (err) {
        next(err)
    }
    
}

export const updateQuestions = async (req,res,next) => {

    try {
        const updateQuestions = await Questions.findByIdAndUpdate(req.params.id, { $set: req.body }, { new:true })
        res.status(200).json(updateQuestions)
    } catch (err) {
        next(err)
    }
    
}

export const deleteQuestions = async (req,res,next) => {

    try {
        await Questions.findByIdAndDelete(req.params.id)
        res.status(200).json("Question has been deleted")
    } catch (err) {
        next(err)
    }
    
}

export const getQuestions = async (req,res,next) => {

    try {
        const question = await Questions.findById(req.params.id)
        res.status(200).json(question)
    } catch (err) {
        next(err)
    }
    
}

export const getAllQuestions = async (req,res,next) => {

    console.log("Questions")
    next()
    try {
        const questions = await Questions.find()
        res.status(200).json(questions)
    } catch (err) {
        next(err)
    }
    
}