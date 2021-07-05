// if.Else

// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18:00 : Boa tarde!
//Caso o contrário : Boa Tarde familía

//aqui estou criando uma variavel para colocar o objeto new Date()
let tempo = new Date()

// aqui estou pegando as horas e os minutos e colocando em variáveis
var hora = tempo.getHours()
var minutos = tempo.getMinutes()

// chegou a hora de utilizarmos uma estrutura de codição e a que eu escolhi foi o ele e if 
// eu estou usando o operador && que siginica basicamente  isso

/* (se hora for maior que 6 e hora for menor ou igual que 12 façã isso){mostre no cosole a seguinte mensagem(`São exatamente ${hora}:${minutos}`)}*/
var fullhous = hora + minutos
if(hora >= 6 && hora <= 12){
    console.log(`São exatamente ${hora}:${minutos}`)
    console.log('Bom dia')
}
else if (hora >= 13 && hora <= 18){
    console.log(`São exatamente ${hora}:${minutos}`)
    console.log('Boa tarde')
}
else{
    console.log(`São exatamente ${hora}:${minutos}`)
    console.log('boa noite família')
}



