import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../password.validator';
import { RegisterService } from '../Services/register.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  sites=["Facebook","Twitter","Google"];
  //userModel:User = new User("","nurhansayd@gmail.com","","",["Facebook","Twitter","Google"])
  //sites= this.userModel.site
  //constructor(private registerService : RegisterService) { }
  constructor(private fb:FormBuilder){}
  
  registerationForm = this.fb.group({
    username: ['',[Validators.required, Validators.pattern("^[A-Za-z]*$")]],
    email: ['',[Validators.required, Validators.email]],
    password:['', [Validators.required]],
    confirmPassword: ['',[Validators.required]],
  }, {validator:[passwordValidator] }
   )

  get userName(){
    return this.registerationForm.get('username');
  }

  get Email(){
    return this.registerationForm.get('email');
  }
  get Password(){
    return this.registerationForm.get('password');
  }

  get ConfirmPassword(){
    return this.registerationForm.get('confirmPassword');
  }

  ngOnInit(): void {
  }
/*
  onSubmit(){
    console.log(this.userModel);
    this.registerService.signUp(this.userModel).subscribe(res=>{
      console.log("success",res);
    },
    error=>{
      console.log("error",error);
    })
  }*/

  getData(){
    this.registerationForm.patchValue({
      username:"Nurhan",
      email:"nurhan@gmail.com",

    })
  }

 


}
