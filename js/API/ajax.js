// Ajax

function registrar(nom, lug, mai, tel){
	$.ajax({
		  type: "POST",
		  url: "http://igitsoft.com/pgtest.php",  //se enviara a un servidor
		  data: "nom="+nom+"&lug="+lug+"&mai="+mai+"&tel"+tel
	}).done(function( msg ) {
		if (msg==1)
	  	  pgAlert(msg, 'Aceptar');
			  else
		  pgAlert('Error', 'Cancelar');
	
	});
}