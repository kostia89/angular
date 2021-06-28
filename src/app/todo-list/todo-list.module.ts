import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { SinglTodoComponent } from '../singl-todo/singl-todo.component';

@NgModule({
    declarations: [
        TodoListComponent,
        SinglTodoComponent
    ],
    imports:[
        CommonModule,
        TodoListRoutingModule
    ],
    
})


export class TodoLIstModule {}