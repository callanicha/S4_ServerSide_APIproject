const express = require("express");
const router = express.Router();
const { hashPassword} = require("../middleware/bcrypt");
const { userLogIn, userSignUp } = require("../controllers/userControllers")

router.get("/", (req, res) => {
    res.send("Users page")
})

// router.get("/", userLogIn) = (req, res) => {
//     res.send("User login")
// }

router.get("/", userLogIn);

router.post("/", hashPassword, userSignUp);



module.exports = router;