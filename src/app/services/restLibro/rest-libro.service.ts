import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestUserService } from '../restUser/rest-user.service';


@Injectable({
  providedIn: 'root'
})
export class RestLibroService {
  public uri:string;
  public httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      })
  }

  public httpOptionsAuth={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.restUser.getToken()
    })
  }

  public libro;
  public token;

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private restUser: RestUserService, private http: HttpClient) {
    this.uri = CONNECTION.URI;
  }

  getLibro(){
    let libro = JSON.parse(localStorage.getItem('libro'));
    if(libro != undefined || libro != null){
      this.libro = libro;
    }else{
      this.libro = null;
    }
    return this.libro;
  }

  getLibros(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.restUser.getToken()
    })
    return this.http.get(this.uri + 'getLibros', {headers:headers})
    .pipe(map(this.extractData))
  }

  regresarLibros(idUser, idLibro){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.restUser.getToken()
    })
    return this.http.put(this.uri +idUser + '/regresar/' + idLibro, null, {headers:headers})
    .pipe(map(this.extractData))
  }

  reservarLibros(idUser, idLibro){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.restUser.getToken()
    })
    return this.http.put(this.uri + idUser + '/reservar/' + idLibro, null, {headers:headers})
    .pipe(map(this.extractData))
  }

  saveLibro(libro){
    let params = JSON.stringify(libro);
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':this.restUser.getToken()
    })
    return this.http.post(this.uri + 'saveLibro', params, {headers:headers})
    .pipe(map(this.extractData))
  }

  updateLibro(idLibro, libro){
    let params = JSON.stringify(libro)
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':this.restUser.getToken()
    });
    return this.http.put(this.uri+ 'updateLibro/'+idLibro , params,{headers:headers})
    .pipe(map(this.extractData))
  }

  deleteLibro(idLibro){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':this.restUser.getToken()
    })
    return this.http.put(this.uri+'deleteLibro/'+idLibro, null,{headers:headers})
    .pipe(map(this.extractData))
  }
  
  reporteRevistasMasBuscadas(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.restUser.getToken()
    })
    return this.http.get(this.uri+'reporteRevistasMasBuscadas',{headers:headers})
    .pipe(map(this.extractData))
  }

  reporteLibrosMasBuscados(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.restUser.getToken()
    })
    return this.http.get(this.uri+'reporteLibrosMasBuscados',{headers:headers})
    .pipe(map(this.extractData))
  }

  reporteRevistasMasPrestadas(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.restUser.getToken()
    })
    return this.http.get(this.uri+'reporteRevistasMasPrestadas',{headers:headers})
    .pipe(map(this.extractData))
  }

  reporteLibrosMasPrestados(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.restUser.getToken()
    })
    return this.http.get(this.uri+'reporteLibrosMasPrestados',{headers:headers})
    .pipe(map(this.extractData))
  }

  reporteUsuariosPrestado(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.restUser.getToken()
    })
    return this.http.get(this.uri+'reporteUsuariosPrestado',{headers:headers})
    .pipe(map(this.extractData))
  }

}
