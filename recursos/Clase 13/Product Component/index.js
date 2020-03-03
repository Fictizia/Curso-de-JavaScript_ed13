var  variants =  [
    {
      variantColor: 'green',
      variantImage:  'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
    },
    {
      variantColor: 'blue',
      variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',    
    }
  ]

  function updateProduct(index) {  
    let imgNode = document.querySelector('img');
    imgNode.src = variants[index].variantImage;

    //selectedElement.style.backgroundColor = variants[index].variantColor;
    //style="{ backgroundColor: variant.variantColor }"
}
