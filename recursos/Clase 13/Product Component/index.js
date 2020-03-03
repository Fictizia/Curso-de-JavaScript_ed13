var  variants =  [
    {
      variantColor: 'green',
      variantImage:  'https://www.futbolemotion.com/imagesarticulos/132072/750/gorra-adidas-real-madrid-c40-2019-2020-hi-re-green-night-indigo-white-0.jpg'
    },
    {
      variantColor: 'blue',
      variantImage: 'https://www.futbolemotion.com/imagesarticulos/132071/750/gorra-adidas-real-madrid-c40-2019-2020-night-indigo-black-matte-gold-0.jpg',    
    }
  ]

  function updateProduct(index) {  
    let imgNode = document.querySelector('img');
    imgNode.src = variants[index].variantImage;

    //selectedElement.style.backgroundColor = variants[index].variantColor;
    //style="{ backgroundColor: variant.variantColor }"
}
