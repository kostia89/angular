import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

function confirmPassword(passwordField: string, confirmPasswordField: string) {
  return (formGroup: FormGroup)=>{
    const password = formGroup.controls[passwordField];
    const confirmPassword = formGroup.controls[confirmPasswordField];
    
    if (password.value !== confirmPassword.value){
      confirmPassword.setErrors({ confirm: true});
     
    } else {
        confirmPassword.setErrors(null);
    }
  }
}
@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {
  regForm: FormGroup;

  constructor (
    private fb: FormBuilder
  ) {}
  get f (){
    return this.regForm.controls;
  }
  ngOnInit(): void {
    this.regForm= this.fb.group({
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    },
    {validator: confirmPassword('password','confirmPassword')})
  }
  
  registerUser(){
    console.log(this.regForm.value);
  }
  
}
