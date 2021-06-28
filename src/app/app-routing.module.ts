


import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UpsComponent } from "./ups/ups.component";

const routs: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'todo', loadChildren: ()=> import('./todo-list/todo-list.module').then(m => m.TodoLIstModule)
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', component: UpsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routs)],
    exports: [RouterModule]
    
})

export class AppRoutingModule {}