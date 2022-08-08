import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkilService {
  private backendUrl:String = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }
  public getskill():Observable<Skill[]>{
    return this.httpClient.get<[Skill]>(`${this.backendUrl}ver/skill`);
  }
  public postnewskill(skill:Skill):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/skill`, skill);
  }
  public detalleskill(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detalleskill/${id}`);
  }
  public updateskill(id:number,skill: Skill):Observable<any>{
    return this.httpClient.put<any>(`${this.backendUrl}editar/skill/${id}`,skill);
  }
  public deleteskill(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.backendUrl}delete/${id}`);
  }
}
