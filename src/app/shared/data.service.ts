import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { oneTodo } from '../singl-todo/singl-todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlApi = environment.urlApi
  constructor(
    private http: HttpClient
  ) { }


  getAllTodo(){
    return this.http.get(`${this.urlApi}todos`)
  }
  getSinglTodo(id: string){
    return this.http.get(`${this.urlApi}todos/${id}`)
  }
}
