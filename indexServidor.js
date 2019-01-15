/**
 * Directoris
 */

var servidor = require("./servidor");

var peticions = require("./peticions");

var encaminador = require("./encaminador");


var manegadors = {};

manegadors["/pelis"] = peticions.pelis;
manegadors["/directors"] = peticions.directors;
manegadors["/preferits"] = peticions.preferits;
manegadors["/cercaPelis"] = peticions.cerca;
manegadors["/cercaDirectors"] = peticions.cerca;


servidor.iniciar(encaminador, manegadors);


/* BOTO PELI DIRECTOR FAV (CERCA PER CADA APARTAT) */
