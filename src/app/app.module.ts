import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';
import { UsuarioTarjetaComponent } from './components/usuarios/usuario-tarjeta/usuario-tarjeta.component';
import { RegisterComponent } from './components/usuarios/register/register.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form/usuario-form.component';
import { LoginComponent } from './components/usuarios/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    UsuariosComponent,
    BuscadorComponent,
    UsuarioComponent,
    UsuarioTarjetaComponent,
    RegisterComponent,
    UsuarioFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
