import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/servicios/projects.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];
  roles!: string[];
  isLogged = false;
  isAdmin = false;
  id!: number;
  activatedRoute: any;
    img_proyecto: string="";
    anio: string="";
    herramientas: string="";
    nombre_proyecto:string="";
    descripcion_proyecto: string="";
  toastr: any;

  constructor(private projectsService: ProjectsService,private tokenService: TokenService,
    private router:Router) { }

  ngOnInit(): void {
    this.getProjects()
      
        //está logueado?
        if(this.tokenService.getToken()){
          this.isLogged = true;
          return console.log(`${this.isLogged} + Ya estás logueado`)
        }else{
          this.isLogged = false;
        };
        this.getProjects();
      
    }
    private getProjects():void{
      this.projectsService.getprojects().subscribe(
        (data:Projects[])=>{
          this.projects = data;
         
        }
      ) 
     };
     deleteprojects(id?: number) {
      if (id != undefined) {
        this.projectsService.deleteprojects(id).subscribe(
          (data) => {
            this.getProjects();
          },
          (err) => {
            alert(' No se logró eliminar');
          }
        );
      }
    }
    postnewprojects(): void {
      const projects = new Projects(this.img_proyecto, this.anio, this.herramientas, this.nombre_proyecto, this.descripcion_proyecto);
      this.projectsService.postnewprojects(projects).subscribe(
        (data) => {
          this.toastr.success('Proyecto creado', 'OK', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
          this.router.navigate(['/']);
        },
        (err) => {
          this.toastr.error('error al crear nuevo proyecto', 'Fail', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
          this.router.navigate(['/']);
        }
      );
    }
  
    updateprojects(): void {
      //const id = this.activatedRoute.snapshot.params['id'];
      const projects = new Projects(this.img_proyecto, this.anio, this.herramientas, this.nombre_proyecto, this.descripcion_proyecto);
      this.projectsService.updateprojects(this.id, projects).subscribe(
        (data) => {
          this.toastr.success('Proyecto Actualizado', 'OK', {
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
  

