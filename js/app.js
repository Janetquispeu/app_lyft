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
			$("#aBtn").attr("href", "join.html");
		}else {
			$("#aBtn").removeAttr("href");
		}
	});
	//Signup validacion de 9 numeros

	$("#aBtn").click(function(evento) {
		var telefono=$("#input_celular").val();
		var longitud = telefono.length;
		if (longitud == 9) {
			var numero=Math.round(Math.random()*899+100);
			var codigo="LAB - " + numero;
			alert(codigo);
		}
		else{
			alert("Ingrese un número telefónico de 9 dígitos");
		}
		window.localStorage.setItem("codigoLab",numero);
		window.localStorage.setItem("telefonoNum",telefono);

	});

	//Correr el puntero
	$(".input").attr("maxlength","1");
	$(".input").keydown(function(evento) {
		var ascii = evento.keyCode;
		if ((ascii >= 48 && ascii <= 57) || ascii==8) {
		  $('.input').keyup(function(){
		    if($(this).val().length==$(this).attr("maxlength")){
		        $(this).parent().next().children().focus();
		    }
		    else if(ascii==8){
		    	$(this).parent().prev().children().focus();
		    }
		  });
		 }
		 else {
			alert("El numero de verificación no es correcto");
		}
	});

	$("#btn_resentCode").click(function(evento){
		var codVerificacion=localStorage.getItem("codigoLab");
		alert(codVerificacion);
	});

	//Join next
	$("#numero_telefonico").text(window.localStorage.getItem("telefonoNum"));
	var codigoValido=localStorage.getItem("codigoLab");
	$("#aBtn_nextJoin").click(function(){
		var digito=$("#codigo_uno").val()+$("#codigo_dos").val()+$("#codigo_tres").val();
		if (digito==codigoValido) {
			$(this).attr("href", "signup_formulario.html");
		}
		else{
			alert("El numero de verificación no es correcto");
		}
	});

	//Validadndo formulario 
	

	$("#aBtn_formulario").click(function(evento){
		 var $firstName=$("#firstName").val().trim().length;
		 var $lastName=$("#lastName").val().trim().length;
		 var $email=$("#email").val().trim().length;
		if ($firstName == 0 || $lastName == 0 || $email==0) {
			alert("Ingrese todos los campos son obligatorios");
		}
		else if(($firstName>=2 && $firstName<=20) && ($lastName>=2 && $lastName<=20) && ($email>=5 && $email<=50) ){
			var email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
			var expresion=/^[0-9a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/;
			var apellido=/^[0-9a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/;
			if(email.test($("#email").value) || !expresion.test($("#firstName").value) || !apellido.test($("#lastName").value)){
				alert("Ingrese datos correctos");
			}
			else {
				$(this).attr("href","map.html");
			}
		}else{
			alert("Datos incorrectos");
		}
	});
		
	/*$("#aBtn_formulario").click(function(evento){
		if($("#check").is(":checked")){
			if(validarFormulario()==false){
				$(this).attr("href","map.html");
			}
		}else{
			$(this).attr("href","map.html");
		}
	}); */

});




