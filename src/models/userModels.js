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
        unique: true,
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

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model("userSchema", userSchema)