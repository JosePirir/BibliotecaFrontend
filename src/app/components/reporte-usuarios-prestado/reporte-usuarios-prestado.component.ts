import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestLibroService } from 'src/app/services/restLibro/rest-libro.service';
import { CONNECTION } from 'src/app/services/global';
import { RestUserService } from 'src/app/services/restUser/rest-user.service'; 

@Component({
  selector: 'app-reporte-usuarios-prestado',
  templateUrl: './reporte-usuarios-prestado.component.html',
  styleUrls: ['./reporte-usuarios-prestado.component.css']
})
export class ReporteUsuariosPrestadoComponent implements OnInit {
  public uri:string;
  token;
  user;
  userFind;

  constructor(private restLibro:RestLibroService, private restUser:RestUserService, private route:Router) {
    this.uri = CONNECTION.URI;
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

  ngOnInit(): void {
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    this.userFind = JSON.parse(localStorage.getItem('userFind'))
    this.reporteUsuariosPrestado();
  }

  reporteUsuariosPrestado(){
    this.restLibro.reporteUsuariosPrestado().subscribe((res:any)=>{
      if(res.userFind){
        this.userFind = res.userFind;
        localStorage.setItem('userFind',JSON.stringify(res.userFind));
      }else{
        alert(res.message)
      }
    },(error:any)=>alert(error.error.message))
  }

}
