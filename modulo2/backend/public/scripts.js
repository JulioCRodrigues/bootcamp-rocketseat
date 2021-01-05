const cards = document.querySelectorAll('.card');

for(let card of cards){
    card.addEventListener("click", function(){

        console.log('to aqui')
        const workId = card.getAttribute('id');
        window.location.href = `/work?id=${workId}`;
    });
} 
