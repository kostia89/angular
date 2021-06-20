import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = {
    Username: '',
    Password: ''
  }

  onSubmit(){
    console.log(this.user);
    
  }
}
