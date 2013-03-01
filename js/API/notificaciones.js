// Notificaciones

function pgAlert(msj,btn) {
	
	navigator.notification.alert(msj, false, null, "Reservaciones", btn);  //alerta de phonegap
	
	} 
	
//beep
function sonar(num){
navigator.notification.beep(5);
}

//vibrate
function vibrar(ms){
navigator.notification.vibrate(500);
}
//confirm
function pgConfirm(msj, btns, fn){
navigator.notification.confirm(msj, fn,'Reservaciones', btns);
}