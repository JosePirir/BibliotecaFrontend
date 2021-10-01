import { Component, OnInit } from '@angular/core';
import { RestLibroService } from 'src/app/services/restLibro/rest-libro.service';
import { CONNECTION } from 'src/app/services/global';
import { Router } from '@angular/router';
import { RestUserService } from 'src/app/services/restUser/rest-user.service'; 

@Component({
  selector: 'app-reporte-revistas-mas-buscadas',
  templateUrl: './reporte-revistas-mas-buscadas.component.html',
  styleUrls: ['./reporte-revistas-mas-buscadas.component.css']
})
export class ReporteRevistasMasBuscadasComponent implements OnInit {
  public uri:string;
  token;
  user;
  revistaBuscadaFind;

  constructor(private restLibro:RestLibroService, private restUser:RestUserService, private route:Router) {
    this.uri = CONNECTION.URI;
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

  ngOnInit(): void {
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    this.revistaBuscadaFind = JSON.parse(localStorage.getItem('revistaBuscadaFind'))
    this.reporteRevistasMasBuscadas();
  }

  reporteRevistasMasBuscadas(){
    this.restLibro.reporteRevistasMasBuscadas().subscribe((res:any)=>{
      if(res.revistaBuscadaFind){
        this.revistaBuscadaFind = res.revistaBuscadaFind;
        localStorage.setItem('revistaBuscadaFind',JSON.stringify(res.revistaBuscadaFind));
      }else{
        alert(res.message)
      }
    }, (error:any)=>alert(error.error.message))
  }

}
