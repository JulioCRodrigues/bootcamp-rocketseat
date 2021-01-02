const express = require('express');
const nunjucks = require('nunjucks');
const videos = require('./data');

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server
})


server.get("/", function(req, res){
    return res.render("about");
});

server.get("/works", function(req, res){
    return res.render("works", {items: videos});
});

server.listen(5000, function(){
    console.log('server is running');
});