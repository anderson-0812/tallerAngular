import { Acceso } from './../models/acceso';
import { User } from 'src/app/models/user';
import { Global } from './global';
import { UserService } from './user.service';
import { Sala } from './../models/sala';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  public url: string;
  public salas: Sala[];
  public usuarios: User[];
  public accesoSeleccionado: Acceso;
  public accesos: Acceso[];
  public token;

  constructor(public http: HttpClient) {
    this.url = Global.url;
   }

   listarAccesos(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);
    return this.http.get(this.url + 'acceso', {headers});
   }
}
