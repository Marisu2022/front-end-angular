import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portada } from 'src/app/models/portada';
import { PortadaService } from 'src/app/servicios/portada.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css'],
  
})
export class PortadaComponent implements OnInit {
  portada: Portada[]=[];
  roles!: string[];
  isLogged = false;
  isAdmin = false;
  id!: number;
  activatedRoute: any;
  img_profile: string="";
  info:string="";
  nombre: string="";
  apellido:string="";
  toastr: any;

  constructor(private portadaService: PortadaService,private tokenService: TokenService,
    private router:Router) { }

  ngOnInit():void{ 
    this.getPortada()
  

  if(this.tokenService.getToken()){
    this.isLogged = true;
    return console.log(`${this.isLogged} + estas logeado`)
  }else{
    this.isLogged = false;
  };

}

   private getPortada():void{
    this.portadaService.getportada().subscribe(
      (data:Portada[])=>{
        this.portada = data;
        
      }
    ) 
   };

  deleteportada(id?:number){
    if (id != undefined) {
      this.portadaService.deleteportada(id).subscribe(
        (data) => {
          this.getPortada();
        },
        (err) => {
          alert(' No se logró eliminar');
        }
      );
    }
  }
  postnewportada(): void {
    const portada = new Portada(this.img_profile, this.nombre, this.apellido, this.info);
    this.portadaService.postnewportada(portada).subscribe(
      (data) => {
        this.toastr.success('Portada creada', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error('error al crear nueva portada', 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  updateportada(): void {
    //const id = this.activatedRoute.snapshot.params['id'];
    const portada = new Portada(this.img_profile, this.nombre, this.apellido, this.info);
    this.portadaService.updateportada(this.id, portada).subscribe(
      (data) => {
        this.toastr.success('Portada Actualizada', 'OK', {
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


