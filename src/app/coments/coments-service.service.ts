import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coment } from '../coments.model';

@Injectable({
  providedIn: 'root'
})
export class ComentsServiceService {
  url = environment.urlApi
  constructor(
    private http : HttpClient
  ) { }
  getComent(): Observable <Coment []> {
    return this.http.get<Coment []>(`${this.url}/comments?postId=1`)
  }
}
