function formValidate(e)
{
	let username = document.getElementById('username');
	if(username.value.length >= 30){
		alert("Error: Person name should be less than 40 characters.");
		username.focus();
		return false;
	}

	let phone = document.getElementById('mobile');
	if(isNaN(phone.value)){
		alert("Error: Phone/Mobile number should be 10 digit.");
		phone.focus();
		return false;
	}

	if(phone.value.length != 10){
		alert("Error: Phone/Mobile number should be 10 digit.");
		phone.focus();
		return false;
	}
	
	let driving = document.getElementById('dril');
	if(isNaN(driving.value)){
		alert("Error: Driving liscense ID should be of 8 digit number");
		driving.focus();
		return false;
	}

	if(driving.value.length != 8){
		alert("Error: Driving liscense ID should be of 8 digit number");
		driving.focus();
		return false;
	}
	
	let password = document.getElementById('pass');
	let cnfrpassword = document.getElementById('cnfrpass');
	if((password.value !="") && (password.value == cnfrpassword.value)){

		let name = document.getElementById('username').value;
		if(password.value.length <8){
			alert("Error: Password must contain at least eight characters!");
			password.focus();
			return false;
		}
		if(password.value == name){
			alert("Error: Person name cannot be password.");
			password.focus();
			return false;
		}
		var numbers = /[0-9]/g;
		if(!password.value.match(numbers)){
			alert("Error: password must contain at least one number (0-9)!");
	        password.focus();
	        return false;
		}
		var lowerCaseLetters = /[a-z]/g;
		if(!password.value.match(lowerCaseLetters)){
			alert("Error: password must contain at least one lowercase letter (a-z)!");
	        password.focus();
	        return false;
		}
		var upperCaseLetters = /[A-Z]/g;
		if(!password.value.match(upperCaseLetters)){
			alert("Error: password must contain at least one uppercase letter (A-Z)!");
	        password.focus();
	        return false;
		}
	}
	else{
		alert("Error: Your password and confirmation password do not match");
		password.focus();
		return false;
	}
	
	alert("Welcome "+ username.value +" you have been added as a new user.");
   	return true;
   	
}