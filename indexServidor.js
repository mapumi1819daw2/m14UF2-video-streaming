/**
 * Directoris
 */

var servidor = require("./servidor");

var peticions = require("./peticions");

var encaminador = require("./encaminador");


var manegadors = {};

manegadors["/"] = peticions.inici;
manegadors["/preferits"] = peticions.preferits;
manegadors["/cerca"] = peticions.cerca;


servidor.iniciar(encaminador, manegadors);
