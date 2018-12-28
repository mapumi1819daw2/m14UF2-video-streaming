function encaminador (manegador, pathname, response, data){
    console.log("[Encaminador]: Preparat per encaminar-> "+pathname);
    if(typeof manegador[pathname] === 'function'){
        return manegador[pathname](response, data);
    }
    else{
        console.log("[Encaminador]: No s'ha trobat la funció-> "+pathname);
    }
}

exports.encaminador = encaminador;