import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { CONNECTION } from 'src/app/services/global';
import { User } from '../../models/user';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';


@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.css']
})
export class MyUserComponent implements OnInit {
  user;
  public uri:string;
  public filesToUpload:Array<File>;
  public possiblePass;
  public token;

  constructor(private restUser:RestUserService, private uploadUser: UploadImageService , private router:Router) {
    this.possiblePass='';
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
  }


  uploadImage(){
    this.uploadUser.fileRequest(this.user._id, [],this.filesToUpload, this.token, 'image')
    .then((res:any)=>{
      if(res.user){
        this.user.image = res.userImage;
        localStorage.setItem('user', JSON.stringify(this.user));
        alert('Imagen subida con exito');
      }else{
        alert(res.message)
      }
    },(error:any)=> alert(error.error.message))
  }

  fileChange(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }
}
