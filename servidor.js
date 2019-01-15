var http = require("http");
var url = require("url");


function iniciar(encaminar, manegador){
    function onRequest(request, response){


        var data = "";
        var pathname = url.parse(request.url).pathname;
        console.log("[servidor]: Petició per a "+ pathname+ "rebuda");

        encaminar.encaminador(manegador, pathname, response, data);

        
 
        /* request.setEncoding("utf8");

        request.addListener("data", function(trozoPosteado) {
			data += trozoPosteado;
			console.log("[servidor]: Recibido trozo POST '" + trozoPosteado + "'.");
		});

		request.addListener("end", function() {
			encaminar.encaminador(manegador, pathname, response, data);
		}); */
    }



    http.createServer(onRequest).listen(8888);
    console.log("Servidor iniciat");
}


exports.iniciar = iniciar;