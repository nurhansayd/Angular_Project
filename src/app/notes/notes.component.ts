import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { discountValidator } from '../discount.validator';
import { ProductComponent } from '../product/product.component';
import { ProductServiceService } from '../Services/product-service.service';
import { IProduct } from '../sharedClassesTypes/interface';
import { nameValidator } from '../username.validator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  products= ['laptop','mobile','phone','TV']
  @ViewChild(ProductComponent) child :ProductComponent
  constructor(private fb:FormBuilder, private productService:ProductServiceService) { }

  registerationForm = this.fb.group({
    username: ['',[Validators.required, nameValidator(/^admin$/i) , nameValidator(/^administrator$/i) ]],
    discount:['',[ discountValidator(/\b.*%\b/i)]],
    checkDiscount:[false],
    comment:[''],
    anotherComments:this.fb.array([])
  })

  get anotherComments(){
    return this.registerationForm.get("anotherComments") as FormArray
  }
  addAnotherComments(){
    this.anotherComments.push(this.fb.control(""))
  }
  get userName(){
    return this.registerationForm.get('username');
  }

  get discount(){
    return this.registerationForm.get('discount')
  }
  setDiscount(){
    this.registerationForm.get('checkDiscount')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
        this.discount?.setValidators(Validators.required)
      }
      else
      {
        this.discount?.clearValidators();
      }
      this.discount?.updateValueAndValidity();
    })
  }
/*
  getProducts(){

   
    this.child.renderValues().subscribe(result =>{
      this.products = result
    })
    
  
  }
  */
  ngOnInit(): void {
  }

}
function notVlidName(arg0: RegExp): any {
  throw new Error('Function not implemented.');
}

