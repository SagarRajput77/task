import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  allData: any;
  selectedUserId:any;
  selectedPostId:any;
  post:any  = [];
  comments:any  = [];
  path:string = 'https://gorest.co.in/public/v1/';
  constructor(private http:HttpClient){}

  ngOnInit(){
    this.getAllData()
  }

  getAllData(){
    this.http.get(this.path+'users').subscribe((res:any)=>{
      this.allData = res.data;
    })
  }

  viewPost(id:any){
    this.selectedUserId = id;
    this.http.get(this.path+`users/${id}/posts`).subscribe((res:any)=>{
      this.post = res.data;
    })
  }

  viewComments(postId:any){
    this.selectedPostId = postId;
    this.http.get(this.path+`posts/${postId}/comments`).subscribe((res:any)=>{
      this.comments = res.data;
    })
  }


}
