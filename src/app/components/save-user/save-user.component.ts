import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {
  public user: User;
  public username: string;
  message;
  public usuario;
  public token;
  public optionsRol = ['admin', 'user', 'bibliotecario'];

  constructor(private restUser:RestUserService, private router:Router) {
    this.user = new User('','','','','','','','','',0,0,[],[])
    this.token = restUser.getToken();
    this.usuario = restUser.getUser();
  }

  ngOnInit(): void {
  }

  onSubmit(statusForm){
    this.restUser.saveUser(this.user).subscribe((res:any)=>{
      if(res.userSaved){
        alert(res.message);
        this.user = new User('','','','','','','','','',0,0,[],[]);
        statusForm.reset();
        this.router.navigateByUrl('getUsers');
      }else{
        alert(res.message);
      }
    },
    (error:any)=>alert(error.error.message)
    )
  }

}
