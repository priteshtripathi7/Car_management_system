let pass = ["user1" , "user2"];
let user = ["user@yahoo.com" , "user2@gmail.com"];
let len = pass.length;
let temp;
/*pass.push("user1");
pass.push("user2");
user.push("user@yahoo.com");
user.push("user2@gmail.com");*/
//user3ABCD
function validate(){
    let i;
    let len_temp = temp;
    console.log(len_temp);
    for(i=0;i<len_temp;i++)
    {
        let user_var = user[i];
        let pass_var = pass[i];
        if(document.getElementById("username").value === user_var && document.getElementById("password").value === pass_var)
        {
            alert("VALIDATION SUCCESS!!!");
            return true;
        }
    }
    /*if((   document.getElementById("username").value === "user@yahoo.com"
       && document.getElementById("password").value == "user1" ) || (document.getElementById("username").value === "user2@gmail.com"
       && document.getElementById("password").value == "user2" ))
    {
        alert( "VALIDATION SUCCESS!!!!");
        return true;
    }*/
    
    if(i==len)
    {
        alert("VALIDATION FAILED!!!!");
        return false;
    }
}

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
    
    user.push(username);
    pass.push(password);
    len=pass.length;
    temp=len;
    console.log(len);
	alert("Welcome "+ username.value +" you have been added as a new user.");
   	return true;
   	
}