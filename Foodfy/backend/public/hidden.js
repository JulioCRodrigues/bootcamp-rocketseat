const iButton = document.querySelector('.i-button')
const pButton = document.querySelector('.p-button')
const infoButton = document.querySelector('.info-button')

iButton.addEventListener('click', function(){

    const ingredientsDescription = document.querySelector('.ingredients-description')

    if(iButton){
        ingredientsDescription.classList.toggle('active')
    }

    if(iButton.textContent == 'Mostrar'){
        iButton.innerHTML = 'Esconder'
    } else {
        iButton.innerHTML = 'Mostrar'
    }

})


pButton.addEventListener('click', function(){

    const prepare = document.querySelector('.preparation')

    if(pButton){
        prepare.classList.toggle('active')
    }

    if(pButton.textContent == 'Mostrar'){
        pButton.innerHTML = 'Esconder'
    } else{
        pButton.innerHTML = 'Mostrar'
    }

})

infoButton.addEventListener('click', function(){

    const information = document.querySelector('.information')

    if(infoButton){
        information.classList.toggle('active')
    }

    if(infoButton.textContent == 'Mostrar'){
        infoButton.innerHTML = 'Esconder'
    } else{
        infoButton.innerHTML = 'Mostrar'
    }

})