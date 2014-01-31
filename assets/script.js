var DZ = new Dropzone("#dropzone", { url: "./", paramName:'image'});
var $response = document.getElementById("response");

DZ.on("success", function(file, response){
	var formatted = JSON.stringify(response, null, "    ");
	
	$response.innerHTML += "<strong style='color:green'>Uploaded Completed</strong> : \n"; 
	$response.innerHTML += "<strong>name</strong> : "+file.name+"\n"; 
	$response.innerHTML += "<strong>size</strong> : "+humanFileSize(file.size)+"\n"; 
	$response.innerHTML += "<strong>time</strong> : "+moment(file.lastModifiedDate).format('lll')+"\n\n"; 
	$response.innerHTML += "<strong>Response :</strong>\n";
	$response.innerHTML += formatted;
});

DZ.on("error", function(file, response){

	$response.innerHTML += "<strong style='color:#c00'>Uploaded Failed</strong> : \n"; 
	$response.innerHTML += "<strong>name</strong> : "+file.name+"\n\n";
	$response.innerHTML += "<strong>Response :</strong>\n";
	$response.innerHTML += response;
});

function humanFileSize(size) {
    var i = Math.floor( Math.log(size) / Math.log(1024) );
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
};