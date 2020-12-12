const nome = "Marcos";
const sexo = "M";
const idade = 80;
const contribuicao = 35;

const calContribuicao = idade + contribuicao;

HomemPodeAposentar = sexo == "M" && contribuicao >= 35 && calContribuicao >= 95
MUlherPodeAposentar = sexo == "F" && contribuicao >= 30 && calContribuicao >= 85

if(HomemPodeAposentar || MUlherPodeAposentar){
    console.log(`${nome} você pode se aposentar!`)
} else{
    console.log(`${nome} você não pode se posentar!`)
}