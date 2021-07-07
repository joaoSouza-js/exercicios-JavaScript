/* Criar um método para ler as propiedades de um objeto
E exibir somente as propiedades do tipo string qque estão nesse objeto */

var filme = {
    nome:'Avengers',
    ano: 2018,
    diretor: 'Kevin fight',
    personagem: "Thor"
}

function readstring(objetos){
    for(objeto in objetos){
        if(typeof(objetos[objeto]) == 'string'){
            console.log(objeto,objetos[objeto])
        }
    }
}

readstring(filme)