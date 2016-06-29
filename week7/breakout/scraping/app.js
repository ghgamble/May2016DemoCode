var request=require("request");
var cheerio=require("cheerio");

request('http://xkcd.com', function (error, response, html) {
    // console.log(response, error)
    if (!error && response.statusCode == 200) {
        // console.log(html)
        // pass DOM to cheerio
        var $ = cheerio.load(html);
        var theTitle = $('#comic img').attr('title')
        console.log(theTitle)
         
        console.log($('#comic img').attr('src'))
    }
})
