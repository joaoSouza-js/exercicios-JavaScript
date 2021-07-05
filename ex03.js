
/*hoje vamos valor sobre a estrutura de codição switch: 
nesse exemplo nós iremos verificar  a permição de um usuario*/

// primerio iremos cria uma variave com nome de permission('permission')
var permission = 'doutor'

// agora vamos utilizar a estrutura de controle switch, não esqueca de decalarar a variavel 
// a estrutura switch é pouco usada porque normalmente queremos saber se um número é maior que outro ou se uma palavra tem em uma frase, essa estrutura trabalha com dados um mais exatos
switch (permission) {

    // caso a palavra dentro da variavel permission for igual ('comun') faça isso:
    case('comun'):

    //mostre no console a seguinte mensagem('você é um usuário comun')*/
    console.log('você é um usuário comun')

    //pare a estrutura
    break;


    //// caso a palavra dentro da variavel permission for igual ('gerente') faça isso:

    case('gerente'):
    //mostre no console a seguinte mesasgem('você é o gerente)
    console.log('você é um gerente')

    //pare  a estrura
    break;


    case('diretor'):{
        console.log('você é um diretor')
    }
    break;
    //observação: é muito importante você utilizar o break no no final de cada case(caso) se você esqucer ele vai mostra na a resposta certa e as outras embaixo delas 
    default:
        console.log('desculpe mais não temos permiçao para ' + permission)
        break;
        // caso nenhuma da posibilidade acima for um caso deixe com defalut(padrão), uma mensagem de erro para não rentornar alguma coisa vazia

}
permission = 'comun'
switch(permission){

    case('gerente'):
    console.log('você tem a permição de um gerente')
    break;

    case('comun'):
    console.log('você é um usuário comun')
    break;

    case('chefe'):
    console.log('você a perimição de um chefe')
    break

}