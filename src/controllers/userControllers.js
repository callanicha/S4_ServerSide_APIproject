const { ModifiedPathsSnapshot } = require("mongoose");
const User = require("../models/userModels")

exports.userLogIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            throw new Error("Invalid Credentials")
        }
        const passwordMatch = await bcrypt.compare(password, foundUser.password)
        if (!passwordMatch) {
            throw new Error("Invalid Credentials")
        }
        const token = jwt.sign(
            {
             userId: foundUser._id,
            },
            process.env.SECRET_TOKEN_KEY,  // WE NEED TO SAVE THIS SECRET KEY AND NOT SHARE IT !
            { expiresIn: "24h" }
           )
           res.status(200).json(token)
    } catch {
    res.status(401).json({
        message: "Invalid credentails",
    })
}};

try {
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
} catch (error) {
    res.status(500).json({error: error.message})
}