import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-nuevo-experience',
  templateUrl: './nuevo-experience.component.html',
  styleUrls: ['./nuevo-experience.component.css']
})
export class NuevoExperienceComponent implements OnInit {
  id?: number;
  periodo:string='';
  descripcion:string='';
  toastr: any;
  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit(): void {
  }
  postNewExperience(): void {
    const experience = new Experience(this.periodo, this.descripcion);
    this.experienceService.postnewexperience(experience).subscribe(data=>{
      this.toastr.success('Experience creado','OK',{
        timeOut: 3000, positionClass:'toast-top-center'
      });
     this.router.navigate(['/']);
    },
    err=>{
      this.toastr.error('error al crear nueva experiencia', 'Fail',{
        timeOut:3000, positionClass:'toast-top-center'
      });
      this.router.navigate(['/']);
    }
  );                        
  }
  
  }

