import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {
  
  loginForm: FormGroup;
  user = {
    Username: '',
    Password: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.user)
  }
  
}
