import { Component, OnInit } from '@angular/core';
import { tipeList } from '../modils/homeList.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Homelist: tipeList[] = [{
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
  isUnchanged: boolean= true;
  isGrid: boolean= false;
  constructor() { }

  ngOnInit(): void {
  }
  change(){
    this.isUnchanged = true;
    this.isGrid = false;
  }
  changeGrid(){
    this.isGrid = true;
    this.isUnchanged= false;
  }
}
