import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleSwitch3ApiService {

  constructor(private http: HttpClient) { }

  updateComponentStatus(id: string, status: number): Observable<any> {
    id = "65fd4b80622ac8070b3ba25f"
    return this.http.put(`http://localhost:8080/api/componentes/${id}`, { elemento: 'foco1', status });
  }
}
