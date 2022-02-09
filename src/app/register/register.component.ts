import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Services/register.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  userModel:User = new User("","nurhansayd@gmail.com","","",["Facebook","Twitter","Google"])
  sites= this.userModel.site
  constructor(private registerService : RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userModel);
    this.registerService.signUp(this.userModel).subscribe(res=>{
      console.log("success",res);
    },
    error=>{
      console.log("error",error);
    })
  }


}
