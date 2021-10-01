import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CONNECTION } from 'src/app/services/global';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})

export class GetUsersComponent implements OnInit {
  users;
  public uri:string;
  
  selectedUser:User;
  token;
  user:User;
  public optionsRol = ['admin', 'user', 'bibliotecario'];

  constructor(private restUser:RestUserService,private route: Router) {
    this.uri = CONNECTION.URI;
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();   
  }

  ngOnInit(): void {
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    this.users = JSON.parse(localStorage.getItem('users'));
    this.user = new User('','','','','','','','','',0,0,[],[]);
    this.listUsers()
    //this.selectedUser = JSON.parse(localStorage.getItem('selectedUser'))
  }




  listUsers(){
    this.restUser.getUsers().subscribe((res:any)=>{
      if(res){
        this.users = res.users;
        localStorage.setItem('users', JSON.stringify(this.users));
        console.log(res.users);
      }else{
        alert(res.message)
      }
    },(error:any)=> alert(error.error.message))
  }

  obtenerData(selectedUser){
    this.user = selectedUser;
    localStorage.setItem('selectedUser', JSON.stringify(selectedUser));
    console.log(selectedUser);
  }

  borrarData(){
    localStorage.removeItem('selectedUser');
  }

  refreshPage(){
    window.location.reload();
   }

  updateUser(){
    console.log(this.user);
    this.restUser.updateUser(this.user._id, this.user).subscribe((res:any)=>{
      if(res.userUpdated){
      alert(res.message);
      this.listUsers()
      this.users = res.users;
      localStorage.setItem('users', JSON.stringify(res.userUpdated));
      console.log(res.userUpdated)
    }else{
      alert(res.messsage)
    }
    },(error:any)=> alert(error.error.message)
    )
  }

  eliminarUser(){
    this.restUser.deleteUser(this.user._id).subscribe((res:any)=>{
      if(res.userRemoved){
        alert(res.message)
        this.users = res.users;
        this.listUsers();
        localStorage.setItem('users', JSON.stringify(res.userRemoved));
        console.log(res.userRemoved)
        this.refreshPage();
      }else{
        alert(res.message)
      }
    },(error:any)=> alert(error.error.message)
    )
  }



}
