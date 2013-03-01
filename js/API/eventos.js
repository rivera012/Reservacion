// Eventos
$(document).ready (function(){
 document.addEventListener("deviceready", function() {

	if (!isLogin())
     window.location.href= "#login";
	 
	 $('#logEnv').tap(function(){
		  var nom = $('#logNom').val();
		  var lug = $('#logLug').val();
		  var ema = $('#logEma').val(); 
		  var tel = $('#logTel').val();
		  

		  
		  if (nom!='' && lug!='Lugar de Origen' && ema!='' && tel!=''){
			       
				   registrar(nom, lug, ema, tel);
				   
		  }else{
			  pgAlert ('Todos los campos son Requeridos','Reintentar');
		  }
});
      },false);
});
function isLogin()
{
	return false;
}

