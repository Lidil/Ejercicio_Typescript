import{Direccion} from './Direccion';
import{Mail} from './Mail';
import{Telefono} from './Telefono';



export class Persona{
  private  _nombre: string;
  private  _apellido: string;
  private  _edad: number;
  private  _DNI: string;
  private  _cumpleaños: Date;
  private  _colorFavorito: string;
  private  _sexo: string;
  private  _direcciones: Array<Direccion>;
  private  _mail: Array<Mail>;
  private  _telefono: Array<Telefono>;
  private  _notas: string;

  constructor(nombre:string, apellido: string, edad:number, DNI:string, cumpleaños:Date, colorFavorito: string,
     sexo: string, direcciones: Array<Direccion>,mail: Array<Mail>, telefono: Array<Telefono>, notas: string){
        this._nombre= nombre;
        this._apellido= apellido;
        this._edad= edad;
        this._DNI= DNI;
        this._cumpleaños= cumpleaños;
        this._colorFavorito= colorFavorito;
        this._sexo= sexo;
        this._direcciones=direcciones;
        this._mail= mail;
        this._telefono= telefono;
        this._notas= notas;


     }

     get nombre(){
        return this._nombre;
     }
     get apellido(){
        return this._apellido;
     }
     get edad(){
        return this._edad;
     }
     get DNI(){
        return this._DNI;
     }
     get cumpleaños(){
        return this._cumpleaños;
     }
     get colorFavorito(){
        return this._colorFavorito;
     }
     get sexo(){
        return this._sexo;
     }
     get direcciones(){
        return this._direcciones;
     }
     get mail(){
        return this._mail;
     }
     get telefono(){
        return this._telefono;
     }
     get notas(){
        return this._notas;
     }
     set nombre(nombre: string){
        this._nombre= nombre;
     }
     set apellido(apellido:string){
        this._apellido=apellido;
     }
     set edad(edad:number){
        this._edad;
     }
     set cumpleaños(cumpleaños: Date){
        this._cumpleaños=cumpleaños;
     }
     set colorFavorito(colorFavorito:string){
        this._colorFavorito=colorFavorito;
     }
     set sexo(sexo:string){
        this._sexo=sexo;
     }
     set direcciones(direcciones:Array<Direccion>){
        this._direcciones=direcciones;
     }
     set  mail(mail: Array<Mail>){
        this._mail=mail;
     }
     set telefono(telefono: Array<Telefono>){
        this._telefono= telefono;
     }
     set notas(notas: string){
        this._notas= notas;
     }

     /*Para introducir los datos que hemos cambiado y quitar los anteriores */
     agregarNuevaDireccion(direccion:Direccion){
        this._direcciones.pop();
        this._direcciones.push(direccion);

     }
     agregarNuevoMail(mail:Mail){
        this._mail.pop();/*Eliminamos el ultimo dato del array */
        this._mail.push(mail);/*Añadimos el nuevo dato */
       
     }
     agregarNuevoTelefono(telefono:Telefono){
        this._telefono.pop();
        this._telefono.push(telefono);
     }
}