import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { RestLibroService } from 'src/app/services/restLibro/rest-libro.service';
import { CONNECTION } from 'src/app/services/global';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';

@Component({
  selector: 'app-get-libros',
  templateUrl: './get-libros.component.html',
  styleUrls: ['./get-libros.component.css']
})
export class GetLibrosComponent implements OnInit {
  libros;
  libroSelected:Libro;
  user;
  token;
  public filesToUpload:Array<File>;
  buscar;
  search;
  public uri: string;
  libro:Libro;
  public optionsRol = ['libro', 'revista']

  constructor(private restLibro:RestLibroService, private uploadLibro: UploadImageService, private restUser:RestUserService, private route:Router) {
    this.uri = CONNECTION.URI;
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

  ngOnInit(): void {
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
    this.listLibros();
    this.libros = JSON.parse(localStorage.getItem('libros'));
    this.libro = new Libro('','','',[],'',null,null,'',[],'','',null,null);
    //this.libroSelected = JSON.parse(localStorage.getItem('libroSelected'));
  }

  obtenerData(libroSelected){
    this.libro = libroSelected;
    localStorage.setItem('libroSelected', JSON.stringify(libroSelected));
    console.log(this.libro);
  }

  uploadImage(){
    this.uploadLibro.fileRequestLibro(this.libro._id, [], this.filesToUpload, this.token, 'image')
    .then((res:any)=>{
      if(res.libro){
        this.libro.image = res.libroImage;
        localStorage.setItem('libro', JSON.stringify(this.libro));
        alert('Imagen subida con exito')
      }else{
        alert(res.message)
      }
    },(error:any)=> alert(error.error.message))
  }

  fileChange(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload)
  }

  listLibros(){
    this.restLibro.getLibros().subscribe((res:any)=>{
      if(res){
        this.libros = res.libros;
        localStorage.setItem('libros', JSON.stringify(res.libros));
        console.log(res.libros);
      }else{
        alert(res.message)
      }
    },(error:any)=>alert(error.error.message))
  }

  borrarData(){
    localStorage.removeItem('libroSelected');
  }

  reservarLibros(){
    this.restLibro.reservarLibros(this.user._id, this.libro._id).subscribe((res:any)=>{
      if(res.historialPush){
        alert(res.message)
        this.user = res.user;
        //this.libro = res.libro;
        this.user = res.historialPush;
      }else{
        alert(res.message)
      }
    },(error:any)=>alert(error.error.message))
  }

  refreshPage(){
    window.location.reload();
  }

  updateLibro(){
    this.restLibro.updateLibro(this.libro._id, this.libro).subscribe((res:any)=>{
      if(res.libroUpdated){
        alert(res.message);
        this.listLibros()
        this.libros=res.libros;
        localStorage.setItem('users',JSON.stringify(res.libroUpdated))
      }else{
        alert(res.message)
      }
    },(error:any)=> alert(error.error.message))
  }

  eliminarLibro(){
    this.restLibro.deleteLibro(this.libro._id).subscribe((res:any)=>{
      if(res.libroRemoved){
        alert(res.message)
        this.libros = res.libros;
        this.listLibros();
        this.refreshPage();
        localStorage.setItem('libros', JSON.stringify(res.libroRemoved));
      }else{
        alert(res.message)
      }
    },(error:any)=>alert(error.error.message))
  }
}