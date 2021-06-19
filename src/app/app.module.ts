import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TotalPricePipe } from './total-price.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SortPipe,
    SearchPipe,
    TotalPricePipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
