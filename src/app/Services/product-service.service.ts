import { Injectable } from '@angular/core';
import { IProduct } from '../sharedClassesTypes/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  

  products:IProduct[] = [{
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

  constructor() {}
  

  
  getAllProducts(){
    return this.products;
  }

  GetProductById(prdId:number){
    const product = this.products.find((productId)=>{ productId.id === prdId} );
    if(isNaN(prdId) ||!product){
      return null;
    }
    return product;
  }

}


