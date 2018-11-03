function validate(){
    if(   document.getElementById("username").value === "admin@xyz.com"
       && document.getElementById("password").value == "admin" )
    {
        alert( "VALIDATION SUCCESS!!!!");
    }
    else{
        alert("VALIDATION FAILED!!!!");
    }
}