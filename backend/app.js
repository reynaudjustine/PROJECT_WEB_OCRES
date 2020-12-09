//Connextion à MongoDB
const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;
const dbName = "Juscar";
const dbURL=`mongodb://localhost:27017/${dbName}`
mongoose.connect(dbURL,{useNewUrlParser:true, useUnifiedTopology: true}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
);
const cors = require('cors');


var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var shoesrouter = require("./routes/shoes.route");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/shoes",shoesrouter);

module.exports = app;
