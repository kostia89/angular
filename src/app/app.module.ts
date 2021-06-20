import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogFormComponent } from './log-form/log-form.component';
import { RegFormComponent } from './reg-form/reg-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent,
    RegFormComponent
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
