var DZ = new Dropzone("#dropzone", { url: "./", paramName:'image'});
var $response = document.getElementById("response");

var divider = "\n--------------------------------------------------------------------------------------------------------------------------\n\n";

DZ.on("success", function(file, response){
	var formatted = JSON.stringify(response, null, "    ");
	
	var responseStr = "";
	responseStr += "<strong style='color:green'>Uploaded Completed</strong> : \n"; 
	responseStr += "<strong>name</strong> : "+file.name+"\n"; 
	responseStr += "<strong>size</strong> : "+humanFileSize(file.size)+"\n"; 
	responseStr += "<strong>time</strong> : "+moment(file.lastModifiedDate).format('lll')+"\n\n"; 
	responseStr += "<strong>Response :</strong>\n";
	responseStr += formatted + "\n";

	$response.innerHTML = responseStr + divider + $response.innerHTML;
});

DZ.on("error", function(file, response){
	var responseStr = "";

	responseStr += "<strong style='color:#c00'>Uploaded Failed</strong> : \n"; 
	responseStr += "<strong>name</strong> : "+file.name+"\n\n";
	responseStr += "<strong>Response :</strong>\n";
	responseStr += response  + "\n";

	$response.innerHTML = responseStr + divider + $response.innerHTML;
});

function humanFileSize(size) {
    var i = Math.floor( Math.log(size) / Math.log(1024) );
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
};