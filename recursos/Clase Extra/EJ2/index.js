
function changeColor() {
    var label = document.querySelector('.txt');
    var button = document.querySelector('.btn'); 

    label.innerHTML = 'Ahora haz click en el boton';
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = 'fuchsia';
      });
}