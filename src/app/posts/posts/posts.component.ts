import { Component, OnInit } from '@angular/core';
import { ComentsServiceService } from 'src/app/coments/coments-service.service';
import { Post } from 'src/app/post.model';
import { PostServService } from '../post-serv.service';
import { mergeMap } from 'rxjs/operators'
import { Coment } from 'src/app/coments.model';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  post: any;
  posts: Post [];
  coments: Coment[];
  constructor(
    private Post : PostServService, 
    private coment: ComentsServiceService
    ) { }

  ngOnInit(): void {
    this.Post.getPosts().subscribe((posts: Post [])=> {
      console.log(posts);
      this.post = posts;
      this.posts = posts;
      
    })
    this.Post.getPosts().pipe(
      mergeMap(() => this.coment.getComent())
    ).subscribe((res) => {
      console.log(res);
      console.log('ok');
      this.coments = res
      console.log(this.coments);
      
    })
    

  }

}






