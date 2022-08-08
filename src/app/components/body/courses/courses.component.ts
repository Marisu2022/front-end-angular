import { Component, OnInit } from '@angular/core';
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
  courses:Courses[]=[];
  id!: number;
  curso:string='';
  toastr: any;
  roles!: string[];
  isLogged = false;
  isAdmin = false
   activatedRoute: any;



  constructor(private coursesService: CoursesService,private tokenService: TokenService,
    private router:Router) { }

    ngOnInit():void {
      this.getCourses()

      if(this.tokenService.getToken()){
        this.isLogged = true;
         }else{
           this.isLogged = false;
     };
     this.getCourses();
    
    
  }//método para cargar cursos
  public getCourses():void{
    this.coursesService.getcourses().subscribe(
      (data:Courses[])=>{
        this.courses = data;
       
      }
    );}
    deletecourses(id?:number){
      if(id !=undefined){
        this.coursesService.deletecourses(id).subscribe(
      data=>{
        this.getCourses();
      
      },
      (err)=>{
        alert(" No se logró eliminar")
      }
        );
    }}
    postnewcourses(): void {
      const courses = new Courses(this.curso);
      this.coursesService.postnewcourses(courses).subscribe(data=>{
        this.toastr.success('Curso creado','OK',{
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
    
    updatecourses(): void {
    //const id = this.activatedRoute.snapshot.params['id'];
    const courses = new Courses(this.curso);
      this.coursesService.updatecourses(this.id,courses).subscribe(data=>{
    this.toastr.success('Curso Actualizado', 'OK', {
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
