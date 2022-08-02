const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    "names": {
        type: String,
        require: true,
    },

    "email": {
        type: String,
        require: true,
    },

    "country": {
        type: String,
        require: true,
    },

    "Phone": {
        type: Number,
        require: true,
    },

    "created_at": {
        type: Date,
        Default: Date.now
    }
})
module.exports = mongoose.model("user", userSchema) 