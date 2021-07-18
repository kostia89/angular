import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { SaveTodo } from '../shared/models/todo.model';
import { DataService } from '../shared/services/data.service';
import { filter, switchMap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: SaveTodo[] = [];
  defaultView = 'grid';
  paramSortDefault = {
    property: 'status',
    direction: 'ASC'
  };
  paramSort = [{
    property: 'status',
    direction: 'ASC',
    name: 'first not complate'
  },{
    property: 'status',
    direction: 'DESC',
    name: 'first complate'
  }]
  paramSortDate =[{
    property: 'dateComplete',
    direction: 'ASC',
    name: 'earlier'
  },{
    property: 'dateComplete',
    direction: 'DESC',
    name: 'later'
  }]
  constructor(
    private data: DataService,
    private dialog: MatDialog,
  ) { 
    const savedView= localStorage.getItem('view')
    if (savedView) {
      this.defaultView = savedView;
    }
  }

  ngOnInit(): void {
    this.data.getAllTodoList().subscribe((todos) => {
      this.todos = todos;
    })
  }
  changeView(view: string){
    this.defaultView = view;
    localStorage.setItem('view', view)
  }
  deleteList(id: number, index: number){
    console.log(id);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        text: 'Are uor want delete the todo?',
        isDeleteDialog: true
        }
    });
    dialogRef.afterClosed().pipe(
      filter((resault)=> resault),
      switchMap((resault: Observable <SaveTodo | null>)=> {
        if (resault) {
          return this.data.deleteTodo(id)
        } else {
          return of(null)
        }
      })  
    ).subscribe((res)=>{
      this.todos.splice(index, 1);
    })
    
  }

  changeSort(property: string, direction: string){
    this.paramSortDefault = {property, direction}
  }
  changeSortDate(property: string, direction: string){
    this.paramSortDefault = {property, direction}
  }
}
