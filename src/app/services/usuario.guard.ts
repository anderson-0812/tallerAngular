import { Rol } from 'src/app/models/rol';
import { UserService } from './user.service';
// el canactivate es para proteger las rutas
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) {}

    canActivate() {
        const identidad = this.userService.obtenerIdentidad();
        // console.log("proteccion de urls, json Identidad");
        // console.log(identidad);
        // if (identidad && identidad.Rol === '5d2ed988a4d6d054c44bc1aa') {
        if (identidad && identidad.username === 'admin') {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}