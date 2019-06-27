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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
