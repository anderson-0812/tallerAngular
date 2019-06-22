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

  constructor() { }

  ngOnInit() {
  }

}