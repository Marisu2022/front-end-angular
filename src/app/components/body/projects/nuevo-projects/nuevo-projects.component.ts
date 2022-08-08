import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/servicios/projects.service';


@Component({
  selector: 'app-nuevo-projects',
  templateUrl: './nuevo-projects.component.html',
  styleUrls: ['./nuevo-projects.component.css'],
  
})
export class NuevoProjectsComponent implements OnInit {
  
  roles!: string[];
  isLogged = false;
  isAdmin = false
  toastr: any;
  id!: number;
    img_proyecto: string="";
    anio: string="";
    herramientas: string="";
    nombre_proyecto:string="";
    descripcion_proyecto: string="";
  datosPortfolio: any;
  constructor(private projectsService: ProjectsService,private router: Router) { }

  ngOnInit(): void {
  }
  postNewProjects(): void {
    const projects = new Projects(this.img_proyecto, this.anio, this.herramientas, this.nombre_proyecto, this.descripcion_proyecto);
    this.projectsService.postnewprojects(projects).subscribe(data=>{
      this.toastr.success('Proyecto creado','OK',{
        timeOut: 3000, positionClass:'toast-top-center'
      });
     this.router.navigate(['/']);
    },
    ()=>{
      this.toastr.error('error al crear nuevo proyecto', 'Fail',{
        timeOut:3000, positionClass:'toast-top-center'
      });
      this.router.navigate(['/']);
    }
  );                        
  }
  
  }



