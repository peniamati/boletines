// Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

// Recorrerlos

links.forEach(function(link) {

  // Agregar un evento click a cada uno de ellos
  link.addEventListener("click", function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');
    
    // Quitarle la animacion que tiene
    content.classList.remove("animate__zoomInDown");
    content.classList.remove("animate__animated");

    // Agregar animacion fadeOutUp
    content.classList.add("animate__animated");
    content.classList.add("animate__fadeOutUp");
  
    setTimeout(function(){
      location.href = "/index.html";
    }, 600)
    
  });
});


