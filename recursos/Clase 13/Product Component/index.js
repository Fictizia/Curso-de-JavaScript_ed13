
var  variants =  [
    {
      variantColor: 'green',
      stock: 0,
      variantImage:  'https://www.futbolemotion.com/imagesarticulos/132072/750/gorra-adidas-real-madrid-c40-2019-2020-hi-re-green-night-indigo-white-0.jpg'
    },
    {
      variantColor: 'blue',
      stock: 9,
      variantImage: 'https://www.futbolemotion.com/imagesarticulos/132071/750/gorra-adidas-real-madrid-c40-2019-2020-night-indigo-black-matte-gold-0.jpg',    
    },
    {
    variantColor: 'gold',
    stock: 12,
    ref: 'ADDY7720',
    variantImage: 'https://www.futbolemotion.com/imagesarticulos/132070/750/gorra-adidas-real-madrid-c40-2019-2020-white-dark-football-gold-0.jpg'
    }
  ]

  var initialPosition = 0;
  var currentPosition = 0;

  function updateProduct(index) {  
    currentPosition = index;
  
    document.getElementById('btn').disabled = changeButtonState();
    

    
    let imgNode = document.querySelector('img');
    imgNode.src = variants[index].variantImage;

    let initialStock = document.getElementById('stock');

    let stock = 'Stock:'+ ' ' + variants[index].stock;
    let label = document.createTextNode(stock);
    
    let currentStock = document.createElement('p');
    currentStock.appendChild(label);

    document.querySelector('.product-info').replaceChild(currentStock,initialStock);
}

function addToCard() {
  
}


function changeButtonState() {  //Estado del boton 
  let result = true;
  if (variants[currentPosition].stock !== 0) {
    //btn.className = 'active';
    result = false;
  }
  return result;
  //btn.className = 'inactive';
}
