/*função FizzBuzz
se o número for divisível por 3  retorna === Fizz
se o número for divisível por 5  retorna === Buzz
Se o número não for divisível  por 3 ou 5 retorna => o própio número
Se Não for um número retorna => 'Não é um númeoro'*/

function FizzBuzz(something){
    if(typeof(something) == 'number'){
        if(something % 3 == 0 && something % 5 == 0){
            return 'FizzBuzz'
        }
        else if(something % 3 == 0){
            return 'Fizz'
        }
        else if (something % 5 == 0){
            return (`Buzz`)
        }
        else{
            return (`${something} não é um número divisível por 3 e nem por 5`)
        }
    }
    else{
        return(`não é um  número`)
    }
}
console.log(FizzBuzz(15))
//string