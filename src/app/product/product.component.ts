import { Component, OnInit } from '@angular/core';
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
  constructor() {
    this.discount = discountOffer.offer;

    this.productList = [{
      id:1,
      name:"HP",
      quantity:25,
      price:30000,
      image:'./assets/camera.jpeg'
    }];
    this.categoryList =[{
    id: 6,
      name :"laptops"
    }];
    this.storeName= "jumia";
    this.storeLogo="jumia";
    this.clientName="Nurhan";
    this.IsPurshased=true;
   }



 
  
  ngOnInit(): void {
  }

}
