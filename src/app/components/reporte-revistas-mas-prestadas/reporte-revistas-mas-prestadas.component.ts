import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestLibroService } from 'src/app/services/restLibro/rest-libro.service';
import { CONNECTION } from 'src/app/services/global';
import { RestUserService } from 'src/app/services/restUser/rest-user.service'; 

@Component({
  selector: 'app-reporte-revistas-mas-prestadas',
  templateUrl: './reporte-revistas-mas-prestadas.component.html',
  styleUrls: ['./reporte-revistas-mas-prestadas.component.css']
})
export class ReporteRevistasMasPrestadasComponent implements OnInit {
  public uri:string;
  token;
  user;
  revistaPrestadaFind;

  constructor(private restLibro:RestLibroService, private restUser:RestUserService, private route:Router) {
    this.uri = CONNECTION.URI;
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

  ngOnInit(): void {
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    this.revistaPrestadaFind = JSON.parse(localStorage.getItem('revistaPrestadaFind'));
    this.reporteRevistasMasPrestadas();
  }

  reporteRevistasMasPrestadas(){
    this.restLibro.reporteRevistasMasPrestadas().subscribe((res:any)=>{
      if(res.revistaPrestadaFind){
        this.revistaPrestadaFind = res.revistaPrestadaFind;
        localStorage.setItem('revistaPrestadaFind', JSON.stringify(res.revistaPrestadaFind))
      }else{
        alert(res.message)
      }
    },(error:any)=>alert(error.error.message))
  }
}
