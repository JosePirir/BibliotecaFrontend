import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { RestLibroService } from 'src/app/services/restLibro/rest-libro.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-save-libro',
  templateUrl: './save-libro.component.html',
  styleUrls: ['./save-libro.component.css']
})
export class SaveLibroComponent implements OnInit {
  public libro: Libro;
  message;
  public usuario;
  public token;
  public optionsRol = ['libro','revista']

  constructor(private restLibro:RestLibroService,restUser:RestUserService, private router:Router) {
    this.libro = new Libro('','','',[],'',null,null,'',[],'','',null,null);
    this.token = restUser.getToken();
    this.usuario = restUser.getUser();
  }

  ngOnInit(): void {
  }

  onSubmit(statusFrom){
    this.restLibro.saveLibro(this.libro).subscribe((res:any)=>{
      if(res.libroSaved){
        alert(res.message);
        this.libro = new Libro('','','',[],'',null,null,'',[],'','',null,null);
        statusFrom.reset();
        this.router.navigateByUrl('getLibros');
      }else{
        alert(res.message);
      }
    },
    (error:any)=>alert(error.error.message)
    )}

}
