import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductComponent } from './product/product.component';
import { IProduct } from './sharedClassesTypes/interface';
//import { ProductServiceService } from './Services/product-service.service';


// decorators are design patterns used to isolate the decoration of a class without modifying the source code
//@Component is a decorator used to specify the metadata for the component class
@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  products:IProduct[]
  thenTable:boolean
  @ViewChild(ProductComponent) child :ProductComponent
  title = 'Angular_Project';

  render(){
  
    this.child.renderValues().subscribe(result =>{
      this.products = result
    })
    this.thenTable=true
    console.log(this.child.renderValues());
    
  }
  hide(){
    this.thenTable = false
  }
}


