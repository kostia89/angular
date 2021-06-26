import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UpsComponent } from "./ups/ups.component";
const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'todos', loadChildren: () => import ('./todos/todos.module').then(m => m.TodosModule)
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
        
    },{
        path: '**', component: UpsComponent
    }
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}