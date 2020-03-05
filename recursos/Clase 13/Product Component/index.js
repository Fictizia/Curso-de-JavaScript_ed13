var items = [
    {ref: 'ADDY7721', img: 'https://www.futbolemotion.com/imagesarticulos/132071/750/gorra-adidas-real-madrid-c40-2019-2020-night-indigo-black-matte-gold-0.jpg'},
    {ref: 'ADDY7722',img: 'https://www.futbolemotion.com/imagesarticulos/132072/750/gorra-adidas-real-madrid-c40-2019-2020-hi-re-green-night-indigo-white-0.jpg'},
    {ref: 'ADDY7720',img: 'https://www.futbolemotion.com/imagesarticulos/132070/750/gorra-adidas-real-madrid-c40-2019-2020-white-dark-football-gold-0.jpg'}];

var totalItems = items.length;
var initialPosition = 0;

function changeItem () { //0
    initialPosition++;   //1

    if (initialPosition === totalItems) {
        initialPosition = 0;
    }

    let productImg = document.getElementsByTagName('img');
    productImg[0].src = items[initialPosition].img;

    let div = document.getElementsByClassName('container');
    let description = document.getElementsByTagName('p');
    
    let label = items[initialPosition].ref;
    let refText = document.createTextNode(label);
    let newDescription = document.createElement('p');

    newDescription.appendChild(refText);
    div[0].replaceChild(newDescription, description[0]);
}