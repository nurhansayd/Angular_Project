import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  _url="http://localhost:4300/login"
  signIn(user:Login){
      return this.http.post(this._url,user)
  }
}
