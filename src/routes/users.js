const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Users page")
})

router.post("/", (req, res) => {
    const userData = req.body;
    res.status(201).json({ message: "User created", data: userData });
});


module.exports = router;


