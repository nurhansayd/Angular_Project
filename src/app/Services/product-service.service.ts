import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from '../sharedClassesTypes/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

 products =  [{
  id:1,
  name:"HP",
  quantity:2,
  price:15500,
  image:'./assets/camera.jpeg'
} , {
  id:2,
  name:"dell",
  quantity:25,
  price:20000,
  image:'./assets/camera.jpeg'
},{
  id:3,
  name:"mac",
  quantity:4,
  price:30000,
  image:'./assets/camera.jpeg'
}];

  constructor(private Http :HttpClient) {}
  _url:string="/assets/data/products.json"
  
  //observable
  getAllProducts():Observable<IProduct[]>{
    //return this.products; //non-observable - lab3
   
   return this.Http.get<IProduct[]>(this._url).pipe(catchError((err)=>
   {
    return throwError(()=>err.message|| "server error")
   }))
  }


  GetProductById(prdId:number){
    const product = this.products.find((productId)=>{ productId.id === prdId} );
    if(isNaN(prdId) ||!product){
      return null;
    }
    return product;
  }

}


