import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts/posts.component';
import { ComentsComponent } from './coments/coments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ComentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
