import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from 'src/app/models/courses';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [PortfolioService]
})
export class CoursesComponent implements OnInit {
public courses: Courses[]=[];
miPortfolio:any;
roles!: string[];
isLogged = false;
isAdmin = false

  constructor(private datosPortfolio:PortfolioService,private tokenService: TokenService,
    private router:Router) { }

  ngOnInit(): void {
    this.datosPortfolio.findAll().subscribe(data => 
      {this.courses= data.courses;
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
      this.datosPortfolio.getcourses().subscribe(
        (data:Courses[])=>{
          this.miPortfolio.courses = data;
          console.log(this.miPortfolio.courses)
        }
      ) 
     };
  
}
