"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
/*Datos Primera Persona */
var direccionAna = new Direccion_1.Direccion("Gran Via", 8, 2, "A", 48910, "Sestao", "Bizkaia");
var emailAna = new Mail_1.Mail("Personal", "ana@gmail.com");
var telefonoAna = new Telefono_1.Telefono("Movil", 600000001);
var datosAna = new Persona_1.Persona("Ana", "Garcia", 25, "15489963S", new Date(25, 6, 1998), "Verde", "Mujer", [direccionAna], [emailAna], [telefonoAna], "Notable"); /*Para añadir la fecha se crea un new date y se separa por comas */
/*Datos de la segunda Persona */
var direccionEstibaliz = new Direccion_1.Direccion("Pasacalle", 74, 9, "Izq", 39001, "Santander", "Cantabria");
var emailEstibaliz = new Mail_1.Mail("Trabajo", "estibaliz@msc.com");
var telefonoEstibaliz = new Telefono_1.Telefono("Fijo", 944556632);
var datosEstibaliz = new Persona_1.Persona("Estibaliz", "López", 23, "12345569P", new Date(14, 2, 2000), "Azul", "Mujer", [direccionEstibaliz], [emailEstibaliz], [telefonoEstibaliz], "Sobresaliente");
/*Datos de la tercera Persona */
var direccionJuan = new Direccion_1.Direccion("Florida", 54, 1, "B", 26001, "Logroño", "La Rioja");
var emailJuan = new Mail_1.Mail("Personal", "juan@gmail.com");
var telefonoJuan = new Telefono_1.Telefono("Movil", 651328479);
var datosJuan = new Persona_1.Persona("Juan", "Picasso", 63, "148795523L", new Date(25, 1, 1960), "Naranja", "Hombre", [direccionJuan], [emailJuan], [telefonoJuan], "Notable");
/*Imprimir los datos de las personas */
console.log("Los primeros datos introducidos son: ");
console.log(datosAna);
console.log(datosEstibaliz);
console.log(datosJuan);
/*Buscar por DNI*/
var datosAgenda = new Array(datosAna, datosEstibaliz, datosJuan);
var dniBuscar = "12345569P";
var editarDatos = datosAgenda.find(function (Persona) { return Persona.DNI == dniBuscar; });
/*Modificar los datos */
var nuevaDireccion = new Direccion_1.Direccion("Libertad", 38, 7, "Derecha", 12530, "Burriana", "Castellon");
var nuevoMail = new Mail_1.Mail("Personal", "esti@gmail.com");
var nuevoTelefono = new Telefono_1.Telefono("Movil", 695857422);
editarDatos.agregarNuevaDireccion(nuevaDireccion);
editarDatos.agregarNuevoMail(nuevoMail);
editarDatos.agregarNuevoTelefono(nuevoTelefono);
/*Los 3 registros con el cambio*/
console.log("Los datos despues del cambio son: ");
console.log(datosAna);
console.log(datosEstibaliz);
console.log(datosJuan);
