import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SalaService } from 'src/app/services/sala.service';
import { UserService } from 'src/app/services/user.service';
import { Sala } from 'src/app/models/sala';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css'],
  providers: [SalaService, UserService]
})
export class SalaComponent implements OnInit {
  public token;
  public opcionBoton: string;
  public estado: string;

  constructor(private userService: UserService, private salaService: SalaService) {
    this.opcionBoton = 'Registrar';
    this.token = this.userService.obtenerToken();
  }

  ngOnInit() {
    console.log('¡Componente sala cargado!');
    this.listarSalas();
  }

  listarSalas() {
    this.salaService.listarSalas(this.token)
    .subscribe((res) => {
      // console.log("Salas");
      console.log(res);
      this.salaService.salas = res.salaDB as Sala[];
    }, error => console.log(<any>error));
  }

  guardarSala(form: NgForm) {
    if (form.value._id) {
      this.salaService.actualizarSala(this.token, form.value).subscribe((res) => {
        this.opcionBoton = 'Registrar';
        this.listarSalas();
        form.reset();
      }, error => console.log(<any>error));
    } else {
      this.salaService.guardarSala(this.token, form.value).subscribe((res) => {
        this.listarSalas();
        form.reset();
      }, error => console.log(<any>error));
    }
  }

  editarSala(sala: Sala) {
    this.opcionBoton = 'Editar';
    this.salaService.salaSeleccionada = sala;
  }

  eliminarSala(idSala: string) {
    if (confirm('¿Estás seguro de eliminar esta sala?')) {
      this.salaService.eliminarSala(this.token, idSala).subscribe(res => this.listarSalas(), error => console.log(<any>error));
    }
  }
}