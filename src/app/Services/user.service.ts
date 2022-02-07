import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../sharedClassesTypes/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private Http : HttpClient) { }
  _url ='https://jsonplaceholder.typicode.com/users'

  getAllUsers():Observable<IUser[]>{
    
    return this.Http.get<IUser[]>(this._url).pipe(catchError((err)=>
    {
     return throwError(()=>err.message|| "server error")
    }))
  }
}
