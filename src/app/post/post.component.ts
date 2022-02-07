import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { IPost } from '../sharedClassesTypes/interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postList:IPost[]
  errorMsg:any
  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.postService.getAllposts().subscribe(
      postData=>{
        this.postList= postData
      },
      error =>{
        this.errorMsg= error;
      }  
    )
  }

}
