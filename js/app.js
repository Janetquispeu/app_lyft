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
		alert("LAB - " +  codVerificacion);
	});

	//Join next
	$("#numero_telefonico").text(window.localStorage.getItem("telefonoNum"));
	var codigoValido=localStorage.getItem("codigoLab");
	$("#aBtn_nextJoin").click(function(){
		var digito=$("#codigo_uno").val()+$("#codigo_dos").val()+$("#codigo_tres").val();
		if (digito==codigoValido) {
			$(this).attr("href","formulario.html");
		}
		else{
			alert("El numero de verificación no es correcto");
		}
	});

	function validacion() {
		var nombre=$("#firstName").val();
		var apellido=$("#lastName").val();
		var correo=$("#email").val();
		var regexNombre = /^[a-zñáéíóúü]+$/gi;
		var regexApellido = /^[a-zñáéíóúü]+$/gi;
		var regexCorreo = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if ((nombre.length>=2 && nombre.length<=20) && (apellido.length>=2 && apellido.length<=20) && (email.length>=5 && email.length<=50)) {   
    alert('Ingrese datos correctos');
    return false;
  }
  else if (!regexNombre.test(nombre) || !regexApellido.test(apellido) || !regexCorreo.test(correo)) {
    // Si no se cumple la condicion...
    alert("Ingrese datos correctos");
    return false;
  }
  else if ((nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) && (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) && (email == null || email.length == 0 || /^\s+$/.test(email))) {
    // Si no se cumple la condicion...
    alert("Ingrese datos correctos");
    return false;
  }
  else if(!$("#check").is(":checked")){
  	alert("Debe aceptar las condiciones");
  	return false;
  }
  $("#aBtn_formulario").attr("href","map.html");
  return true;
}
	$("#aBtn_formulario").click(validacion);

});
		






