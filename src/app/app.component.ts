import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onLogin: boolean = true;
  onRegistr: boolean;
  onLoginForm(){
   this.onLogin = true,
   this.onRegistr = false
  }
  onRegisterForm(){
    this.onRegistr = true,
    this.onLogin = false
  }
}


