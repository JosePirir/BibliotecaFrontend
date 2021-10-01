import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestUserService {
  public uri: string;
  public httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  public httpOptionsAuth={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  }

  public user;
  public token;

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http: HttpClient) {
    this.uri = CONNECTION.URI;
  }

  getUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    if(user != undefined || user != null){
      this.user = user;
    }else{
      this.user = null;
    }
    return this.user;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != undefined || token != null){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }

  login(user, token){
    user.gettoken = token;
    let params = JSON.stringify(user);
    return this.http.post(this.uri + 'login', params, this.httpOptions)
    .pipe(map(this.extractData));
  }

  saveUser(user){
    let params = JSON.stringify(user);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.post(this.uri + 'saveUser', params, {headers:headers}).pipe(map(this.extractData));
  }

  getUsers(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.get(this.uri + 'getUsers', {headers:headers})
    .pipe(map(this.extractData))
  }

  updateUser(idUser, user){
    let params = JSON.stringify(user);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.put(this.uri  + 'updateUser/' + idUser , params, {headers:headers})
    .pipe(map(this.extractData))
  }

  deleteUser(idUser){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.delete(this.uri + 'deleteUser/' + idUser, {headers: headers})
    .pipe(map(this.extractData));
  }

  verReservaciones(idUser){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri + 'getReservaciones/' + idUser , {headers: headers})
    .pipe(map(this.extractData))
  }

  verHistorial(idUser){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri + 'getHistorial/'+ idUser, {headers:headers})
    .pipe(map(this.extractData));
  }

}