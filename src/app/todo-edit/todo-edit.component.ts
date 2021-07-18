import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { SaveTodo } from '../shared/models/todo.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todo: any;
  loading = true;
  id: string;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private data: DataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.data.getTodo(this.id).subscribe({
      next: (todo) => {
        this.todo = {
          name: todo.name,
          description: todo.description,
          dateComplete: todo.dateComplete,
          status: todo.status,
          priority: todo.priority
        };
        this.loading = false;
      },
      error: (error)=> {

      }
    })
  }
  editTodo(todo: any){
    this.data.upDateTodo(todo, this.id).subscribe((todo)=>{
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          text: 'Todo added'
        }
      });
      
      dialogRef.afterClosed().subscribe(result => {
        
        this.router.navigate(['/todo'])
      });
    })
  }
}
