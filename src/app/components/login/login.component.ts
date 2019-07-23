import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
// importamos lo siguiente
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // creamos proveedor para uqe use el servicio en este caso UserService
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  // creamos variables
  public titulo: string;
  public usuario: User;
  public estado: string;
  public identidad;
  public token;


  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UserService) {
    this.titulo = 'Iniciar sesion';
    this.usuario = new User();
  }

  ngOnInit() {
    console.log('!Componente iniciar sesion cargando');
  }

    iniciarSesion(form: NgForm) {
      console.log('prueba fornt iniciar sesion')
      this.usuarioService.iniciarSesion(this.usuario).subscribe((res) => {
        console.log('Res de login en componet');
        console.log(res);
        this.identidad = res.usuario;

        if (!this.identidad || !this.identidad._id) {
          this.estado = 'error';
        } else {
          localStorage.setItem('identidad', JSON.stringify(this.identidad));
          this.obtenerToken();
        }
        // redireccionamos
        this.router.navigate(['/inicio']);
      }
      , error => console.log(error as any));

      console.log('Fin metodo')
    }

    obtenerToken() {
      this.usuarioService.iniciarSesion(this.usuario, 'true').subscribe((res) => {
        // console.log(res);
        this.token = res.token;

        if (this.token.lenght <= 0 ) {
          this.estado = 'error';
        } else {
          localStorage.setItem('token', this.token);
          this.obtenerToken();
        }
      }, error => {
        const mensajeError = error as any;
        console.log(mensajeError);

        if (mensajeError != null) {
          this.estado = 'error';
        }
      });
    }
}
