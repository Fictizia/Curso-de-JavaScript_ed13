
function changeColor() {
    var label = document.querySelector('.txt');
    var button = document.querySelector('.btn'); 

    label.innerHTML = 'Ahora haz click en el boton';
    button.addEventListener('click', changeBackgroundColor);
    /*() => {
      document.body.style.backgroundColor = 'fuchsia';
    }*/
}

function changeBackgroundColor (event){
  event.target.style.backgroundColor = 'fuchsia';
  //document.body.style.backgroundColor = 'fuchsia';
}