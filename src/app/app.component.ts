import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormMy } from './my-form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formMy: FormMy [];

  myForm: FormGroup

  constructor(
    private fb : FormBuilder
  ){}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      option: [''],
      coment: ['', [Validators.required, Validators.minLength(10)]]
    });
    
  }
  formOk(){
      console.log(this.myForm.value);
      
  }
}




