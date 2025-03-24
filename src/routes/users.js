const express = require("express");
const router = express.Router();
const { hashPassword} = require("../middleware/bcrypt");
const { userLogIn, userSignUp } = require("../controllers/userControllers")
const {verifyToken} = require("../middleware/auth");
const upload = require("../middleware/multerConfig")

router.get("/", (req, res) => {
    res.send("Users page")
})

// router.get("/", userLogIn) = (req, res) => {
//     res.send("User login")
// }

router.get("/", userLogIn);

router.post("/signup", hashPassword, userSignUp);

router.post("/longin". userLogIn);

router.post("test", verifyToken, (req, res) => {
    console.log(req.userId);
    res.send("test")
})

router.put("/userUpdate", verifyToken, upload.single("image"), sharpMiddleware(), (req, res) => {
  
    if (!req.file) {
     return res.status(400).json({ error: "Error uploading the file. Wrong format ?" })
    }
    console.log(req.body) // Logs the form fields
    console.log(req.file) // Logs the uploaded file details
    console.log(req.userId) // From the verifyToken middleware
    const fileUrl =
     req.protocol + "://" + req.get("host") + "/" + req.file.processedPath
    res.json({ message: "User response reached", fileUrl })
   })

module.exports = router;