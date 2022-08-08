import { Component, OnInit, ValueSansProvider } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  id!: number;
  img_institution: string = '';
  detalle: string = '';
  toastr: any;

  roles!: string[];
  isLogged = false;
  isAdmin = false;
  activatedRoute: any;

  constructor(
    private educationService: EducationService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEducation();
    //está logueado?
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      return console.log(`${this.isLogged} + Ya estás logueado`);
    } else {
      this.isLogged = false;
    }
    //llamo al método para que cargue los datos de educación
    this.getEducation();
  }
  
  //método para cargar educación(geteducation es la lista)
  public getEducation(): void {
    this.educationService.geteducation().subscribe((data: Education[]) => {
      this.education = data;
    });
  }

  deleteeducation(id?: number) {
    if (id != undefined) {
      this.educationService.deleteeducation(id).subscribe(
        (data) => {
          this.getEducation();
        },
        (err) => {
          alert(' No se logró eliminar');
        }
      );
    }
  }
  postneweducation(): void {
    const education = new Education(this.img_institution, this.detalle);
    this.educationService.postnewseducation(education).subscribe(
      (data) => {
        this.toastr.success('Educacion creado', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error('error al crear nuevo trayecto educativo', 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  updateeducation(): void {
    //const id = this.activatedRoute.snapshot.params['id'];
    const education = new Education(this.img_institution, this.detalle);
    this.educationService.updateeducation(this.id, education).subscribe(
      (data) => {
        this.toastr.success('Educacion Actualizada', 'OK', {
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
