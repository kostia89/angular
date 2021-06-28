import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SinglTodoComponent } from "../singl-todo/singl-todo.component";
import { TodoListComponent } from "./todo-list.component";


const routs: Routes = [
    {
        path: '', component: TodoListComponent
    },
    {
        path: ':id', component: SinglTodoComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routs)],
    exports: [RouterModule]
    
})

export class TodoListRoutingModule {}