const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");

const app = express();

const User = require("./user");

mongoose
  .connect(
    "mongodb://mongo:27017/"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.post("/signup",(req,res,next)=>{
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    user.save()
    .then(savedUser => {
        res.status(201).json({
            message: "User added successfully",
            user: {
              ...savedUser,
              id: savedUser._id
            }
          });
    });

});

const port = process.env.PORT || "3000";

app.set("port", port);

const server = http.createServer(app);

server.listen(port);