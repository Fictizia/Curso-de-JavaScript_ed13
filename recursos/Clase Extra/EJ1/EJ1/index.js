/**
 * TEORIA
 * 
 * valor = document.getElementById("campo").value;
 * if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
 * return false;
 * }
 */



function checkValues(){ 
	var name = document.forms["RegForm"]["Name"];			 
	var email = document.forms["RegForm"]["EMail"]; 
	var phone = document.forms["RegForm"]["Telephone"]; 
	var what = document.forms["RegForm"]["Subject"]; 
	var password = document.forms["RegForm"]["Password"]; 
	var address = document.forms["RegForm"]["Address"];

	var item = [name,email,phone,what,password,address];
	createLabel(item);
}



function createLabel(list){
	let errorLabel = 'Please enter your ';

	list.map(function(elem){ 
		let result = true;
		if (elem.value === '') {
			elem.focus();
			window.alert(errorLabel + elem.name);
			result =  false; 
		}
		
		return result;
	 });
}

/**
 * elem => {
		let result = true;
		if (elem.value === '') {
			elem.focus();
			window.alert(errorLabel + elem.name);
			result =  false; 
		}
		return result;
	}
 */

/**
 *    

	if (name.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
	} 

	if (address.value == "")							 
	{ 
		window.alert("Please enter your address."); 
		address.focus(); 
		return false; 
	} 
	
	if (email.value == "")								 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (phone.value == "")						 
	{ 
		window.alert("Please enter your telephone number."); 
		phone.focus(); 
		return false; 
	} 

	if (password.value == "")					 
	{ 
		window.alert("Please enter your password"); 
		password.focus(); 
		return false; 
	} 

	if (what.selectedIndex < 1)				 
	{ 
		alert("Please enter your course."); 
		what.focus(); 
		return false; 
	} 

	return true; 
 */
