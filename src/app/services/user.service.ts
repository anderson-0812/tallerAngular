import { Global } from './global';
import { Injectable } from '@angular/core';
// importamos estos dos librerias
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  public usuarioSeleccionado: User;
  public usuarios: User[];
  public identidad;
  public token;

  constructor(public http: HttpClient) {
    this.usuarioSeleccionado = new User();
    this.url = Global.url; // llamamos a la variables de la clase global q creamos
   }
   // Login
   iniciarSesion(usuario, token = null): Observable<any> {

    console.log('Prueba services user')
    console.log(usuario)
     if (token != null) {
       usuario.token = token;
      }

     const params = JSON.stringify(usuario);
     const headers = new HttpHeaders().set('Content-Type', 'application/json')
     .set('Access-Control-Allow-Origin',"*")
     .set('Access-Control-Allow-Headers',"Origin, X-Requested-With, Authorization");

      // armo laurl/login/parametros
      return this.http.post(this.url + 'login', params, {headers});
    }
    obtenerIdentidad() {
      // de mi json extraigo el campo identidad
      const identidad = JSON.parse(localStorage.getItem('identidad'));

      if (identidad !== 'undefined') {
        this.identidad = identidad;
      } else {
        this.identidad = null;
      }

      return this.identidad;
    }
    obtenerToken() {
      // localstorage es una memoria delnavegador
      const token = localStorage.getItem('token'); // almacena en el navegador el token

      if (token !== 'undefined') {
        this.token = token;
      } else {
        this.token = null;
      }

      return this.token;
    }
// CRUD DE USUARIO
    registrarUsuario(token, usuario: User): Observable<any> {
      const params = JSON.stringify(usuario);
      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

      return this.http.post(this.url + 'usuario', params, {headers});
    }

    listarUsuarios(token): Observable<any> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);
      return this.http.get(this.url + 'usuario',{headers});
    }

    actualizarUsuario(token, usuario: User): Observable<any> {
      const params = JSON.stringify(usuario);
      const headers =  new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

      return this.http.put(this.url + `usuario/${usuario._id}`, params, {headers});
    }

    eliminarUsuario(token, idUsuario: number) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

      return this.http.delete(this.url + `usuario/${idUsuario}`, {headers});
    }
}
