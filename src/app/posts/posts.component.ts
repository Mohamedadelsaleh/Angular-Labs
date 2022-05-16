import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from '../Services/user-data-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postsService:UserDataServiceService) { }
  postsList:any;
  ngOnInit(): void {

    this.postsService.getPosts().subscribe(posts => {
      this.postsList = posts;
    })
  }

}
