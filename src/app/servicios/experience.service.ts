import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private backendUrl:String = environment.apiBaseUrl;
  
  constructor(private httpClient: HttpClient) { }
  public getexperience():Observable<Experience[]>{
    return this.httpClient.get<[Experience]>(`${this.backendUrl}ver/experience`);
  }
  public postnewexperience(experience:Experience):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/experience`, experience);
  }
  public detalleexperience(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
  }
  public updateexperience(id:number,experience: Experience):Observable<any>{
    return this.httpClient.put<any>(`${this.backendUrl}editar/experience/${id}`,experience);
  }
  public deleteexperience(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.backendUrl}delete/experience/${id}`);
  }
}
