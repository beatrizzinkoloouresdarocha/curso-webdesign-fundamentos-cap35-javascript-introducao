/*
Muito abaixo do peso 16 a 16,9 kg/m2
Abaixo do peso 17 a 18,4 kg/m2
Peso normal 18,5 a 24,9 kg/m2
Acima do peso 25 a 29,9 kg/m2
Obesidade Grau I 30 a 34,9 kg/m2
Obesidade Grau II 35 a 40 kg/m2
Obesidade Grau III maior que 40 kg/m2
*/

function calcularIMC(peso,altura){
    if(peso === undefined || altura === undefined){
        throw Error("need two parameters: weigth and height")
    }

    return peso / (altura * altura)
}

function classificaIMC(imc){
    if(imc < 16.9){

    }else if(imc > 17 && imc <18.4)
}
let imc = calcularIMC(80,1.65)
