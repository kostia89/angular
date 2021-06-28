import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';
import { oneTodo } from './singl-todo.model';
import {Location} from '@angular/common';
@Component({
  selector: 'app-singl-todo',
  templateUrl: './singl-todo.component.html',
  styleUrls: ['./singl-todo.component.scss']
})
export class SinglTodoComponent implements OnInit {
  todoSingl: any;
  // todoSingl: oneTodo[];
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id') as string;
    
    this.data.getSinglTodo(id).subscribe((todoSingl)=>{
    this.todoSingl = todoSingl;
      
      console.log(todoSingl);
    });
    
  }
  back(){
    this.location.back();
  }
}
