import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from 'src/app/models/header';
import { HeaderService } from 'src/app/servicios/header.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  
})
export class HeaderComponent implements OnInit {

  header:Header[]=[];
  roles!: string[];
  isLogged = false;
  isAdmin = false;
  id!: number;
  activatedRoute: any;
  link_red:string="";

  toastr: any;
  
constructor( private headerService:HeaderService,
  private tokenService: TokenService,private router:Router) { }

  ngOnInit():void{
    this.getHeader()
   

  if(this.tokenService.getToken()){
    this.isLogged = true;
    return console.log(`${this.isLogged} + estas logeado`)
  }else{
    this.isLogged = false;
  };

}

   private getHeader():void{
    this.headerService.getheader().subscribe(
      (data:Header[])=>{
        this.header = data;
        
      }
    ) 
   };
   onLogOut():void{
    this.tokenService.logOut();
      window.location.reload();
    this.router.navigate(['/']);
  };

  deleteheader(id?:number){
    if (id != undefined) {
      this.headerService.deleteheader(id).subscribe(
        (data) => {
          this.getHeader();
        },
        (err) => {
          alert(' No se logró eliminar');
        }
      );
    }
  }
  postnewheader(): void {
    const header = new Header(this.link_red);
    this.headerService.postnewheader(header).subscribe(
      (data) => {
        this.toastr.success('Cabecera creada', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error('error al crear nueva cabecera', 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  updateheader(): void {
    //const id = this.activatedRoute.snapshot.params['id'];
    const header = new Header(this.link_red);
    this.headerService.updateheader(this.id, header).subscribe(
      (data) => {
        this.toastr.success('Cabecera Actualizada', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
}



   
function getHeader() {
  throw new Error('Function not implemented.');
}

