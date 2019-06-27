import { SalaService } from './../../services/sala.service';
import { UserService } from './../../services/user.service';
import { AccesoService } from './../../services/acceso.service';
import { NgForm } from '@angular/forms';
import { Acceso } from './../../models/acceso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  // creo variables
  public token;
  constructor(private accesoService: AccesoService, private userService: UserService, private salaService: SalaService) {
    this.token = userService.obtenerToken();
   }

  ngOnInit() {
    console.log('Componente Acceso cargado!');

    this.listarAccesos();
  }

  listarAccesos() {
    // tslint:disable-next-line:max-line-length
    this.accesoService.listarAccesos(this.token).subscribe((res) =>{
      // tslint:disable-next-line:no-unused-expression
      this.accesoService.accesos = res.permisos as Acceso[];
      console.log(res);
    }, error => console.log(error as any));
  }

}
