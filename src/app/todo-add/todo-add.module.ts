import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAddRoutingModule } from './todo-add-routing.module';
import { TodoAddComponent } from './todo-add.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '../shared/components/dialog/dialog.module';
import { TodoFormModule } from '../shared/components/todo-form/todo-form.module';





@NgModule({
  declarations: [
    TodoAddComponent
  ],
  imports: [
    CommonModule,
    TodoAddRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    DialogModule,
    TodoFormModule
  ]
})
export class TodoAddModule { }
