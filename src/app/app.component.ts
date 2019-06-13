import { Global } from './services/global';
import { UserService } from './services/user.service';
// importe OnInit, DoCheck
import { Component, OnInit, DoCheck } from '@angular/core';
// importo estos modulos para cerrar sesion
import {Router, ActivatedRoute } from '@angular/router';
import { Glob } from 'glob';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]// siempre agregamos elproveedor
})
export class AppComponent {
  public identidad: string;
  public titulo: string;
  public url: string;

  // creo mi cosntructor
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService){
    this.titulo = 'SACP-UTPL';
    this.url = Global.url;
  }

  // es para que se ejecute este componente se ejecuta es decir sirve para actibar componentes
  ngOnInit() {
    this.identidad = this.userService.obtenerIdentidad();
    console.log(this.identidad);
  }

  // cuanse se haga cambios en un componente se actualiza los datos de losmcomponentes estaticos  q definamos este dentro 
  ngDoCheck(){
    this.identidad= this.userService.obtenerIdentidad();
  }

  cerrarSesion() {
    localStorage.clear();
    this.identidad = null;
    this.router.navigate(['/login']);
  }
}
