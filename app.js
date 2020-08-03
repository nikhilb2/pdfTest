var express = require("express");
var path = require("path");

var routes = require("./routes");
var fs = require('fs');
var pdf = require('html-pdf');
var ejs = require('ejs');

var app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

var compiled = ejs.compile(fs.readFileSync(__dirname + '/views/comments.html', 'utf8'));
var html = compiled({ title : 'EJS', text : 'Hello, World!' });
var options = { format: 'A4',
"base": "file:///Users/nikhilbhatia/Documents/projects/NodeJs/view"
 };
app.use(routes);

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
})

pdf.create(html).toFile('./result.pdf',() => {
    console.log('pdf done')
})
