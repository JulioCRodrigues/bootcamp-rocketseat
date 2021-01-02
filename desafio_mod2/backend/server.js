const express = require('express');
const nunjucks = require('nunjucks');
const posts = require('./data');

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

server.get("/", function(req, res){

    const about = {

        avatar_url: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
        title: "Rockeatseat",
        description: "Plataforma de educação em tecnologia",
        courses: [
            {name: "Discover"},
            {name: "Launchbase"},
            {name: "GoStack"}
        ],
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "LinkedIn", url: "https://www.linkedin.com/school/rocketseat/?originalSubdomain=br"},
            {name: "Twitter", url: "https://mobile.twitter.com/dieegosf"}

        ]

    }

    return res.render("about", {about});
});

server.get("/content", function(req, res){
    return res.render("content", {items: posts});
});

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.listen(5000, function(){
    console.log('server running');
});