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
		localStorage.setItem("nombre", nombre);
		localStorage.setItem("apellido", apellido);

  if (nombre.split(' ').join('').length == 0 || apellido.split(' ').join('').length == 0 ||  email.length == 0 ) {
    // Si no se cumple la condicion...
    alert("Campos Obligatorios");
    return false;
  }
  else if ((nombre.split(' ').join('').length<2 || nombre.split(' ').join('').length>20) || (apellido.split(' ').join('').length<2 || apellido.split(' ').join('').length>21) || (email.length<4 || email.length>51)) {   
    alert("cantidad de letras no admitidas");
    return false;
  }
  else if (!regexNombre.test(nombre.split(' ').join('')) || !regexApellido.test(apellido.split(' ').join('')) || !regexCorreo.test(correo)) {
    // Si no se cumple la condicion...
    alert("Ingrese datos correctos");
    return false;
  }
  return true;
}
	$("#aBtn_formulario").click(function(evento){
		if($('#test5').is(':checked')){
			if(validacion()){
				$("#aBtn_formulario").attr("href","map.html");
			}

		}else{
			alert("Debe aceptar las condiciones");
		}
	});

	$("#copiaNombre").text(localStorage.getItem("nombre"));
	$("#copiaApellido").text(localStorage.getItem("apellido"));

	$("#nombre").text(localStorage.getItem("nombre"));
	$("#apellido").text(localStorage.getItem("apellido"));

// ---------------------------------------------------
// Insertar imagen
	window.imagenVacia = 'img/usuarioLogo.png';
	window.mostrarVistaPrevia = function mostrarVistaPrevia() {
    var Archivos, Lector;
    //Para navegadores antiguos
    if (typeof FileReader !== "function") {
        jQuery('#infoNombre').text('[Vista previa no disponible]');
        jQuery('#infoTamaño').text('(su navegador no soporta vista previa!)');
        return;
    }
    Archivos = jQuery('#archivo')[0].files;
    if (Archivos.length > 0) {
      Lector = new FileReader();
      Lector.onloadend = function(e) {
        var origen, tipo;
        //Envia la imagen a la pantalla
        origen = e.target; //objeto FileReader
        //Prepara la información sobre la imagen
        tipo = window.obtenerTipoMIME(origen.result.substring(0, 30));

        jQuery('#infoNombre').text(Archivos[0].name + ' (Tipo: ' + tipo + ')');
        jQuery('#infoTamaño').text('Tamaño: ' + e.total + ' bytes');
        //Si el tipo de archivo es válido lo muestra, 
        //sino muestra un mensaje 
        if (tipo !== 'image/jpeg' && tipo !== 'image/png' && tipo !== 'image/gif') {
            jQuery('#usuarioLogo').attr('src', window.imagenVacia);
            alert('El formato de imagen no es válido: debe seleccionar una imagen JPG, PNG o GIF.');
        }else {
          jQuery('#usuarioLogo').attr('src', origen.result);
          window.obtenerMedidas();
        }
      };
      Lector.onerror = function(e) {
        console.log(e)
      }
      Lector.readAsDataURL(Archivos[0]);
    }else{
      var objeto = jQuery('#archivo');
      objeto.replaceWith(objeto.val('').clone());
      jQuery('#usuarioLogo').attr('src', window.imagenVacia);
      jQuery('#infoNombre').text('[Seleccione una imagen]');
      jQuery('#infoTamaño').text('');
    };
	};

	//Lee el tipo MIME de la cabecera de la imagen
	window.obtenerTipoMIME = function obtenerTipoMIME(cabecera) {
	  return cabecera.replace(/data:([^;]+).*/, '\$1');
	}

	//Obtiene las medidas de la imagen y las agrega a la 
	//etiqueta infoTamaño
	window.obtenerMedidas = function obtenerMedidas(){
	  jQuery('<img/>').bind('load', function(e) {
	    var tamaño = jQuery('#infoTamaño').text() + '; Medidas: ' + this.width + 'x' + this.height;
	    jQuery('#infoTamaño').text(tamaño);
	  }).attr('src', jQuery('#usuarioLogo').attr('src'));
	}

	jQuery(document).ready(function() {
	  //Cargamos la imagen "vacía" que actuará como Placeholder
	  jQuery('#usuarioLogo').attr('src', window.imagenVacia);
	  //El input del archivo lo vigilamos con un "delegado"
	  jQuery('#botonera').on('change', '#archivo', function(e) {
	      window.mostrarVistaPrevia();
	  });
	  //El botón Cancelar lo vigilamos normalmente
	  jQuery('#cancelar').on('click', function(e) {
	    var objeto = jQuery('#archivo');
	    objeto.replaceWith(objeto.val('').clone());
	    jQuery('#usuarioLogo').attr('src', window.imagenVacia);
	    jQuery('#infoNombre').text('[Seleccione una imagen]');
	    jQuery('#infoTamaño').text('');
	  });
	});
});
		






