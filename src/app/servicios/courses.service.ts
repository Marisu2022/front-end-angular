import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Courses } from '../models/courses';
import {Observable}from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
private backendUrl:String = 'https://apimariaferro.herokuapp.com/';

constructor(private httpClient: HttpClient) { }

public getcourses():Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.backendUrl}ver/courses`);
}
public postnewcourses(courses:Courses):Observable<any>{
  return this.httpClient.post<any>(`${this.backendUrl}new/courses`, courses);
}
public detallecourses(id: number): Observable<any>{
  return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
}
public updatecourses(id:number,courses: Courses):Observable<Courses>{
  return this.httpClient.put<Courses>(`${this.backendUrl}editar/courses/${id}`, courses);
}
public deletecourses(id:number):Observable<any>{
  return this.httpClient.delete<void>(`${this.backendUrl}delete/courses/${id}`);
}
}
