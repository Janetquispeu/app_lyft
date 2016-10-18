$(document).ready(function() {
	$("#input_celular").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	});
	$("#input_celular").keyup(function(evento) {
		var longitud = $(this).val().length;
		var $next=("#next");
		if (longitud == 9) {
			$("#aBtn").attr("href", "https://www.responsinator.com/?url=https%3A%2F%2Fjanetquispeu.github.io%2Fapp_lyft%2F");
		}else {
			$("#aBtn").removeAttr("href");
		}
	});
	$("#aBtn").click(function(evento) {
		var longitud = $("#input_celular").val().length;
		if (longitud == 9) {
			var numero=Math.round(Math.random()*899+100);
			var codigo="LAB - " + numero;
			alert(codigo);
		}
		else{
			alert("Ingrese un número telefónico de 9 dígitos");
		}
	});

	//Validadndo formulario 
	$("#aBtn_formulario").click(function(evento) {
		 var $firstName=$("#firstName").val().trim().length;
		 var $lastName=$("#lastName").val().trim().length;
		 var $email=$("#email").val().trim().length;
		if ($firstName == 0 || $lastName == 0 || $email==0) {
			alert("Ingrese todos los campos obligatorios");
		}
		else if(($firstName>=2 && $firstName<=20) && ($lastName>=2 && $lastName<=20) && ($email>=2 && $email<=20) ){
			var expresion=/^[a-zñáéíóúü]+$/gi
			var email=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			if(!expresion.test($("#firstName").value) || !expresion.test($("#lastName").value) || !email.test($("#email").value)){
				alert("Ingrese datos correctos");
			}
		}else{
			alert("La cantidad de caracteres en mayor que 2 y menor o igual que 20");
		}
	});

	

	

	

});




