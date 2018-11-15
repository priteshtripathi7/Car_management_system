//For not taking input before than today's date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
	dd='0'+dd;
} 
if(mm<10){
	mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("dateAvailable").setAttribute("min", today);
document.getElementById("tillDate").setAttribute("min", today);

function validateCar(){
	let name= document.getElementById('carName');
	let num = document.getElementById('carNumber');

	if(num.value.length != 9){
		alert("Error: The Car number should be exactly of nine digit");
		num.focus();
		return false;
	}

	var numbers = /[0-9]/g;
	if(!num.value.match(numbers)){
		alert("Error: Car Number must contain numbers");
		num.focus();
		return false;
	}

	var upperCaseLetters = /[A-Z]/g;
	if(!num.value.match(upperCaseLetters)){
		alert("Error: Car Number must conatin upperCaseLetters.");
		num.focus();
		return false;
	}

	let date1 = document.getElementById('dateAvailable');
	let date2 = document.getElementById('tillDate');
	if(date1.value >= date2.value){
		alert("Error: The pick up date cannot be more than end date .")
		date1.focus();
		return false;
	}

	alert("Thank you your car "+ name.value + " has been added to our list.");
	return true;
}
