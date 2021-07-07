//exerciocio Nota Escolar
// obter a média a partir de um array(uma lista)
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

var notas = [
    80,80
]

function media(notas){
    var somaDasNotas = 0
    for(nota of notas){
        somaDasNotas += nota
    }
     var media = (somaDasNotas / notas.length)
     if(media <= 59){
         console.log(`com uma média de ${media} sua nota é F`)
     }
     else if(media <= 69){
         console.log(`com uma média de ${media} sua nota é D`)
     }
     else if (media <= 79){
         console.log(`com uma média de ${media} sua nota é C`)
     }
     else if ( media <= 89){
         console.log(`com uma média de ${media} sua nota é B`)
     }
     else if ( media <= 100){
         console.log(`com uma média de ${media} sua nota é A`)
     }
}
media(notas)