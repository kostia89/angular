import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Priority, SaveTodo } from '../shared/models/todo.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {
  todo: SaveTodo;
  createdAt: Date;
  readonly priority = Priority;
  constructor(
    private router: Router,
    private data: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.data.getTodo(id).subscribe({
      next: (todo) => {
        this.todo = todo;
        this.createdAt = new Date(todo.createdAt);
      },
      error: (error)=> {

      }
    })
  }

  goToList(){
    this.router.navigate(['/todo']);
  }
}
