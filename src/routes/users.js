const express = require("express");
const router = express.Router();
const { hashPassword } = require("../middleware/bcrypt");
const { userLogIn, userSignUp } = require("../controllers/userControllers");
const { verifyToken } = require("../middleware/auth");
const upload = require("../middleware/multerConfig");

// Users page route
router.get("/", (req, res) => {
    res.send("Users page");
});

// User login route
router.post("/login", userLogIn); // Fixed spelling from "longin"

// User signup route
router.post("/signup", hashPassword, userSignUp);

// Protected test route
router.post("/test", verifyToken, (req, res) => {
    console.log(req.userId);
    res.send("test");
});

// User update with image upload
router.put("/userUpdate", verifyToken, upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Error uploading the file. Wrong format?" });
    }
    console.log(req.body); // Logs the form fields
    console.log(req.file); // Logs the uploaded file details
    console.log(req.userId); // From the verifyToken middleware
    const fileUrl = req.protocol + "://" + req.get("host") + "/" + req.file.path;
    res.json({ message: "User response reached", fileUrl });
});

module.exports = router;
