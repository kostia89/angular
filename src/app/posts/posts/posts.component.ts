import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Post } from 'src/app/post.model';
import { PostServService } from '../post-serv.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  post: any;
  posts: Post [];
 
  constructor(
    private Post : PostServService
  ) { }

  ngOnInit(): void {
    this.Post.getPosts().subscribe((posts: Post [])=> {
      console.log(posts);
      this.post = posts;
      this.posts = posts;
    })
  }

}
