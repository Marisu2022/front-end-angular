import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  
})
export class ExperienceComponent implements OnInit {
 public experience: Experience[]=[];
  miPortfolio:any;
  roles!: string[];
  isLogged = false;
  isAdmin = false

  constructor(
    private datosPortfolio:PortfolioService,private tokenService: TokenService,
    private router:Router) { }
    

  ngOnInit() {
    this.datosPortfolio.getDatos().subscribe(data => 
    {this.experience= data.experience;
      });
      //está logueado?
      if(this.tokenService.getToken()){
        this.isLogged = true;
        return console.log(`${this.isLogged} + Ya estás logueado`)
      }else{
        this.isLogged = false;
      };
      this.getdatos();
    
  }
  private getdatos(){
    this.datosPortfolio.getexperience().subscribe(
      (data:Experience[])=>{
        this.miPortfolio.experience = data;
        console.log(this.miPortfolio.experience)
      }
    ) 
   };

}
