function validate(){
    if((   document.getElementById("username").value === "user@yahoo.com"
       && document.getElementById("password").value == "user1" ) || (document.getElementById("username").value === "user2@gmail.com"
       && document.getElementById("password").value == "user2" ))
    {
        alert( "VALIDATION SUCCESS!!!!");
        return true;
    }
    else{
        alert("VALIDATION FAILED!!!!");
        return false;
    }
}