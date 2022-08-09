import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable}from 'rxjs';
import { environment } from 'src/environments/environment';
import { About } from '../models/about';
import { Experience } from '../models/experience';
import { Header } from '../models/header';
import { Others } from '../models/others';
import { Persona } from '../models/persona';
import { Portada } from '../models/portada';
import { Projects } from '../models/projects';
import { Skill } from '../models/skill';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  //dirección de la api o endpoint del backend
private backendUrl: String = environment.apiBaseUrl;


  constructor(
    //proporcionar mmétodos que reciben
    private httpClient: HttpClient
    ) { }
   //Métodos
  getDatos():Observable<any>{
     //return this.httpClient.get(`${this.backendUrl}`);
     return this.httpClient.get('./assets/data/data.json');
  } 
  //Ver los datos de los componentes

  
  public getheader():Observable<Header[]>{
    return this.httpClient.get<Header[]>(`${this.backendUrl}ver/header`);
  }
  public getportada():Observable<Portada[]>{
    return this.httpClient.get<[Portada]>(`${this.backendUrl}ver/portada`);
}
public getprojects():Observable<Projects[]>{
  return this.httpClient.get<[Projects]>(`${this.backendUrl}ver/projects`);
}
  

  //Crear nuevos datos en el porfolio
 
  
  public postnewheader(header:Header):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/header`, header);
  }
  
   
  public postnewportada(portada:Portada):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/portada`, portada);
  }
  public postnewprojects(projects:Projects):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/project`, projects);
  }
  
  //Traer datos del porfolio
  public detallepersona(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
  }
    
  
  public detalleheader(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
  }

  public detalleportada(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
  }
  public detalleprojecs(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detail/${id}`);
  }
 

  //Actualizar datos del porfolio

public updatepersona(id:number, persona: Persona):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/persona/${id}`, persona);
}





public updateheader(id:number,header:Header):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/header/${id}`,header);
}

public updateportada(id:number,portada: Portada):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/portada/${id}`,portada);
}
public updateprojects(id:number,projects: Projects):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/project/${id}`,projects);
}



//Borrar datos del porfolio

public deletepersona(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/persona${id}`);
}




public deleteheader(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/header${id}`);
}

public deleteportada(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/portada${id}`);
}
public deleteprojects(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/project${id}`);
}

}