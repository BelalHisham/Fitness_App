const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const creatToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'} )
}


// login user
 const loginUser = async (req, res) => {
    res.json({mssg: 'Login user'})
 }

// signup user
const signupUser = async (req, res) => {

    const {email, password} = req.body

    try{
        const user = await User.signup(email, password)

        // create a token
        const token = creatToken(user._id)

        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }

 }

 module.exports = {loginUser, signupUser}