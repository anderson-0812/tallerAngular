import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
// importo modulosa  usar
import {NgForm} from '@angular/forms';
import {RolService} from 'src/app/services/rol.service';
import { Rol } from 'src/app/models/rol';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [RolService]
})
export class RolComponent implements OnInit {
  // creo variables
  public token;
  public opcionBoton;
  public estado: string;
  constructor(private userService: UserService, private rolService: RolService) {
    this.token = this.userService.obtenerToken();
    this.opcionBoton = 'Registrar';
   }

  ngOnInit() {
    console.log('Componente rol cargado');
    this.listarRoles();
  }

  // creo metodo listar
  listarRoles() {
    this.rolService.listarRoles(this.token).subscribe(
      (res) => {
        console.log(res);
        this.rolService.roles = res.roles as Rol[];
      }
      , error => console.log(error as any));
  }
  // guardo rol
  guardarRol(form: NgForm) {
    if (form.value.id) {
      this.rolService.alcualizarRol(this.token, form.value)
      .subscribe((res) => {
        this.opcionBoton = 'Registrar';
        this.listarRoles();
        form.reset();
      }, error => console.log(error as any));
    } else {
      this.rolService.guardarRol(this.token, form.value)
      .subscribe((res) => {
        // console.log(form.value); 
        this.listarRoles();
        form.reset();
      }, error => console.log(error as any));
    }
  }
  // actualizar rol
  editarRol(rol: Rol) {
    this.opcionBoton = 'Editar';
    this.rolService.rolSeleccionado = rol;
  }
  // eliminar rol
  eliminarRol(idRol: string) {
    if (confirm('Estas seguro de eliminar este rol?')) {
      this.rolService.eliminarRol(this.token, idRol).subscribe(res => this.listarRoles(), error => console.log(error as any));
    }
  }
}
