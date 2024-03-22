import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  updateComponentStatus(id: string, status: number): Observable<any> {
    id = "65fd4b88622ac8070b3ba261"
    return this.http.put(`http://localhost:8080/api/componentes/${id}`, { elemento: 'foco3', status });
  }
}
