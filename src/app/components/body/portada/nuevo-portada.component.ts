import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portada } from 'src/app/models/portada';
import { PortadaService } from 'src/app/servicios/portada.service';

@Component({
  selector: 'app-nuevo-portada',
  templateUrl: './nuevo-portada.component.html',
  styleUrls: ['./nuevo-portada.component.css'],
})
export class NuevoPortadaComponent implements OnInit {
  roles!: string[];
  isLogged = false;
  isAdmin = false;
  toastr: any;
  id!: number;
  img_profile: string = '';
  nombre: string = '';
  apellido: string = '';
  info: string = '';

  constructor(private portadaService: PortadaService, private router: Router) {}

  ngOnInit(): void {}
  postNewPortada(): void {
    const portada = new Portada(
      this.img_profile,
      this.nombre,
      this.apellido,
      this.info,
      
    );
    this.portadaService.postnewportada(portada).subscribe(
      (data) => {
        this.toastr.success('Portada creada', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      () => {
        this.toastr.error('error al crear nuevo portada', 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
}

