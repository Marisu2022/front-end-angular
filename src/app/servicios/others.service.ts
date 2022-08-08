import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Others } from '../models/others';

@Injectable({
  providedIn: 'root'
})
export class OthersService {
  private backendUrl: String = environment.apiBaseUrl;
  
  constructor(private httpClient: HttpClient) { }
  public getothers():Observable<Others[]>{
    return this.httpClient.get<[Others]>(`${this.backendUrl}ver/others`);
  }
  public postnewothers(others:Others):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/others`, others);
  }
  public detalleothers(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
  }
  public updateothers(id:number,others: Others):Observable<any>{
    return this.httpClient.put<any>(`${this.backendUrl}editar/others/${id}`,others);
  }
  public deleteothers(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.backendUrl}delete/others/${id}`);
  }
}
