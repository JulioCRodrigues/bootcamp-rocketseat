const nome = 'João';
const idade = 30;
const altura = 1.80;
const peso = 60;

const imc = peso / (altura * altura)

if(imc >= 30){
    console.log(`${nome} você está acima do peso!`)
} else{
    console.log(`${nome} você não está acima do peso!`)
}