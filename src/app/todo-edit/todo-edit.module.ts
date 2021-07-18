import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoEditRoutingModule } from './todo-edit-routing.module';
import { TodoEditComponent } from './todo-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodoFormModule } from '../shared/components/todo-form/todo-form.module';
import { LoaderModule } from '../shared/components/loader/loader.module';
import { DialogModule } from '../shared/components/dialog/dialog.module';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    TodoEditComponent
  ],
  imports: [
    CommonModule,
    TodoEditRoutingModule,
    MatButtonModule,
    MatIconModule,
    TodoFormModule,
    LoaderModule,
    MatDialogModule,
    DialogModule,
  ]
})
export class TodoEditModule { }
