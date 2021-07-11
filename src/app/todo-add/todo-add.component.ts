import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  addTodoForm: FormGroup;
  minDay = new Date();
  prioritis = [{
    name: 'low',
    id: 1
  },{
    name: 'middle',
    id: 2
  },{
    name: 'high',
    id: 3
  }];
  get form (){
    return this.addTodoForm.controls;
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataServise: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }
  
  buildForm() {
    this.addTodoForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateComplete: ['', [Validators.required]],
      status:[''],
      priority:['', [Validators.required]]
    })
  }
  addNewTodo(){
    console.log(this.addTodoForm.value);
    this.dataServise.addNewTodo(this.addTodoForm.value).subscribe((data)=> {
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
