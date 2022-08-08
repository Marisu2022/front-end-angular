import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Projects } from '../models/projects';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private backendUrl: String = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }
  public getprojects():Observable<Projects[]>{
    return this.httpClient.get<[Projects]>(`${this.backendUrl}ver/project`);
  }
  public postnewprojects(projects:Projects):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/project`, projects);
  }
  public detalleprojecs(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
  }
  public updateprojects(id:number,projects: Projects):Observable<any>{
    return this.httpClient.put<any>(`${this.backendUrl}editar/project/${id}`,projects);
  }
  public deleteprojects(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.backendUrl}delete/project/${id}`);
  }
}
