import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from 'src/app/models/courses';
import { CoursesService } from 'src/app/servicios/courses.service';

@Component({
  selector: 'app-nuevo-courses',
  templateUrl: './nuevo-courses.component.html',
  styleUrls: ['./nuevo-courses.component.css']
})
export class NuevoCoursesComponent implements OnInit {
  id?: number;
  curso:string='';
  toastr: any;
  constructor(private coursesService:CoursesService,private router: Router) { }

  ngOnInit(): void {
  }
  postNewCourses(): void {
    const courses = new Courses(this.curso);
    this.coursesService.postnewcourses(courses).subscribe(data=>{
      this.toastr.success('Curso creado','OK',{
        timeOut: 3000, positionClass:'toast-top-center'
      });
     this.router.navigate(['/']);
    },
    err=>{
      this.toastr.error('error al crear nuevo curso', 'Fail',{
        timeOut:3000, positionClass:'toast-top-center'
      });
      this.router.navigate(['/']);
    }
  );                        
  }
  
  }




