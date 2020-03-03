function add() {
    let elemento = document.createElement("li");
    const texto = document.createTextNode("Elemento adicional");
    elemento.appendChild(texto);
  
    let lista = document.getElementById("initialList");
    lista.appendChild(elemento);
  
    //let nuevoElemento = "<li>Texto de prueba</li>";
    //lista.innerHTML = lista.innerHTML + nuevoElemento;

    lista.innerHTML = lista.innerHTML;
  }