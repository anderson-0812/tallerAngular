import { UserService } from './user.service';
import { Injectable } from '@angular/core';
// importo lso siguientes modulos
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Rol } from '../models/rol';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  // creo variables
  public url: string;
  public rolSeleccionado: Rol;
  public roles: Rol[];

  // creo mi constructor
  constructor(public http: HttpClient, userService: UserService) {
    this.url = Global.url;
    this.rolSeleccionado = new Rol();
   }

   // listo mis roles observable => siempre va ahi esta esperando siempre a respuesta del server
   listarRoles(token): Observable<any> {
    //  ledigo q mi peticion tiene cabeceras de tipo aplicacion/json y le envio un token
     const headers = new HttpHeaders().set('Content-Type', 'aplication/json')
     .set('Access-Control-Allow-Origin',"*")
     .set('Access-Control-Allow-Headers',"Origin, X-Requested-With, Authorization")
     .set('token', token);
     return this.http.get(this.url + 'rol', {headers});
   }
// Guardar Rol
  guardarRol(token, rol: Rol): Observable<any> {
    const params = JSON.stringify(rol);
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin',"*")
      .set('Access-Control-Allow-Headers',"Origin, X-Requested-With, Authorization")
      .set('token', token);

    return this.http.post(this.url + 'rol', params, {headers});
  }
  // actualizar rol
  alcualizarRol(token, rol: Rol): Observable<any> {
    const params = JSON.stringify(rol);
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin',"*")
      .set('Access-Control-Allow-Headers',"Origin, X-Requested-With, Authorization")
      .set('token', token);


    return this.http.put( `${this.url}rol/${rol._id}`, params, {headers});
    
  }

  // eliminar
  eliminarRol(token, idRol): Observable<any> {
    // console.log("Pruebaa");
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin',"*")
    .set('Access-Control-Allow-Headers',"Origin, X-Requested-With, Authorization")
    .set('token', token);
    

    return this.http.delete( `${this.url}rol/${idRol}`, {headers});
  }
}


