
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { produkt } from '../produkt.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  text: string = "";
  sort: boolean= true;
  formAdd: FormGroup;
  total: number;
  produkts: produkt[] = [];
  produkt: any;
 
  constructor(
    private fb: FormBuilder
  ) { }

  
  ngOnInit(): void {
    this.formAdd = this.fb.group({
      name:[''],
      price: ['']
    })
    this.calcTotal();
  }
  sortPrise(){
    this.sort= !this.sort
    this.calcTotal()
  }
  addProduct(){
    this.produkts.push({
      ...this.formAdd.value
    })
    this.calcTotal()
  }
  remove( produkt:  any){
    const removeIndex = this.produkts.findIndex((item:any)=> item.name === produkt.name)
    this.produkts.splice(removeIndex, 1)
    this.calcTotal()
  }
  calcTotal() {
    let tempTotal = 0;
    this.produkts.forEach(item => {
      tempTotal += +item.price;
    });
    this.total = tempTotal;
  }
}
