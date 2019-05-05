
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");
mongoose.connect("mongodb://localhost/Hearthpwn", { useNewUrlParser: true });
require("./routes/APIroutes")(app);
require("./routes/htmlroutes")(app);


app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");

});
