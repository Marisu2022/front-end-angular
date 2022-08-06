import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/servicios/about.service';

@Component({
  selector: 'app-nuevo-about',
  templateUrl: './nuevo-about.component.html',
  styleUrls: ['./nuevo-about.component.css']
})
export class NuevoAboutComponent implements OnInit {
  id?: number;
  aboutMe:string='';
  
  toastr: any;
  constructor(private aboutService:AboutService,private router: Router) { }

  ngOnInit(): void {
  }
  postNewAbout(): void {
    const about = new About(this.aboutMe);
    this.aboutService.postnewabout(about).subscribe(data=>{
      this.toastr.success('About creado','OK',{
        timeOut: 3000, positionClass:'toast-top-center'
      });
     this.router.navigate(['/']);
    },
    err=>{
      this.toastr.error('error al crear nuevo about', 'Fail',{
        timeOut:3000, positionClass:'toast-top-center'
      });
      this.router.navigate(['/']);
    }
  );                        
  }
  
  }

