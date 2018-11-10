$(function() {
    $("#toggler").click(function(){
    		$("#nav__toggler").toggle(1000);
    		$(".Navbar").css("background-color","#cecece");
    		$("a.Navbar").css("color","black !important");
    });
});
