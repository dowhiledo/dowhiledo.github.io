console.log("holaa");
// var jquery = require('jquery');
//
// var _nightmare = require('nightmare');
//
// var _nightmare2 = _interopRequireDefault(_nightmare);
//
// function _interopRequireDefault(obj) {
//     return obj && obj.__esModule ? obj : {default: obj};
// }
//
// var nightmare = (0, _nightmare2.default)();
//
// nightmare.goto('http://www.elcultural.com.pe/consultanotas/wfBuscarAlumno.aspx#')
//     .wait(3333)
//     .type('#txtBuscar', 'alfaro')
//     .click('#ext-gen134')
//     .evaluate(function () {
//         return document.title;
//     })
//     .screenshot('test.png')
//     .end()
//     .then(function (title) {
//     console.log(title);
// });

























/*

var jquery = require('jquery');
// jquery allows easy selection of css/html elements in the dom
var Nightmare = require('nightmare'),
    nightmare = Nightmare();
// nightmare is a simple wrapper for PhantomJS for web automation and scraping

var city = process.argv[2];
// use the first argument passed as the city to be searched

nightmare.goto('http://' + city + '.craigslist.org/search/cpg?is_paid=yes&postedToday=1')
// visits the city specified by the user and gets all computer gigs posted that day
    .wait(2000)
    // wait 2 seconds so page is guaranteed to be fully loaded
    .evaluate(function(){
        var gigs = [];
        // create an array to hold all gigs gathered by following code
        $('.hdrlnk').each(function(){
            item = {}
            item["title"] = $(this).text()
            item["link"] = $(this).attr("href")
            gigs.push(item)
        })
        // create a gig object with title and link, then push to the 'gigs' array
        return gigs
        // pass the gigs array forward so it can be looped through later on
    })
    .end()
    .then(function(result){
        console.log("To: nelsonkhan@gmail.com")
        console.log("From: nelsonkhan@gmail.com")
        console.log("Subject: Today's Gigs")
        console.log("\n")
        // set headers for email
        for(gig in result) {
            console.log(result[gig].title)
            console.log(result[gig].link)
            console.log("\n")
        }
        // print each gig to the console in a neat format
    })
    */
