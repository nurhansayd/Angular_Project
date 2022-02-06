import { Component,OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

import { ProductServiceService } from '../Services/product-service.service';
import { discountOffer } from '../sharedClassesTypes/enum';
import { ICategory, IProduct } from '../sharedClassesTypes/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

 

  discount: discountOffer;
  storeName:string;
  storeLogo:string;
  productList:IProduct[];
  categoryList:ICategory[];
  clientName:string;
  IsPurshased: Boolean
  
  constructor(private productService:ProductServiceService) {
    this.discount = discountOffer.offer;

    this.productList = [{
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
    this.categoryList =[{
    id: 6,
    name :"laptops"
    }, {
      id: 6,
      name :"mobile"
    } ,{
      id: 6,
      name :"tv"
    }];
    this.storeName= "jumia";
    this.storeLogo="jumia";
    this.clientName="Nurhan";
    this.IsPurshased=false;
    
   }
   ngOnInit(): void {
    
  }

   update(){
    this.IsPurshased=!this.IsPurshased
   }
    
   
   
    renderValues(){
      this.productService.getAllProducts()
     }
   
 
  
 

 

}
