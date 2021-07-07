// faça uma função que retorne apenas oo números primos

function primo(numero){
    console.log(2)
    console.log(3)
    for(var contador = 2  ; contador <= numero; contador++)
    if(contador % 2 == 1){
        if(contador % 3 == 1 | contador % 3 == 2){
            console.log(contador)
        }
    }
}
primo(15)