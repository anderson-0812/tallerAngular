import { UsuarioGuard } from './services/usuario.guard';
import { AccesoComponent } from './components/acceso/acceso.component';
import { PermisoComponent } from './components/permiso/permiso.component';
import { RolComponent } from './components/rol/rol.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { UserComponent } from './components/user/user.component';
import { SalaComponent } from './components/sala/sala.component';

const routes: Routes = [
  // Asignamos la ruta y componentes
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent, canActivate: [UsuarioGuard]},
  {path: 'roles', component: RolComponent},
  {path: 'usuarios', component: UserComponent, canActivate: [UsuarioGuard]},// asi protegemos nuestras urls
  {path: 'salas', component: SalaComponent, canActivate: [UsuarioGuard]},
  {path: 'permisos', component: PermisoComponent, canActivate: [UsuarioGuard]},
  {path: 'acceso', component: AccesoComponent, canActivate: [UsuarioGuard]},
  {path: '**', component: InicioComponent, canActivate: [UsuarioGuard]}// me sirve que si pongo /cualquiercosa me redireccione a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
