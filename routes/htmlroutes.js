var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");

module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        res.render("index");
    });

    // app.get("/scrape", function (req, res) {
    //     // console.log("deleting database");
    //     db.Article.remove({}, function (err) {
    //     // console.log("database removed");
    //     myData = [];
    //     // Make a request via axios for the news section of `ycombinator`
    //     axios.get("https://hearthpwn.com/").then(function (response) {
    //         // Load the html body from axios into cheerio
    //         var $ = cheerio.load(response.data);
    //         // For each element with a "title" class
    //         $("article").each(function (i, element) {
    //             // Save the text and href of each link enclosed in the current element
    //             var link = $(element).find("a").attr("href").replace(/(\r\n|\n|\r)/gm, "");
    //             var title = $(this).find("div > h2 > a ").text()
    //             var summary = $(this).find("p").text()

    //             // If this found element had both a title and a link
    //             if (title && link && summary) {
    //                 // Insert the data in the scrapedData db
    //                 myData.push({
    //                     title: title,
    //                     link: link,
    //                     summary: summary
    //                 });
    //             }
    //         });
    //     });
    // });

    //     db.Article.insertMany(myData).then(function(err, inserted){
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
                // res.replace('/');
    //         }
    //     });
    // });
};  