var hs = 0 
var time = setTimeout(function(){
    console.log('oi')
},5000)
hs = 4

if(hs >=3){
    clearTimeout(time)
    setTimeout(function(){
        console.log('time out')
    },6000)
}
var party = setInterval(() => {
    console.log('festa na casa do zé')
}, 1000);

setTimeout(function(){
    clearInterval(party)
},6000)
