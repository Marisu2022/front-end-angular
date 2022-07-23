import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [PortfolioService]
})
export class EducationComponent implements OnInit {
public education: Education[]=[];  
miPortfolio:any;
roles!: string[];
isLogged = false;
isAdmin = false
  constructor(private datosPortfolio:PortfolioService, private tokenService: TokenService,
    private router:Router) { }

  ngOnInit(): void {
    this.datosPortfolio.findAll().subscribe(data => 
      {this.education= data.education;
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
      this.datosPortfolio.geteducation().subscribe(
        (data:Education[])=>{
          this.miPortfolio.studies = data;
          console.log(this.miPortfolio.studies)
        }
      ) 
     };
  
}
