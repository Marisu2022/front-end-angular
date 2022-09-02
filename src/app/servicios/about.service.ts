import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { About } from '../models/about';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private backendUrl: String = environment.apiBaseUrl;
  
  constructor(private httpClient: HttpClient) {}
  public getabout(): Observable<About[]> {
    return this.httpClient.get<[About]>(`${this.backendUrl}ver/about`);
  }
  public postnewabout(about: About): Observable<any> {
    return this.httpClient.post<any>(`${this.backendUrl}new/about`, about);
  }
  public detalleabout(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
  }
  public updateabout(id: number, about: About): Observable<any> {
    return this.httpClient.put<any>(`${this.backendUrl}editar/about/${id}`, about);
  }
  public deleteabout(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.backendUrl}delete/about/${id}`);
  }
}
