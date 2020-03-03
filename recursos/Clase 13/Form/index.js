var formItems = document.getElementsByTagName('input');
var validateAllForm = true;



function validateValues() {
    console.log('dentro');
    for (let index = 0; index < formItems.length; index++) {
        const value = formItems[index].value;
        console.log(formItems[index].value);
        if (value === '') {
            validateAllForm = false;
        } 
    }

    //let buttonElement = document.getElementsByTagName('button');
    let status = validateAllForm || false;
    let message = status ? 'Gracias por rellenar adecuadamente el formulario' : 'Completa adecuadamente el formulario, por favor'

    alert(message);
}