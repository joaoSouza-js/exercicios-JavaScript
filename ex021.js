function hours(){
    let Time = new Date()
    let hour = Time.getHours()
    let minuts = Time.getMinutes()
    let seconds = Time.getSeconds()

    if(seconds < 10){
    seconds = "0" + seconds}
    if(hour < 10){
        hour = "0" + hour
    }
    if(minuts < 10){
        minuts = "0" + minuts
    }

    let hours = `${hour}:${minuts}:${seconds}`
    return hours
}

function show(){
    var watch = window.document.querySelector('#relogio')
    var hour = hours()
    watch.innerHTML = hour
}

var tempo = setInterval(() => {
    show() 
}, 1000);


