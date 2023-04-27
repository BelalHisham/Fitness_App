const mongoose = require('mongoose')
// bcrypt is a hashinf function that can hash our password in a scure way
const bcrypt = require('bcrypt')
const validator = require('validator')


const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Creating static signup method we have to use the function keyword not the => because we are using "this" keyword
userSchema.statics.signup = async function(email, password) {

    // Validation
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is no valid')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')

    }




    const exists = await this.findOne({email})

    if (exists) {
        throw Error('Email already in use')
    }

    /* bcrypt uses salt which is a random string od char that added to the password before it gets hashed 
    that means if 2 ppl used the same password and the salt is diff the the hashed password would be diff
    so it prevent hackers from password matching if they manged to crack one */
    
    // it takes time to creat by design that is why we use await
    // the 10 is the number of rounds, the hiegher the number the longer it takes to crack but also it takes longer for users to signup as well
    const salt = await bcrypt.genSalt(10) 
    const hash = await bcrypt.hash(password, salt)

    // We are using "this" keyword to refer to the User (we can not use the User as we are exporting this here)
    const user = await this.create({email, password: hash})

    return user



}






module.exports = mongoose.model('User', userSchema)