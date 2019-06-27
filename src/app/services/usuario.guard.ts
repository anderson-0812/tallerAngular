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

        if (identidad && identidad.Rol === '5c9e85a3e850a10017df4ec9') {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}