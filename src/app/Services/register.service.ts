import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  _url="http://localhost:4300/signup"

  signUp(user:User){
    return this.http.post(this._url,user);
  }

  
}
