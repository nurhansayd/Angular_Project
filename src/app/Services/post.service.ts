import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IPost } from '../sharedClassesTypes/interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private Http: HttpClient) { }

  _url ='https://jsonplaceholder.typicode.com/posts'

  getAllposts():Observable<IPost[]>{
    
    return this.Http.get<IPost[]>(this._url).pipe(catchError((err)=>
    {
     return throwError(()=>err.message|| "server error")
    }))
  }
}
