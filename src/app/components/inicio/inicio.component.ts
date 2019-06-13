import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // creo avariables globales
  public titulo: string;
  constructor() {
    // ocupo mis variables en el cosntructor inicilizandola
    this.titulo = 'Sistema Automatizado de control y apertura de puertas';
  }

  ngOnInit() {
    // mando un msj a consola
    console.log('!Componente inicio cargado');
  }

}
