import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  token:string;
  userlogged;

  constructor(private restUser: RestUserService, private router:Router) {
    this.user = new User('','','','','','','','','',0,0,[],[]);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.restUser.login(this.user, 'true').subscribe((res:any)=>{
      if(!res.token){
        alert(res.message)
      }else{
        this.userlogged = res.user;
        this.token = res.token;
        delete this.userlogged.password;
        if(this.token.length <= 0){
          alert('El token no se genero correctamente')
        }else{
          localStorage.setItem('token', this.token);
          localStorage.setItem('user', JSON.stringify(this.userlogged));
          alert('Usuario loggeado correctamente')
          this.router.navigateByUrl('biblioteca')
        }
      }
    },
      (error:any)=>alert(error.error.message)
    )
  }

}
