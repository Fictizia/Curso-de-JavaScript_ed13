//get elements
const titleElem = document.querySelector('title');
const dropdownOptions = document.getElementsByClassName('option');

function toggleClass(elem,className){
  if (elem.className.indexOf(className) !== -1){
    elem.className = elem.className.replace(className,'');
  }
  else{
    elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
  }

  return elem;
}

function toggleDisplay(elem){
    const curDisplayStyle = elem.style.display;			
  
    if (curDisplayStyle === 'none' || curDisplayStyle === ''){
      elem.style.display = 'block';
    }
    else{
      elem.style.display = 'none';
    }
  
  }

function toggleMenuDisplay(){
  const dropdown = document.querySelector('.dropdown');
  const menu = dropdown.querySelector('.menu');
  const icon = dropdown.querySelector('.fa-angle-right');

  toggleClass(menu,'hide');
  toggleClass(icon,'rotate-90');
}




function handleOptionSelected(index){
  const menu = document.querySelector('.menu');
  toggleClass(menu, 'hide');	

  //const newValue = e.target.textContent + ' ';
  const newValue = dropdownOptions[index].textContent + ' ';
  
  const icon = document.querySelector('.dropdown .title .fa');

  titleElem.textContent = newValue;
  titleElem.appendChild(icon);
  document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));

  //setTimeout is used so transition is properly shown
  setTimeout(() => toggleClass(icon,'rotate-90',0));
}





function handleTitleChange(){
  const result = document.getElementById('result');
  result.innerHTML = 'The result is: ' + titleElem.textContent;
}

