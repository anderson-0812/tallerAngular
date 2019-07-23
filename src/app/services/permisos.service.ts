import { UserService } from 'src/app/services/user.service';
import { PermisoRol } from './../models/permiso-rol';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';


@Injectable({
  providedIn: 'root'
})
export class PermisosService {
  public url: string;
  public permisoSeleccionado: PermisoRol;
  public permisos: PermisoRol[];
  
  constructor(public http: HttpClient) {
    this.url = Global.url;
    this.permisoSeleccionado = new PermisoRol();
  }

  listarPermisos(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);
    return this.http.get(this.url + 'permiso', {headers});
  }

  guardarPermiso(token, permiso: PermisoRol): Observable<any> {
    const params = JSON.stringify(permiso);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);
    
    // const headers = new HttpHeaders().set('Content-Type', 'application/json')
    // .set('Access-Control-Allow-Origin',"*")
    // .set('Access-Control-Allow-Headers',"Origin, X-Requested-With, Authorization")
    // .set('token', token);
    
    return this.http.post(this.url + 'permiso', params, {headers});
  }

  actualizarPermiso(token, permiso: PermisoRol): Observable<any> {
    const params = JSON.stringify(permiso);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    // const headers = new HttpHeaders().set('Content-Type', 'application/json')
    // .set('Access-Control-Allow-Origin',"*")
    // .set('Access-Control-Allow-Headers',"Origin, X-Requested-With, Authorization")
    // .set('token', token);

    return this.http.put(`${this.url}permiso/${permiso._id}`, params, {headers});
  }

  eliminarPermiso(token, idPermiso) {
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    // const headers = new HttpHeaders().set('Content-Type', 'application/json')
    // .set('Access-Control-Allow-Origin',"*")
    // .set('Access-Control-Allow-Headers',"Origin, X-Requested-With, Authorization")
    // .set('token', token);
    

    return this.http.delete( `${this.url}permiso/${idPermiso}`, {headers});
  }

}
