import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: any;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.getAllTodo().subscribe((todos)=>{
      this.todos = todos;
    })
  }

}
