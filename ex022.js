/* faça um progama que  que conte 0 a 10 em intervaolo de 1 segundo */
var time;
var contador = 0 
time = setInterval(()=>{
    conTen()
},1000)

setTimeout(()=>{
    clearInterval(time)
},12000)

function conTen(){
    console.log(contador)
    contador += 1

}