// Captura Foto
function tomarImg(){
	
	// capture callback
	var captureSuccess = function(mediaFiles) {	
			for (i = 0; i < mediaFiles.len; i++) {
				path = mediaFiles[i].fullPath;
				
		}
		pgAlert(path, "OK");
};

// capture error callback
	var captureError = function(error) {
		pgAlert(Errror.code,"Cancelar");
	};

// start image capture
	navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});

}