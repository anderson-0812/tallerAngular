import { PermisoRol } from './../../models/permiso-rol';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PermisosService } from 'src/app/services/permisos.service';
import { RolService } from 'src/app/services/rol.service';
import { UserService } from 'src/app/services/user.service';

import { SalaService } from 'src/app/services/sala.service';
import { Sala } from 'src/app/models/sala';

@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css'],
  providers: [PermisosService, RolService, UserService,SalaService]
})
export class PermisoComponent implements OnInit {
  //  creo variables
  public token;
  public estado: string;
  public opcionBoton: string;

  constructor(private permisosService: PermisosService
    , private rolService: RolService, private userService: UserService, private salaService: SalaService) {
    this.opcionBoton = 'Registrar';
    this.token = this.userService.obtenerToken();
  }

  ngOnInit() {
    console.log('Componente permiso cargado!');
    this.listarPermisos();
    this.obtenerRoles();
    this.listarSalas();

  }
  obtenerRoles() {
    this.rolService.listarRoles(this.token).subscribe(res => this.rolService.roles = res.rolDB, error => console.log(error as any));
  }
  listarPermisos() {
    // tslint:disable-next-line:max-line-length
    this.permisosService.listarPermisos(this.token).subscribe((res) => {
      this.permisosService.permisos = res.permisos as PermisoRol[];
      console.log(res);
    }, error => console.log(error as any));
  }

  listarSalas() {
    this.salaService.listarSalas(this.token)
    .subscribe((res) => {
      console.log(res);
      this.salaService.salas = res.salaDB as Sala[];
    }, error => console.log(<any>error));
  }
  guardarPermiso(form: NgForm) {
    if (form.value._id) {
      this.permisosService.actualizarPermiso(this.token, form.value).subscribe((res) => {
        this.opcionBoton = 'Registrar';
        this.listarPermisos();
        this.obtenerRoles();
        this.listarSalas();
        form.reset();
      }, error => console.log(error as any));
    } else {
      this.permisosService.guardarPermiso(this.token, form.value).subscribe((res) => {
        console.log("Guardar permiso");
        console.log(res);
        this.listarPermisos();
        this.obtenerRoles();
        this.listarSalas();
        form.reset();
      }, error => console.log(error as any));
    }
  }

  editarPermiso(permiso: PermisoRol) {
    this.opcionBoton = 'Editar';
    this.permisosService.permisoSeleccionado = permiso;
  }

  eliminarPermiso(idPermiso: string) {
    if (confirm('Estas seguro de eliminar este permiso?')) {
      this.permisosService.eliminarPermiso(this.token, idPermiso).subscribe(res => this.listarPermisos(), error => console.log(error as any));
    }
  }

}
