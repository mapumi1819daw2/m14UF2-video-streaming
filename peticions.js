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
function inici(response, data){

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

function preferits(response, data){
    console.log("[Preferits]");
}

function cerca(response, data){

    var cerca = "cerca";

    console.log(cerca);

    
    console.log(cerca+": valor "+ querystring.parse(data)["Director"]);
    

}

exports.inici = inici;
exports.preferits = preferits;
exports.cerca = cerca;