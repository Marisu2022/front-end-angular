import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable}from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  
  private backendUrl:String = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }
  public geteducation():Observable<Education[]>{
    return this.httpClient.get<[Education]>(`${this.backendUrl}ver/education`);
  }
  public postnewseducation(education:Education):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/education`, education);
  }
  public detalleeducation(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
  }
  public updateeducation(id:number,education: Education):Observable<any>{
    return this.httpClient.put<any>(`${this.backendUrl}editar/education/${id}`,education);
  }
  public deleteeducation(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.backendUrl}delete/education/${id}`);
  }
}
