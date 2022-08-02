import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Courses } from '../models/courses';
import {Observable}from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
private backendUrl:String = environment.apiBaseUrl;

constructor(private httpClient: HttpClient) { }

public getCourses():Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.backendUrl}ver/courses`);
}
public postNewCourses(courses:Courses[]):Observable<any>{
  return this.httpClient.post<any>(`${this.backendUrl}new/courses`, courses);
}
public detalleCourses(id: number): Observable<any>{
  return this.httpClient.get<any>(`${this.backendUrl}detallecourses/${id}`);
}
public updateCourses(courses: Courses):Observable<Courses>{
  return this.httpClient.put<Courses>(`${this.backendUrl}editar/courses`, courses);
}
public deleteCourses(id:number):Observable<void>{
  return this.httpClient.delete<void>(`${this.backendUrl}delete/courses/${id}`);
}
}
