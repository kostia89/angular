import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { Todo } from '../shared/models/todo.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
 
  constructor(
    private dataServise: DataService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  
  }
  
  
  addNewTodo(todo: Todo){
    this.dataServise.addNewTodo({...todo, createdAt: new Date()}).subscribe((data)=> {
      console.log(data);
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          text: 'New todo added'
        }
      });
      
      dialogRef.afterClosed().subscribe(result => {
        
        this.router.navigate(['/todo'])
      });
    })
  }
  goToList(){
    this.router.navigate(['/todo'])
  }
}