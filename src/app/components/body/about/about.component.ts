import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PortfolioService} from 'src/app/servicios/portfolio.service';
import {TokenService}from 'src/app/servicios/token.service';
import { ToastrService } from 'ngx-toastr';
import { About } from 'src/app/models/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[PortfolioService]
})
export class AboutComponent implements OnInit {
 public abouts:About[]=[];
  miPortfolio:any;
 
   constructor(
    //inyectamos el servicio que importamos
    private datosPortfolio:PortfolioService
   ) 
   { }

  ngOnInit(){ this.datosPortfolio.findAll().subscribe(data=>{
      this.miPortfolio = data;
    })


}}