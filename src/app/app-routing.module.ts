import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { GetUsersComponent } from './components/get-users/get-users.component';
import { GetLibrosComponent } from './components/get-libros/get-libros.component';
import { MyUserComponent } from './components/my-user/my-user.component';
import { HistorialComponent } from './components/historial/historial.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { SaveLibroComponent } from './components/save-libro/save-libro.component';
import { ReporteHomeComponent } from './components/reporte-home/reporte-home.component';
import { ReporteRevistasMasPrestadasComponent } from './components/reporte-revistas-mas-prestadas/reporte-revistas-mas-prestadas.component';
import { ReporteRevistasMasBuscadasComponent } from './components/reporte-revistas-mas-buscadas/reporte-revistas-mas-buscadas.component';
import { ReporteUsuariosPrestadoComponent } from './components/reporte-usuarios-prestado/reporte-usuarios-prestado.component';
import { ReporteLibrosMasPrestadosComponent } from './components/reporte-libros-mas-prestados/reporte-libros-mas-prestados.component';
import { ReporteLibrosMasBuscadosComponent } from './components/reporte-libros-mas-buscados/reporte-libros-mas-buscados.component';
import { LoggedoutGuardGuard } from './guards/loggedout-guard.guard';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { LoggedGuardGuard } from './guards/logged-guard.guard';
import { BibliotecarioAdminGuardGuard } from './guards/bibliotecario-admin-guard.guard';

const routes: Routes = [
  {path:'', canActivate:[LoggedoutGuardGuard],component:HomeComponent},
  {path: 'navbar', component:NavbarComponent},
  {path:'login', canActivate:[LoggedoutGuardGuard] ,component:LoginComponent},
  {path: 'getUsers', canActivate:[AdminGuardGuard] ,component:GetUsersComponent},
  {path: 'historial', canActivate:[LoggedGuardGuard] ,component:HistorialComponent},
  {path: 'reservaciones', canActivate:[LoggedGuardGuard],component:ReservacionesComponent},
  {path: 'saveLibro', canActivate:[BibliotecarioAdminGuardGuard],component:SaveLibroComponent},
  {path: 'myUser', canActivate:[LoggedGuardGuard] ,component:MyUserComponent},
  {path: 'saveUser', canActivate:[AdminGuardGuard] ,component:SaveUserComponent},
  {path: 'getLibros', canActivate:[LoggedGuardGuard] ,component:GetLibrosComponent},
  {path: 'reporteHome', canActivate:[AdminGuardGuard] ,component:ReporteHomeComponent},
  {path: 'reporteLibrosPrestados', canActivate:[AdminGuardGuard] ,component:ReporteLibrosMasPrestadosComponent},
  {path: 'reporteLibrosBuscados', canActivate:[AdminGuardGuard] ,component:ReporteLibrosMasBuscadosComponent},
  {path: 'reporteRevistasPrestadas', canActivate:[AdminGuardGuard] ,component:ReporteRevistasMasPrestadasComponent},
  {path: 'reporteRevistasBuscadas', canActivate:[AdminGuardGuard] ,component:ReporteRevistasMasBuscadasComponent},
  {path: 'reporteUsuariosPrestado', canActivate:[AdminGuardGuard] ,component:ReporteUsuariosPrestadoComponent},
  {path:'biblioteca', canActivate:[LoggedGuardGuard] ,component:BibliotecaComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
