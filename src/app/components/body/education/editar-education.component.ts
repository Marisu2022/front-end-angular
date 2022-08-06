import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-editar-education',
  templateUrl: './editar-education.component.html',
  styleUrls: ['./editar-education.component.css']
})
export class EditarEducationComponent implements OnInit {

  education!: Education;
  id!: number;
  
  constructor(private educationService: EducationService, private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.educationService.detalleeducation(this.id).subscribe(
      (data: Education) => {
        this.education = data;
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
 this.educationService.updateeducation(this.id, this.education).subscribe(
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
