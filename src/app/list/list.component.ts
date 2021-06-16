
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// import { FormGroup } from '@angular/forms';
import { produkt } from '../produkt.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  text: string = "";
  sort: boolean= true;
  formAdd: FormGroup
  produkts: produkt[] = [{
    name: 'apple',
    price: 60
  },{
    name: 'milk',
    price: 50
  }];
 
  constructor(
    private fb = FormBuilder
  ) { }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      name:[''],
      price: ['']
    })
  }
  sortPrise(){
    this.sort= !this.sort
    
  }
  addProduct(){
    console.log('pk');
    
  }
}
