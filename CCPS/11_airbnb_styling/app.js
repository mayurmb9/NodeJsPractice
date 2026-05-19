// Core Modules
const path = require("path");

// External Modules
const express = require("express");

//Local Module
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil")

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(userRouter);

app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")))


app.use((req, res, next) => {
    res.sendFile(path.join(rootDir,"views","404.html"));
})


app.listen(PORT, () => {
  console.log("Server is running on address http://localhost:" + PORT);
})