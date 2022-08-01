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
})
module.exports = mongoose.model("user", userSchema) 