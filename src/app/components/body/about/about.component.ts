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
  roles!: string[];
isLogged = false;
isAdmin = false
 
   constructor(
    //inyectamos el servicio que importamos
    private datosPortfolio:PortfolioService,private tokenService: TokenService,private router:Router
   ) 
   { }

  ngOnInit():void{ this.datosPortfolio.getDatos().subscribe(data=>{
      this.miPortfolio = data.about;
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
this.datosPortfolio.getabout().subscribe(
(data:About[])=>{
  this.miPortfolio.about = data;
  console.log(this.miPortfolio.about)
}
) 
};
}