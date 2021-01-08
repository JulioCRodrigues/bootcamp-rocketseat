const iButton = document.querySelector('.i-button')
const pButton = document.querySelector('.p-button')

iButton.addEventListener('click', function(){

    const ingredientsDescription = document.querySelector('.ingredients-description')

    if(iButton){
        ingredientsDescription.classList.toggle('active')
    }

    if(iButton.textContent == 'MOSTRAR'){
        iButton.innerHTML = 'Esconder'
    }

})


pButton.addEventListener('click', function(){

    const prepare = document.querySelector('.preparation')

    if(pButton){
        prepare.classList.toggle('active')
    }

    if(pButton.textContent == 'MOSTRAR'){
        pButton.innerHTML = 'Esconder'
    }

})

