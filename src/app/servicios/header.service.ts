import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Header } from '../models/header';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private backendUrl: String = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }
  public getheader():Observable<Header[]>{
    return this.httpClient.get<Header[]>(`${this.backendUrl}ver/header`);
  }
   
  public postnewheader(header:Header):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/header`, header);
  }
  
  public detalleheader(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
  }
  
public updateheader(id:number,header:Header):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/header/${id}`,header);
}


public deleteheader(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/header/${id}`);
}

  
}
