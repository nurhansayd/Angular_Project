import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { IUser } from '../sharedClassesTypes/interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  errorMsg:any
  userList:IUser[]
  trueFlag:boolean
  
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      userData=>{
        this.userList= userData
      },
      error =>{
        this.errorMsg= error;
      }  
    )
  }


  

}

