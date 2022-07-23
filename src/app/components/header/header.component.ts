import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from 'src/app/models/header';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[PortfolioService]
  
})
export class HeaderComponent implements OnInit {

  headers:Headers[]=[];
miPortfolio:any;
  
constructor( 
      //inyectamos el servicio que importamos
       private datosPortfolio: PortfolioService
  
      ) { }

  ngOnInit() { this.datosPortfolio.findAll().subscribe(data => {
    this.miPortfolio = data;
  })
  

  }}
  
   
