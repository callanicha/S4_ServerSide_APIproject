const express = require("express");
const app = express();
const port = 3000;
const test = require("./test");
const router = express.Router();
const userRoutes = require("./routes/users");
const connectDB = require("./utils/db");
const path = require("path");

app.use(express.json()); 

// MIDDLEWARE
app.use((req, res, next) => {
    test()
    next();
});

// ROUTES
app.use("/api/users", userRoutes)

// cors middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    next()
   })

connectDB();


app.get("/", (req, res) => {
    res.send("Welcome to my API ! e-commerce backed 🤳")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")))