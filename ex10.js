
/*     VELOCIMÊTRO
Faça uma função que imite um velcimêtro
A velocidade permitidada é 70km
A cada 5km acima d limite você ganha 1 ponto na carteira
Math.Floor()
*/

function velocity(velocity){
    if(velocity <= 70)
    return 'tenha uma boa viagem'

    velocity -= 70
    var points = Math.floor(velocity /5)
    
    if(points > 12){
        return(`você levou ${points} pontos na sua carterira ,portanto sua carterira será supendida`)
    }
    else{
        return(`você levou ${points} pontos em sua carteira, está na hora de tirar o pé` )
    }

}
console.log(velocity(50))

