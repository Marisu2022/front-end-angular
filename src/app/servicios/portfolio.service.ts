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
  



}