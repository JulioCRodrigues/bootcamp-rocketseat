const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express();

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("home", {items: recipes})
})

server.get("/home", function(req, res){
    return res.render("home", {items: recipes})
})

server.get("/recipes", function(req, res){

    return res.render('recipes', {items: recipes})

})

server.get("/recipe/:id", function(req,res) {
    const recipeId = req.params.id

    if (!recipes[recipeId]) {
        return res.send('Pagina nao encontrada')
    }
    return res.render('recipe', { item: recipes[recipeId]})
})

server.listen(5000, function(){
    console.log('server is running')
});