import{Persona} from './Persona'
import{Direccion} from './Direccion';
import{Mail} from './Mail';
import{Telefono} from './Telefono';

/*Datos Primera Persona */
const direccionAna = new Direccion("Gran Via",8,2,"A",48910,"Sestao","Bizkaia");

const emailAna = new Mail("Personal","ana@gmail.com");

const telefonoAna= new Telefono("Movil",600000001);

const datosAna = new Persona("Ana","Garcia",25,"15489963S",new Date(25,6,1998),
"Verde","Mujer",[direccionAna],[emailAna],[telefonoAna],"Notable"); /*Para añadir la fecha se crea un new date y se separa por comas */

/*Datos de la segunda Persona */

const direccionEstibaliz = new Direccion("Pasacalle",74,9,"Izq",39001,"Santander","Cantabria");

const emailEstibaliz = new Mail("Trabajo","estibaliz@msc.com");

const telefonoEstibaliz = new Telefono("Fijo",944556632);

const datosEstibaliz = new Persona("Estibaliz","López",23,"12345569P",new Date(14,2,2000),
"Azul","Mujer",[direccionEstibaliz],[emailEstibaliz],[telefonoEstibaliz],"Sobresaliente");

/*Datos de la tercera Persona */

const direccionJuan = new Direccion("Florida",54,1,"B",26001,"Logroño","La Rioja");

const emailJuan = new Mail("Personal","juan@gmail.com");

const telefonoJuan = new Telefono("Movil",651328479);

const datosJuan =new Persona("Juan","Picasso",63,"148795523L",new Date(25,1,1960),
"Naranja","Hombre",[direccionJuan],[emailJuan],[telefonoJuan],"Notable");

/*Imprimir los datos de las personas */

console.log("Los primeros datos introducidos son: ");
console.log(datosAna);
console.log(datosEstibaliz);
console.log(datosJuan);

/*Buscar por DNI*/

const datosAgenda: Array<Persona> = new Array(datosAna, datosEstibaliz, datosJuan);

const dniBuscar: string ="12345569P";

const editarDatos: Persona = datosAgenda.find(Persona=> Persona.DNI == dniBuscar) as Persona;

/*Modificar los datos */

const nuevaDireccion = new Direccion("Libertad",38, 7,"Derecha",12530,"Burriana","Castellon");

const nuevoMail = new Mail("Personal","esti@gmail.com");

const nuevoTelefono = new Telefono("Movil",695857422);

editarDatos.agregarNuevaDireccion(nuevaDireccion);
editarDatos.agregarNuevoMail(nuevoMail);
editarDatos.agregarNuevoTelefono(nuevoTelefono);

/*Los 3 registros con el cambio*/
console.log("Los datos despues del cambio son: ");
console.log(datosAna);
console.log(datosEstibaliz);
console.log(datosJuan);