import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenService}from 'src/app/servicios/token.service';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/servicios/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  
})
export class AboutComponent implements OnInit {
 about:About[]=[];

  id!: number;
  about_me:string='';
  toastr: any;
  roles!: string[];
  isLogged = false;
  isAdmin = false
   activatedRoute: any;
 
   constructor(
    //inyectamos el servicio que importamos
    private aboutService:AboutService,
    private tokenService: TokenService,
    private router:Router
   ) 
   { }

  ngOnInit():void{
     this.getAbout()

//está logueado?
if(this.tokenService.getToken()){
  this.isLogged = true;
  return console.log(`${this.isLogged} + Ya estás logueado`)
}else{
  this.isLogged = false;
};
//llamo al método para que cargue about
this.getAbout();

}
//método para cargar about
private getAbout():void{
this.aboutService.getabout().subscribe(
(data:About[])=>{
  this.about = data;
  
}
);
}
deleteabout(id?:number){
  if(id !=undefined){
    this.aboutService.deleteabout(id).subscribe(
  data=>{
    this.getAbout();
  
  },
  (err)=>{
    alert(" No se logró eliminar")
  }
    );
}}
postnewabout(): void {
  const about= new About(this.about_me);
  this.aboutService.postnewabout(about).subscribe(data=>{
    this.toastr.success('About creado','OK',{
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

updateabout(): void {
//const id = this.activatedRoute.snapshot.params['id'];
const about = new About(this.about_me);
  this.aboutService.updateabout(this.id,about).subscribe(data=>{
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