import { PermisoRol } from './../../models/permiso-rol';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PermisosService } from 'src/app/services/permisos.service';
import { RolService } from 'src/app/services/rol.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css'],
  providers: [PermisosService, RolService, UserService]
})
export class PermisoComponent implements OnInit {
  //  creo variables
  public token;
  public estado: string;
  public opcionBoton: string;

  constructor(private permisosService: PermisosService, private rolService: RolService, private userService: UserService) {
    this.opcionBoton = 'Registrar';
    this.token = this.userService.obtenerToken();
  }

  ngOnInit() {
    console.log('Componente permiso cargado!');
    this.listarPermisos();
    this.obtenerRoles();
    
  }
  obtenerRoles() {
    this.rolService.listarRoles(this.token).subscribe(res => this.rolService.roles = res.roles, error => console.log(error as any));
  }
  listarPermisos() {
    // tslint:disable-next-line:max-line-length
    this.permisosService.listarPermisos(this.token).subscribe(res => this.permisosService.permisos = res.permisos as PermisoRol[], error => console.log(error as any));
  }

  guardarPermiso(form: NgForm) {
    if (form.value._id) {
      this.permisosService.actualizarPermiso(this.token, form.value).subscribe((res) => {
        this.opcionBoton = 'Registrar';
        this.listarPermisos();
        this.obtenerRoles();
        form.reset();
      }, error => console.log(error as any));
    } else {
      this.permisosService.guardarPermiso(this.token, form.value).subscribe((res) => {
        this.listarPermisos();
        this.obtenerRoles();
        form.reset();
      }, error => console.log(error as any));
    }
  }

  editarPermiso(permiso: PermisoRol) {
    this.opcionBoton = 'Editar';
    this.permisosService.permisoSeleccionado = permiso;
  }

}
