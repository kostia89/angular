import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  url = environment.urlApi
  constructor(
    private http: HttpClient
  ) { }


  getAllTodos(){
    return this.http.get(`${this.url}/todos`);
    
    
  }
    
}
