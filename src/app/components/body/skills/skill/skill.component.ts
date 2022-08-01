import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  providers:[PortfolioService]
})
export class SkillComponent implements OnInit {
skill: Skill[]=[];
miPortfolio:any;

roles!: string[];
isLogged = false;
isAdmin = false

  constructor(private datosPortfolio:PortfolioService,
     private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatos().subscribe(data=>{
      this.miPortfolio = data;
    });

  this.getdatos();

  if(this.tokenService.getToken()){
    this.isLogged = true;
    return console.log(`${this.isLogged} + estas logeado`)
  }else{
    this.isLogged = false;
  };

}

   private getdatos(){
    this.datosPortfolio.getskill().subscribe(
      (data:Skill[])=>{
        this.skill = data;
        console.log(this.skill);
      }
    ) 
   };

  onLogOut():void{
    this.tokenService.logOut();
      window.location.reload();
    this.router.navigate(['/']);
  };


}