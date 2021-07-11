import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAddRoutingModule } from './todo-add-routing.module';
import { TodoAddComponent } from './todo-add.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '../shared/components/dialog/dialog.module';





@NgModule({
  declarations: [
    TodoAddComponent
  ],
  imports: [
    CommonModule,
    TodoAddRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    DialogModule
  ]
})
export class TodoAddModule { }
