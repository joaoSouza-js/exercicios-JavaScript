// Criar uma função somar que +-retorne
// soma de todos os multiplos de 3 e 5

// Multiplos de 3
// 3, 6, 9
// Multiplos de 5
// 5, 10, 15

//Somando os multiplos
// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os dois

function somar(valor){
    var resultado = 0
    for(var c = 0; c <= valor; c += 3 ){
        resultado += c
    }
    for(c = 0; c <= valor; c += 5){
        resultado += c
    }
    console.log(resultado)
}
somar(15)