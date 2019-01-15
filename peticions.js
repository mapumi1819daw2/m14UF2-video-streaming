var querystring = require("querystring");


var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

var ObjectId = require("mongodb").ObjectID;

var ruta = "mongodb://localhost:27017/vstreaming";

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
function pelis(response, data){

    var inici = "[Inici]";
    console.log(inici);

    MongoClient.connect(ruta, function(err, db){
        assert.equal(null, err);
        console.log(inici+ ": conexió correcta");
        console.log(inici+ ": consulta de totes les dades");

        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"});

        /* Obtenim totes les dades */
        var dades = db.collection('videos').find({});
        dades.each(function (err, doc){
            assert.equal(null, err);
            console.log(inici+ ": dades bucle");
            
            if(doc != null){
                response.write(doc.Títol+"<BR>");
            }

            else{
                response.end();
            }
        });
    });
    
}


/**
 * Directors
 * 
 * Nom
 * Foto
 * Bio
 * Pelis
 */
function directors(response, data){

    var funcio = "[directors] ";
    console.log(funcio);


    MongoClient.connect(ruta, function(err, db){
        assert.equal(null, err);
        console.log(funcio+ ": conexió correcta");
        

        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"});

        /* Obtenim totes les dades */
        var dades = db.collection('directors').find({});
        dades.each(function (err, doc){
            assert.equal(null, err);
            console.log(funcio+ ": dades bucle");
            
            if(doc != null){
                response.write("<img src='"+doc.Foto+"'/>");
            }

            else{
                response.end();
            }
        });
    });
}


function preferits(response, data){
    var funcio = "[preferits] ";
    console.log(funcio);


}
function cercaPelis(response, data){
    var funcio = "[cercaPelis] ";
    console.log(funcio);


    console.log(funcio+": valor "+ querystring.parse(data)["Director"]);
}



function cercaDirectors(response, data){
    var funcio = "[cercaDirectors] ";
    console.log(funcio);


    console.log(funcio+": valor "+ querystring.parse(data)["Director"]);
}



exports.pelis = pelis;
exports.directors = directors;
exports.preferits = preferits;
exports.cercaPelis = cercaPelis;
exports.cercaDirectors = cercaDirectors;