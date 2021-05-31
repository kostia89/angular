import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bay list';
 
  list = [{
    name: 'хліб',
    value: 1,
    done: true
  },
  {
    name: 'сало',
    value: 0.5,
    done: true
  },{
    name: 'цибуля',
    value: 0.5,
    done: false
  },{
    name: 'картопля',
    value: 3,
    done: false
  }]
  checkList(){
    alert('ok')
  }
}
