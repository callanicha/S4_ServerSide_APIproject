const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        requires: true,
    },
    lastName: {
        type: String,
        requires: true,
    },
    imageUrl:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    inventory: {
        type: Array,
        required: true,
    }
},
{timestamps: true}
)


module.exports = mongoose.model("userSchema", userSchema)