import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { CONNECTION } from 'src/app/services/global';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
public uri:string;
public token;
user;
historial;

  constructor(private restUser:RestUserService, private router:Router) {
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
  }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.historial = JSON.parse(localStorage.getItem('historial'));
    this.verHistorial()
    //this.historial = localStorage.getItem('historial');
  }

  verHistorial(){
    this.restUser.verHistorial(this.user._id).subscribe((res:any)=>{
      if(res.historial){
        //alert(res.message)
        this.historial = res.historial.historial;
        localStorage.setItem('historial', JSON.stringify(res.historial.historial))
      }else{
        alert(res.message)
      }
    },(error:any)=>alert(error.error.message))
  }

}
