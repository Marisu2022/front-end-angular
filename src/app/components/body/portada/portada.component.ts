import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portada } from 'src/app/models/portada';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css'],
  providers:[PortfolioService]
})
export class PortadaComponent implements OnInit {
  portada: Portada[]=[];
  miPortfolio:any;
  roles!: string[];
  isLogged = false;
  isAdmin = false

  constructor(private datosPortfolio:PortfolioService,private tokenService: TokenService,
    private router:Router) { }

  ngOnInit(){ this.datosPortfolio.getDatos().subscribe(data=>{
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
    this.datosPortfolio.getportada().subscribe(
      (data:Portada[])=>{
        this.portada = data;
        console.log(this.portada)
      }
    ) 
   };

  onLogOut():void{
    this.tokenService.logOut();
      window.location.reload();
    this.router.navigate(['/']);
  };


}

