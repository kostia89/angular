import { Component, OnInit } from '@angular/core';
import { Todo } from '../todos.model';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo [];
  constructor(
    private todo: TodosService
  ) { }

  ngOnInit(): void {
    this.todo.getAllTodos().subscribe(() => {
      this.todo = this.todo;
      this.todo = this.todo;
      console.log(this.todo);
      
    })
  }

}
