import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Others } from 'src/app/models/others';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css'],
  providers: [PortfolioService]
})
export class OthersComponent implements OnInit {
  public others: Others[]=[];
  miPortfolio:any;
  roles!: string[];
  isLogged = false;
  isAdmin = false

  constructor(
    private datosPortfolio:PortfolioService,private tokenService: TokenService,
    private router:Router) { }

  ngOnInit(): void {
    this.datosPortfolio.findAll().subscribe(data => 
      {this.others= data.others;
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
      this.datosPortfolio.getothers().subscribe(
        (data:Others[])=>{
          this.miPortfolio.others = data;
          console.log(this.miPortfolio.others)
        }
      ) 
     };

}
