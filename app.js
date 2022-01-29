require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");



const itemRouter = require("./routes/items");

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => { console.log("mongodb connection established") },
    e => console.error(e)
);

app.use("/", itemRouter);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 4000;
}

app.listen(port, function () {
    console.log("Server started on port: ", port);
});