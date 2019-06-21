import { RolComponent } from './components/rol/rol.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  // Asignamos la ruta y componentes 
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'roles', component: RolComponent},
  {path: 'usuarios', component: UserComponent},
  {path: '**', component: InicioComponent}// me sirve que si pongo /cualquiercosa me redireccione a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
