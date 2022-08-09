import { Injectable } from '@angular/core';
import { Portada } from '../models/portada'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PortadaService {
  private backendUrl: String = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }
  public getportada():Observable<Portada[]>{
    return this.httpClient.get<[Portada]>(`${this.backendUrl}ver/portada`);
}
public postnewportada(portada:Portada):Observable<any>{
  return this.httpClient.post<any>(`${this.backendUrl}new/portada`, portada);
}
public detalleportada(id: number): Observable<any>{
  return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
}
public updateportada(id:number,portada: Portada):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/portada/${id}`,portada);
}
public deleteportada(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/portada${id}`);
}
}
