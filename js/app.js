$(document).ready(function() {
	$("#input_celular").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
		var $btnNext=$("#next");
		$btnNext=disabled;
		if(ascii.length !=0){
			return true;
		}else{
			return false;
		}
	});

	$("#input_celular").keyup(function(evento) {
		var longitud = $(this).val().length;
		var $next=("#next");
		if (longitud == 9) {
			$("#aBtn").attr("href", "https://www.responsinator.com/?url=https%3A%2F%2Fjanetquispeu.github.io%2Fapp_lyft%2F");
			$(this).attr("maxlength","9");
			$("#next").click(function(){
				var numero=Math.round(Math.random()*899+100);
				var codigo="LAB - " + numero;
				alert(codigo);
				//repetir if  con la condicion en el evento y llamar co0n una funcio n
			});
		} else {
			$("#aBtn").removeAttr("href");
		}
	});
});
