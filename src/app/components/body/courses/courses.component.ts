import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Courses } from 'src/app/models/courses';
import { CoursesService } from 'src/app/servicios/courses.service';
import { TokenService } from 'src/app/servicios/token.service';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  
})
export class CoursesComponent implements OnInit {
  public courses:Courses[]=[];
  public updateCourses: Courses | undefined;
  public deleteCourses: Courses | undefined;
  isLogged:boolean= false;
  roles!: string[];
  isAdmin:boolean = false



  constructor(private coursesService: CoursesService,private tokenService: TokenService,
    private router:Router) { }

    ngOnInit() {
      this.getCourses()
      if(this.tokenService.getToken()){
        this.isLogged = true;
         }else{
           this.isLogged = false;
     };
     this.getCourses();
    
    
  }
  public getCourses():void {
    this.coursesService.getCourses().subscribe(
      (response:Courses[])=>{
        this.courses = response;
        console.log(this.courses);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  
    public onPostNewCourses(postNewForm: NgForm):void {
      document.getElementById('postNew-courses-modal')?.click();
      this.coursesService.postNewCourses(postNewForm.value).subscribe(
        (response: Courses) => {
          console.log(response);
          this.getCourses();
          postNewForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          postNewForm.reset();
        }
      );
      
    }
  
    public onUpdateCourses(courses:Courses):void {
      this.coursesService.updateCourses(courses).subscribe(
      (response: Courses) => {
        console.log();
        this.getCourses();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    
  }
  
    public onDeleteCourses(id:number):void {
      this.coursesService.deleteCourses(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getCourses();
        
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
    
  }
  public onOpenModal(courses: Courses, mode: string): void{
    const container = document.getElementById('courses-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'postNew') {
      button.setAttribute('data-target', '#postNewCoursesModal');
    }
    if (mode === 'update') {
      this.updateCourses = courses;
      button.setAttribute('data-target', '#updateCuorsesModal');
    }
    if (mode === 'delete') {
      this.deleteCourses = courses;
      button.setAttribute('data-target', '#deleteCoursesModal');
    }
    container?.appendChild(button);
    button.click();
  }
  
  }


  
  