import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[PortfolioService]
})
export class ProjectsComponent implements OnInit {
  public projects: Projects[] = [];
  miPortfolio:any;
  roles!: string[];
  isLogged = false;
  isAdmin = false
  constructor(private datosPortfolio:PortfolioService,private tokenService: TokenService,
    private router:Router) { }

  ngOnInit(): void {
    this.datosPortfolio.findAll().subscribe(data => 
      {this.projects = data.projects;
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
      this.datosPortfolio.getprojects().subscribe(
        (data:Projects[])=>{
          this.miPortfolio.projects = data;
          console.log(this.miPortfolio.projects)
        }
      ) 
     };
  

}
