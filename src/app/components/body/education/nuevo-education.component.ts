import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nuevo-education',
  templateUrl: './nuevo-education.component.html',
  styleUrls: ['./nuevo-education.component.css']
})
export class NuevoEducationComponent implements OnInit {
  id?: number;
  img_institution:string='';
  detalle:string='';
  toastr: any;
  constructor( private educationService: EducationService, private router: Router) { }

  ngOnInit(): void {
  }
postNewEducation(): void {
  const education = new Education(this.img_institution, this.detalle);
  this.educationService.postnewseducation(education).subscribe(data=>{
    this.toastr.success('Educacion creado','OK',{
      timeOut: 3000, positionClass:'toast-top-center'
    });
   this.router.navigate(['/']);
  },
  err=>{
    this.toastr.error('error al crear nuevo trayecto educativo', 'Fail',{
      timeOut:3000, positionClass:'toast-top-center'
    });
    this.router.navigate(['/']);
  }
);                        
}

}