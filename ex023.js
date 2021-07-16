function tecla(){
    window.alert("O código da tecla pressionada foi: " + event.keyCode);
  }
  
  document.body.onkeypress = tecla;