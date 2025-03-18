const User = require("../models/userModels")

exports.userLogIn = (req, res) => {
    res.send("User login");
};

exports.userSignUp = async (req, res) => {
    const {firstName, email, lastName, imageUrl, role} = req.body
    const hashPassword = req.hashPassword

    const newUser = new User({
        firstName,
        lastName,
        imageUrl,
        email,
        password: hashPassword,
        role,
        inventory: [],
    })

    const savedUser = await newUser.save()
    res.status(201).json({firstName: savedUser.firstName, email: savedUser.email, role: savedUser.role})
}