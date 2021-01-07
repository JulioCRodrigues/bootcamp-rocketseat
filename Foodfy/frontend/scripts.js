const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');


for(let card of cards){
    addEventListener("click", function(){
        
        card.addEventListener("click", function(){
            const imageId = card.getAttribute('id');
            const title = card.querySelector('.title-card p').innerHTML;
            const author = card.querySelector('.author-card p').innerHTML;

            console.log(title);
            modalOverlay.classList.add('active');
            modalOverlay.querySelector('img').src = `images/${imageId}.png`
            modalOverlay.querySelector('.title-modal p').textContent = `${title}`;
            modalOverlay.querySelector('.author-modal p').textContent = `${author}`;

            
        });
        
    });
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
});

