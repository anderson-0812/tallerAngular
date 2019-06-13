import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
// importo lso siguientes modulos
import {HttpClient} from '@angular/common/http';
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

   // listo mis roles
   listarRoles(token):Observable<any> {
   }
}
