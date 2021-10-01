import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONNECTION } from 'src/app/services/global';
import { RestLibroService } from 'src/app/services/restLibro/rest-libro.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-reporte-libros-mas-buscados',
  templateUrl: './reporte-libros-mas-buscados.component.html',
  styleUrls: ['./reporte-libros-mas-buscados.component.css']
})
export class ReporteLibrosMasBuscadosComponent implements OnInit {
  public uri:string;
  token;
  user;
  libroBuscadoFind;

  constructor(private restLibro:RestLibroService, private restUser:RestUserService, private route:Router) {
    this.uri = CONNECTION.URI;
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    
  }

  ngOnInit(): void {
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    this.libroBuscadoFind = JSON.parse(localStorage.getItem('libroBuscadoFind'))
    this.reporteLibrosMasBuscados();
  }

  reporteLibrosMasBuscados(){
    this.restLibro.reporteLibrosMasBuscados().subscribe((res:any)=>{
      if(res.libroBuscadoFind){
        this.libroBuscadoFind = res.libroBuscadoFind;
        localStorage.setItem('libroBuscadoFind', JSON.stringify(res.libroBuscadoFind))
      }else{
        alert(res.message)
      }
    },(error:any)=>alert(error.error.message))
  }

}
