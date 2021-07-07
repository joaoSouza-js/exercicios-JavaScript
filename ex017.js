function newPhone(marca='',tela=0,capacidade=0,ano =0){
    return{
        marca,
        tela,
        capacidade,
        ano,
    }
    
}

var celular1 = newPhone('motorola',3.2,5000,2018)


for(key in celular1){
    console.log(celular1[key])
}
var celular2 = {...celular1}
console.log(celular2)