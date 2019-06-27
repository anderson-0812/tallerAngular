import { Component, OnInit } from '@angular/core';
// hacemos importaciones para usary crear un crud 
import { RolService } from 'src/app/services/rol.service';
import { UserService } from './../../services/user.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  //  importo mis servicios por medio de mi proveedor 
  providers: [UserService, RolService] 
})
export class UserComponent implements OnInit {
  // creo mis variables a usar 
  public token;
  public estado: string;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UserService, private rolService: RolService) {
    //  obtengo el token poir mediod e mi funcion en mi servicio usuario
    this.token = this.usuarioService.obtenerToken();
   }

  ngOnInit() {
    console.log('!Componente usuario cargoso');
    this.obtenerRoles();
    this.obtenerUsuarios();
  }

  obtenerRoles() {
    this.rolService.listarRoles(this.token).subscribe(res => this.rolService.roles = res.roles, error => console.log(error as any));
  }

  obtenerUsuarios() {
    // tslint:disable-next-line:max-line-length
    this.usuarioService.listarUsuarios(this.token).subscribe(res => this.usuarioService.usuarios = res.usuarios, error => console.log(error as any));
  }

  guardarUsuario(form: NgForm) {
    this.usuarioService.registrarUsuario(this.token, form.value).subscribe((res) => {
      this.obtenerUsuarios();
      form.reset();
    }, error => console.log(error as any));
  }

  eliminarUsuario(idUsuario: number) {
    if (confirm('Estas seguro de eliminar este usuario?')) {
      // tslint:disable-next-line:max-line-length
      this.usuarioService.eliminarUsuario(this.token, idUsuario).subscribe(res => this.obtenerUsuarios(), error => console.log(error as any));
    }
  }

}
