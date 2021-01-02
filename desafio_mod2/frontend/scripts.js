const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const maxModal = document.querySelector('.max-modal');
const minModal = document.querySelector('.min-modal')
const modal = document.querySelector('.modal');

for(let card of cards){
    card.addEventListener("click", function() {

        const postId = card.getAttribute('id');

        if (modal.classList.contains("maxport")) {
            modal.classList.remove("maxport");
          }

        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${postId}`;
        modalOverlay.classList.add('active');
    });
  
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active');
});

document.querySelector('.max-modal').addEventListener("click", function(){
    modalOverlay.classList.add('active');
});

maxModal.addEventListener("click", function() {
    modal.classList.add("maxport");
});

minModal.addEventListener("click", function(){
    modal.classList.remove("maxport");
});