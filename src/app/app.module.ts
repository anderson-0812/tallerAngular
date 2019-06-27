import { UserService } from 'src/app/services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importamos lo siguiente
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RolComponent } from './components/rol/rol.component';
import { UserComponent } from './components/user/user.component';
import { SalaComponent } from './components/sala/sala.component';
import { PermisoComponent } from './components/permiso/permiso.component';
import { AccesoComponent } from './components/acceso/acceso.component';
import { UsuarioGuard } from './services/usuario.guard';
// import { RolComponent } from './models/rol/rol.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    RolComponent,
    UserComponent,
    SalaComponent,
    PermisoComponent,
    AccesoComponent,
    // RolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  //  agregamos el user service y el usuario guard
  providers: [UserService, UsuarioGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
