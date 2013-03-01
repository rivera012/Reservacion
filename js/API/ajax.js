// Ajax

function registrar(nom, lug, ema, tel){
	$.ajax({
		  type: "POST",
		  url: "http://igitsoft.com/pgtest.php",  //se enviara a un servidor
		  data: "nom="+nom+"&lug="+lug+"&ema="+ema+"&tel"+tel
	}).done(function( msg ) {
		if (msg==1)
	  	  pgAlert(msg, 'Aceptar');
			  else
		  pgAlert('error', 'Cancelar');
	
	});
}