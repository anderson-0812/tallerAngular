import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
// importo modulosa  usar
import {NgForm} from '@angular/forms';
import {RolService} from 'src/app/services/rol.service';

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
   }

  ngOnInit() {
    console.log('Componente rol cargado');
    this.listarRoles();
  }

  // creo metodo listar
  listarRoles() {
    this.rolService.listarRoles(this.token).subscribe(
      res => console.log(res)
      , error => console.log(error as any));
  }
}
