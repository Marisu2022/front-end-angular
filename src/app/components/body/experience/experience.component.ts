import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})

export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];
  id!: number;
  periodo: string = '';
  descripcion: string = '';
  toastr: any;
  roles!: string[];
  isLogged = false;
  isAdmin = false;
  activatedRoute: any;

  constructor(
    private experienceService: ExperienceService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getExperience()

    //está logueado?
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      return console.log(`${this.isLogged} + Ya estás logueado`);
    } else {
      this.isLogged = false;
    };
    //llamo al método para que cargue los datos de experiencia
    this.getExperience();
  }
  
  //método para cargar experiencian(getexoerience es la lista)
  public getExperience(): void {
    this.experienceService.getexperience().subscribe((data: Experience[]) => {
      this.experience = data;
    });
  }

  deleteexperience(id?: number) {
    if (id != undefined) {
      this.experienceService.deleteexperience(id).subscribe(
        (data) => {
          this.getExperience();
        },
        (err) => {
          alert(' No se logró eliminar');
        }
      );
    }
  }
  postnewexperience(): void {
    const experience = new Experience(this.periodo, this.descripcion);
    this.experienceService.postnewexperience(experience).subscribe(
      (data) => {
        this.toastr.success('Experience creado', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error('error al crear nueva experiencia', 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  updateexperience(): void {
    //const id = this.activatedRoute.snapshot.params['id'];
    const experience = new Experience(this.periodo, this.descripcion);
    this.experienceService.updateexperience(this.id, experience).subscribe(
      (data) => {
        this.toastr.success('Experiencia Actualizada', 'OK', {
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
