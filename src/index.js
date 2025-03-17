const express = require("express");
const app = express();
const port = 3000;
const test = require("./test");
const router = express.Router();
const userRoutes = require("../routes/users");

// MIDDLEWARE
app.use((req, res, next) => {
    test()
    req.calculatedValue = 4 * 7; 
    console.log("Middleware: Calculated Value =", req.calculatedValue);
    next();
});

// ROUTES
app.use("/api/users", userRoutes)

// app.get("/", (req, res) => {
//     const responseMessage = `Hello, World! The calculated value is ${req.calculatedValue}`;
//     console.log("Response Sent:", responseMessage);
//     res.send(responseMessage);
// });

app.get("/", (req, res) => {
    res.send("Welcome to my API ! e-commerce backed 🤳")
   })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});