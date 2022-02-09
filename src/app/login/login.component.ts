import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService ) { }
  userModel:Login = new Login("nurhan","")
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userModel);
    this.loginService.signIn(this.userModel).subscribe(res=>{
      console.log("success",res);
    },
    error=>{
      console.log("error",error);
    })
}
}
