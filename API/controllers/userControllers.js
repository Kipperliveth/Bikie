const User = require('../models/users') 
require('dotenv').config()

exports.createUser = async (req, res) => {
    let userExist = await User.findOne({email: req.body.email})
    if (userExist) {
        return res.json({
            message: 'Error!',
            Response: 'User already exist'
        })

    } else {
        let {names, email, country} = req.body
        let newUser = new User({
            names, email, country
        })

        let data = await newUser.save()
        return res.json({
            message: 'success',
            userData: data
        })
    }
}
exports.getAllUser= async (req, res) => {
    let getUsers = await User.find({})
    return res.json({
        message: "success!",
        Response: getUsers
    })
}

exports.getSingleUser= async (req, res) => {
    let getUsers = await User.findOne ({ "_id": req.params.id})
    return res.json({
        message: "success!",
        Response: getUsers
    })
}

exports.updateUserById = async (req, res) => {
    try{
        let {names, email, country} = req.body
        let updated = await User.findByIdAndUpdate(req.params,id,{names, email, country}, {new: true})
       return res.json({
        message: "success!",
        response: updated
       })
    }catch (err) {
        return res.json({
            message: err.message,
            response:"Fail to update"
        })
    }
}

exports.deleteUser = async (req, res) => {
    try{
        let deleteuser = await User.findByIdAndDelete({_id: req.params.id})
       return res.json({
        message: "sucess",
        response: deleteUser
       })

    } catch (err) {
        
    }
}