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
     const headers = new HttpHeaders().set('Content-Type', 'aplication/json').set('token', token);
     return this.http.get(this.url + 'rol', {headers});
   }
}
