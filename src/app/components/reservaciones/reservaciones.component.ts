import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Router } from '@angular/router';
import { CONNECTION } from 'src/app/services/global';
import { RestLibroService } from 'src/app/services/restLibro/rest-libro.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  public uri:string;
  public token;
  user;
  reservaciones;
  libro;

  constructor(private restUser:RestUserService, private restLibro: RestLibroService,private router:Router){
    this.uri = CONNECTION.URI;
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    this.verReservaciones()
  }


  ngOnInit(): void {
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    this.reservaciones = JSON.parse(localStorage.getItem('reservaciones'));
    this.verReservaciones();
    //this.reservaciones  = localStorage.getItem('reservaciones')
  }

  verReservaciones(){
    this.restUser.verReservaciones(this.user._id).subscribe((res:any)=>{
      if(res.reservas){
        this.reservaciones = res.reservas.libro;
        localStorage.setItem('reservaciones', JSON.stringify(res.reservas.libro))
        console.log(res.reservas.libro)
      }else{
        alert(res.message)
      }
    },(error:any)=>(error.error.message))
  }

  obtenerData(selectedLibro){
    this.libro = selectedLibro;
    localStorage.setItem('selectedLibro', JSON.stringify(selectedLibro));
    console.log(selectedLibro);
  }

  borrarData(){
    localStorage.removeItem('selectedLibro');
  }

  refreshPage() {
    window.location.reload();
   }

  regresarLibros(){
    this.restLibro.regresarLibros(this.user._id, this.libro._id).subscribe((res:any)=>{
      if(res.userPush){
        alert(res.message)
        this.verReservaciones();
        this.reservaciones = res.reservaciones;
        //localStorage.setItem('reservaciones', JSON.stringify(res.userPush.libro));
        //console.log(res.userPush.libro);
        //this.refreshPage();
      }else{
        alert(res.message)
      }
    }, (error:any)=>alert(error.error.error))
  }
}
