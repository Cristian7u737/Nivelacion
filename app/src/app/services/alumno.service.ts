import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno.model';
const baseUrl = 'http://localhost:8080/api/tutorials';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(baseUrl);
  }
  get(alumno_id: any): Observable<Alumno> {
    return this.http.get(`${baseUrl}/${alumno_id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(alumno_id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${alumno_id}`, data);
  }
  delete(alumno_id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${alumno_id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(nombre: any): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${baseUrl}?title=${nombre}`);
  }
}