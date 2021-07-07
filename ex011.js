//façã uma  função que leia um número e subtraia ele até chegar no zero
//e eu saber se o numero em questão é par ou impar
/*exemplo: se o numero for 5 façã
5 é impar
4 é par
3 é  impar
2 é par 
1 impar 
0 par*/


function imparPar(numero=0){
    for(numero; numero >=0; numero--){
        if(numero % 2 == 0){
            console.log(`${numero} é par`)
        }
        else{
            console.log(`${numero} é impar`)
        }
    }
    
}
console.log(imparPar(10))