var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");

module.exports = function (app) {


    app.get("/scrape", function (req, res) {
        console.log("deleting database");
        db.Article.remove({}, function (err) {
                console.log("database removed");

            // Make a request via axios for the news section of `ycombinator`
            axios.get("https://hearthpwn.com/").then(function (response) {
                // Load the html body from axios into cheerio
                var $ = cheerio.load(response.data);
                // For each element with a "title" class
                $("article").each(function (i, element) {
                    // Save the text and href of each link enclosed in the current element
                    var link = $(element).find("a").attr("href").replace(/(\r\n|\n|\r)/gm, "");
                    var title = $(this).find("div > h2 > a ").text()
                    var summary = $(this).find("p").text()

                    // If this found element had both a title and a link
                    if (title && link && summary) {
                        // Insert the data in the scrapedData db
                        db.Article.create({
                            title: title,
                            link: link,
                            summary: summary
                        },
                            function (err, inserted) {
                                if (err) {
                                    // Log the error if one is encountered during the query
                                    console.log(err);
                                }
                                else {
                                    // Otherwise, log the inserted data
                                    console.log(inserted);
                                }
                            });
                    }
                });
            });


            // Send a "Scrape Complete" message to the browser
            res.send("Scrape Complete");
        });
    });
    app.get("/articles", function(req,res){
        db.Article.find({}).then( function(data){
            console.log(data);
            res.render("index",{Articles:data})
        })
    })
}