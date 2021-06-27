import { Component, OnInit } from '@angular/core';
import { Coment } from '../coments.model';

import { PostServService } from '../posts/post-serv.service';


import { ComentsServiceService } from './coments-service.service';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {
  coment: any;
  coments: Coment [];
  
  constructor(
    private Coment: ComentsServiceService,
    private Post : PostServService
  ) { }

  ngOnInit(): void {
    // this.Coment.getComent().subscribe((coments: Coment [])=> {
    //   // console.log(coments);
    //   this.coment = coments;
    //   this.coments = coments;
      
    // })
    this.Coment.getComent()
  }

}
