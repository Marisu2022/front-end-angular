import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkilService } from 'src/app/servicios/skil.service';

@Component({
  selector: 'app-nuevo-skill',
  templateUrl: './nuevo-skill.component.html',
  styleUrls: ['./nuevo-skill.component.css']
})
export class NuevoSkillComponent implements OnInit {
  id?: number;
  percent:string='';
  text_circle:string='';
  toastr: any;
  constructor(private skilService: SkilService,private router: Router) { }

  ngOnInit(): void {
  }
  postNewSkill(): void {
    const skill = new Skill(this.percent, this.text_circle);
    this.skilService.postnewskill(skill).subscribe(data=>{
      this.toastr.success('Habilidad creada','OK',{
        timeOut: 3000, positionClass:'toast-top-center'
      });
     this.router.navigate(['/']);
    },
    err=>{
      this.toastr.error('error al crear nueva habilidad', 'Fail',{
        timeOut:3000, positionClass:'toast-top-center'
      });
      this.router.navigate(['/']);
    }
  );                        
  }
  
  }

