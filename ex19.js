/*Hoje vamos aprender sobre a função callback(chamar de volta) que pode ser abreviada como (cb)

basicamente ela é uma função que depende de outras para funcionar 

normalmente você declara uma funcão que vai somar dois numero, e você faz assim 

(fuction somar(numero1,numero2)){
    resultado = numero1 + numero2 

    console.log(`o resultado é {resultado}`)

e se você for fazer  uma função de multipicação você  faz mesma coisa, e escreve o console.log(`o resultado é {resultado}`) e para multiplicação a mesma coisa. seria melhor se existisse outra maneira de simplificar esse processo 


você pode usar a  função call back
que você guarda em uma fuction  e depois exibe o resultado nessa função vamos ver
}

*/

//criando a função call back, nesse caso vou chamar de show(mostra)

function show(value){
    console.log(`The result is  ${value}`)
}

//além de pedir dois parâmetros, eu coloco a função call back 
function sum(n1,n2,callback){
    let result = n1 + n2
    //coloco o resultado em uma função 
    callback(result)
}
//mesmo processo
//os valores dentro da call back da função irão para  minha função show
function multiplication(number1,number2, callback){
    let result = number1 * number2
    callback(result)
}
//mesmo processo, mais aqui abreviei para cb
function division(n1,n2,cb){
    result = n1/n2
    cb(result)
}
//aqui estou passando os dois parâmetros e a nossa função

division(2,6,show)
sum(20.3, 2.7, show)
multiplication(20,30,show)

//fazendo eu não precisso dar três consoles.logs para aparecer os resultados

//uma desvantagem é eu ser obrigado a passar o nome da fução se não o Javam  irá retornar um erro


