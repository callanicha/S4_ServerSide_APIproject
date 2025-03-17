const express = require("express");
const app = express();
const port = 3000;

// MIDDLEWARE
app.use((req, res, next) => {
    req.calculatedValue = 4 * 7; // Compute 4 * 7
    console.log("Middleware: Calculated Value =", req.calculatedValue);
    next();
});


app.get("/", (req, res) => {
    const responseMessage = `Hello, World! The calculated value is ${req.calculatedValue}`;
    console.log("Response Sent:", responseMessage);
    res.send(responseMessage);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});