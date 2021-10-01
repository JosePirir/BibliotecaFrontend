import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { GetUsersComponent } from './components/get-users/get-users.component';
import { GetLibrosComponent } from './components/get-libros/get-libros.component';
import { MyUserComponent } from './components/my-user/my-user.component';
import { HistorialComponent } from './components/historial/historial.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { SaveLibroComponent } from './components/save-libro/save-libro.component';
import { SearchPipe } from './pipes/search.pipe';
import { ReporteRevistasMasBuscadasComponent } from './components/reporte-revistas-mas-buscadas/reporte-revistas-mas-buscadas.component';
import { ReporteRevistasMasPrestadasComponent } from './components/reporte-revistas-mas-prestadas/reporte-revistas-mas-prestadas.component';
import { ReporteUsuariosPrestadoComponent } from './components/reporte-usuarios-prestado/reporte-usuarios-prestado.component';
import { ReporteHomeComponent } from './components/reporte-home/reporte-home.component';
import { ReporteLibrosMasBuscadosComponent } from './components/reporte-libros-mas-buscados/reporte-libros-mas-buscados.component';
import { ReporteLibrosMasPrestadosComponent } from './components/reporte-libros-mas-prestados/reporte-libros-mas-prestados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    BibliotecaComponent,
    NavbarComponent,
    SaveUserComponent,
    GetUsersComponent,
    GetLibrosComponent,
    MyUserComponent,
    HistorialComponent,
    ReservacionesComponent,
    SaveLibroComponent,
    SearchPipe,
    ReporteRevistasMasBuscadasComponent,
    ReporteRevistasMasPrestadasComponent,
    ReporteUsuariosPrestadoComponent,
    ReporteHomeComponent,
    ReporteLibrosMasBuscadosComponent,
    ReporteLibrosMasPrestadosComponent
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
