const express = require("express");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();
//conncet to DB
connectDB();

//Init Middleware
app.use(express.json());

app.get("/", (req, res) => res.send("Api Running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
