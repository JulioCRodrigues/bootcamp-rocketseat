const express = require('express');
const nunjucks = require('nunjucks');
const works = require('./data');

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get("/", function(req, res){

    const about = {
                    avatar_url: "https://avatars3.githubusercontent.com/u/33026055?s=400&u=d3e906790f6353c27afb776b56914e65195b0982&v=4",
                    name: "Julio Rodrigues",
                    role: "Estudante - Rocketseat",
                    description: 'Desenvolvedor full-stack focado em desenvolver os melhores websites. Aluno ativo da <a href="https:rocketseat.com.br" target="_blank">Rocketseat</a>',
                    links: [

                        { name: "Github", url: "https:github.com/JulioCRodrigues"},
                        { name: "Facebook", url: "https:facebook.com/VulgoHades"},
                        { name: "LinkedIn", url: "https://linkedin.com/in/juliocrodrigues"}

                    ]
                }


    return res.render("about", {about});
});

server.get("/works", function(req, res){
    return res.render("works", {items: works});
});

server.get("/work", function(req, res){
    
    const id = req.query.id;

    const work = works.find(function(work){
        
        return work.id == id 
        
    });

    if(!work){
        return res.send('Work not found!');
    }

    return res.render('work', {item: work});

});

server.listen(5000, function(){
    console.log('server is running');
});