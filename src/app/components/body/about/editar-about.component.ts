import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/servicios/about.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-editar-about',
  templateUrl: './editar-about.component.html',
  styleUrls: ['./editar-about.component.css']
})
export class EditarAboutComponent implements OnInit {
  about_me!: About;
  id!: number;
  toastr: any;
  
  constructor(private aboutService: AboutService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.aboutService.detalleabout(this.id).subscribe(
      (data: About) => {
        this.about_me = data;
     },
     err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
       timeOut: 3000,  positionClass: 'toast-top-center',
       });
    // this.router.navigate(['/']);
     }
    );
} 

onUpdate(): void {
 //const id = this.activatedRoute.snapshot.params['id'];
 this.aboutService.updateabout(this.id, this.about_me).subscribe(
   data => {
     this.toastr.success('Educacion Actualizada', 'OK', {
       timeOut: 3000, positionClass: 'toast-top-center'
     });
     this.router.navigate(['/']);
   },
   err => {
     this.toastr.error(err.error.mensaje, 'Fail', {
       timeOut: 3000,  positionClass: 'toast-top-center',
     });
     this.router.navigate(['/']);
   }
 );
}

}





