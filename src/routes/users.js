const express = require("express");
const router = express.Router();
const { hashPassword} = require("../middleware/bcrypt");

router.get("/", (req, res) => {
    res.send("Users page")
})

router.post("/", hashPassword, (req, res) => {
    const { firstName, email } = req.body;
    const hashPassword = req.hashPassword
    res.json({
        firstName,
        email,
        hashPassword,
        _id: "randomId4567",
    });
});



module.exports = router;