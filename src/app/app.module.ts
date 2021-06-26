import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SinglTodoComponent } from './singl-todo/singl-todo.component';
import { UpsComponent } from './ups/ups.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SinglTodoComponent,
    UpsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
