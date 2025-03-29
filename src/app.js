window.onload = function() {
  //write your code here
  let = sujeto =['Un perro', 'Mi gato', 'Mi abuelo'] ;
  let = accion = ['Orino','se comio', 'vomito'];
  let = objeto =['mi ropa', 'mis zapatos', 'la tarea'];
  let = donde =['antes de salir','sobre la mesa','en el patio'];

  let sujetoRandom = sujeto[Math.floor(Math.random()* sujeto.length)]
  let accionRandom = accion[Math.floor(Math.random()* accion.length)]
  let objetoRandom = objeto[Math.floor(Math.random()* objeto.length)]
  let dondeRandom = donde[Math.floor(Math.random()* donde.length)]
  
  
    let excuse = document.getElementById("excuse") 
    excuse.innerHTML = `${sujetoRandom} ${accionRandom} ${objetoRandom} ${dondeRandom}`

};
