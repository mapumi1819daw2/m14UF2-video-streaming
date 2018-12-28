var querystring = require("querystring");

/**
 * Funció crida inicial que retornarà
 * 
 * Pel·lícula:
 *  . Titol
 *  . Director
 *  . Video
 *  . Foto
 *  . Descripció foto
 *  . Preferit
 *  . Genere
 * @param {Paràmetre per emetre la resposta} response 
 * @param {*} data 
 */
function inici(response, data){
    console.log("[Inici]");
}

function preferits(response, data){
    console.log("[Preferits]");
}

function cerca(response, data){
    console.log("[Cerca]");
}

exports.inici = inici;
exports.preferits = preferits;
exports.cerca = cerca;