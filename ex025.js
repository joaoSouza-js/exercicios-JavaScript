function createNewTrascion(id,description='',value=0,date){
    return{
        id,
        description,
        value,
        date
    }
}
var trasaction1 = createNewTrascion(2,'conta de luz',-20000,'20-2-2020')

var trasaction2 = createNewTrascion(3,'salário',200000,'3/3/2021')

var allTrasactions = [
    trasaction2,
    trasaction1
]

var trasaction3 = createNewTrascion(3,'vale refeição', 600, '2/12/2021')



allTrasactions.push(trasaction3)

console.log(allTrasactions[allTrasactions.length - 1])

console.log(allTrasactions.length)
