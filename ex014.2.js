var notas = [5,6]


function media(array){
    var media = 0;
    for(value of array){
        media += value
    }
    return media = media / array.length
}


function situation(notas){
    var mediaa = media(notas)

    console.log(`sua média foi ${mediaa}`)

    if(mediaa <= 5) return `estude mais`

    else if (mediaa <= 7) return `passou raspando`;

    else if (mediaa <= 9) return `parabéns`

    return `você é o rei`
    
}
console.log(situation(notas))