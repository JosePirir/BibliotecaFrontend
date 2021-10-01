import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { RestLibroService } from 'src/app/services/restLibro/rest-libro.service';
import { CONNECTION } from 'src/app/services/global';
import { RestUserService } from 'src/app/services/restUser/rest-user.service'; 

@Component({
  selector: 'app-reporte-libros-mas-prestados',
  templateUrl: './reporte-libros-mas-prestados.component.html',
  styleUrls: ['./reporte-libros-mas-prestados.component.css']
})

export class ReporteLibrosMasPrestadosComponent implements OnInit {
  public uri:string;
  token;
  user;
  libroPrestadoFind;

  constructor(private restLibro:RestLibroService, private restUser:RestUserService, private route:Router) {
    this.uri = CONNECTION.URI;
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

  ngOnInit(): void {
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    this.libroPrestadoFind = JSON.parse(localStorage.getItem('libroPrestadoFind'))
    this.reporteLibrosMasPrestados();
  }

  reporteLibrosMasPrestados(){
    this.restLibro.reporteLibrosMasPrestados().subscribe((res:any)=>{
      if(res.libroPrestadoFind){
        this.libroPrestadoFind = res.libroPrestadoFind;
        localStorage.setItem('libroPrestadoFind',JSON.stringify(res.libroPrestadoFind));
        console.log(res.libroPrestadoFind)
      }else{
        alert(res.message)
      }
    },(error:any)=>alert(error.error.message))
  }

}
