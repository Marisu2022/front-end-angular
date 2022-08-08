import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Others } from 'src/app/models/others';
import { OthersService } from 'src/app/servicios/others.service';
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
  id!: number;
  item:string='';
  toastr: any;
  roles!: string[];
  isLogged = false;
  isAdmin = false

  constructor(
    private othersService: OthersService,private tokenService: TokenService,
    private router:Router) { }

  ngOnInit(): void {
    this.getOthers()

        //está logueado?
        if(this.tokenService.getToken()){
          this.isLogged = true;
          return console.log(`${this.isLogged} + Ya estás logueado`)
        }else{
          this.isLogged = false;
        };

        this.getOthers();
      
    }
    private getOthers(){
      this.othersService.getothers().subscribe(
        (data:Others[])=>{
          this.others = data;
          
        }
      );
     }

     deleteothers(id?:number){
      if(id !=undefined){
        this.othersService.deleteothers(id).subscribe(
      data=>{
        this.getOthers();
      
      },
      (err)=>{
        alert(" No se logró eliminar")
      }
        );
    }}
    postnewothers(): void {
      const others= new Others(this.item);
      this.othersService.postnewothers(others).subscribe(data=>{
        this.toastr.success('Others creado','OK',{
          timeOut: 3000, positionClass:'toast-top-center',
        });
       this.router.navigate(['/']);
      },
      (err)=>{
        this.toastr.error('Error al crear nuevo texto acerca de mí', 'Fail',{
          timeOut:3000, 
          positionClass:'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      
    );
    }
    
    updateothers(): void {
    //const id = this.activatedRoute.snapshot.params['id'];
    const others = new Others(this.item);
      this.othersService.updateothers(this.id,others).subscribe(data=>{
    this.toastr.success('Acerca de mí Actualizado', 'OK', {
      timeOut: 3000, positionClass: 'toast-top-center'
    });
    this.router.navigate(['/']);
    },
    (err) => {
    this.toastr.error(err.error.mensaje, 'Fail', {
      timeOut: 3000,  positionClass: 'toast-top-center',
    });
    this.router.navigate(['/']);
    }
    );
    }
    
}
