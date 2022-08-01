import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable}from 'rxjs';
import { About } from '../models/about';
import { Courses } from '../models/courses';
import { Experience } from '../models/experience';
import { Header } from '../models/header';
import { Others } from '../models/others';
import { Persona } from '../models/persona';
import { Portada } from '../models/portada';
import { Projects } from '../models/projects';
import { Skill } from '../models/skill';
import{Education } from '../models/education';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  //dirección de la api o endpoint del backend
  backendUrl:String= 'http://localhost:8080/';


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
  public getabout():Observable<About[]>{
    return this.httpClient.get<About[]>(`${this.backendUrl}/ver/about`);
  }
  
public geteducation():Observable<Education[]>{
  return this.httpClient.get<[Education]>(`${this.backendUrl}ver/education`);
}
public getexperience():Observable<Experience[]>{
  return this.httpClient.get<[Experience]>(`${this.backendUrl}ver/experience`);
}
public getothers():Observable<Others[]>{
  return this.httpClient.get<[Others]>(`${this.backendUrl}ver/others`);
}

  public getportada():Observable<Portada[]>{
    return this.httpClient.get<[Portada]>(`${this.backendUrl}ver/portada`);
}
public getprojects():Observable<Projects[]>{
  return this.httpClient.get<[Projects]>(`${this.backendUrl}ver/projects`);
}
  public getskill():Observable<Skill[]>{
    return this.httpClient.get<[Skill]>(`${this.backendUrl}ver/skill`);
  }

  //Crear nuevos datos en el porfolio


  
  public postnewseducation(education:Education):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/education`, education);
  }
  public postnewabout(about:About):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/about`, about);
  }
  public postnewheader(header:Header):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/header`, header);
  }
  
  public postnewexperience(experience:Experience):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/experience`, experience);
  }
  public postnewothers(others:Others):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/others`, others);
  }
  public postnewportada(portada:Portada):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/portada`, portada);
  }
  public postnewprojects(projects:Projects):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/projects`, projects);
  }
  public postnewskill(skill:Skill):Observable<any>{
    return this.httpClient.post<any>(`${this.backendUrl}new/skill`, skill);
  }
  //Traer datos del porfolio
  public detallepersona(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detallepersona/${id}`);
  }
  public detalleabout(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detalleabout/${id}`);
  }
 
  public detalleeducation(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detalleeducation/${id}`);
  }
  public detalleexperience(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detalleexperience/${id}`);
  }
  public detalleheader(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detalleheader/${id}`);
  }
  public detalleothers(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detalleothers/${id}`);
  }
  public detalleportada(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detalleportada/${id}`);
  }
  public detalleprojecs(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detalleprojects/${id}`);
  }
  public detalleskill(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.backendUrl}detalleskill/${id}`);
  }

  //Actualizar datos del porfolio

public updatepersona(id:number, persona: Persona):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/persona/${id}`, persona);
}
public updateabout(id:number, about: About):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/about/${id}`, about);
}

public updateducation(id:number,education: Education):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/education/${id}`,education);
}
public updateexperience(id:number,experience: Experience):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/experience/${id}`,experience);
}
public updateheader(id:number,header:Header):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/header/${id}`,header);
}
public updateothers(id:number,others: Others):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/others/${id}`,others);
}
public updateportada(id:number,portada: Portada):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/portada/${id}`,portada);
}
public updateprojects(id:number,projects: Projects):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/projects/${id}`,projects);
}
public updateskill(id:number,skill: Skill):Observable<any>{
  return this.httpClient.put<any>(`${this.backendUrl}editar/skill/${id}`,skill);
}


//Borrar datos del porfolio
public deleteeducation(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/${id}`);
}
public deletepersona(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/${id}`);
}
public deleteabout(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/${id}`);
}

public deleteexperience(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/${id}`);
}
public deleteheader(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/${id}`);
}
public deleteothers(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/${id}`);
}
public deleteportada(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/${id}`);
}
public deleteprojects(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/${id}`);
}
public deleteskill(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.backendUrl}delete/${id}`);
}
}