// Escreva uma função que usa 2 números e retorna o maior entre eles

function max(n1=0,n2=0){
    if(n1 > n2){
        return resposta = n1
    }
    else{
        return resposta = n2
    }

}
console.log(max(2,8))

function max2(numero1=0,numero2=0,numero3=0,numero4=0){
    var numeros = [numero1,numero2,numero3,numero4]
    const max = Math.max.apply(null,numeros)
    return max
}
console.log(max2(3,9,11,202))

function max3(n1,n2){
    return n1 > n2 ? n1 : n2
}
console.log(max3(2,2))

