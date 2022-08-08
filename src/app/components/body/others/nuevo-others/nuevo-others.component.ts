import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Others } from 'src/app/models/others';
import { OthersService } from 'src/app/servicios/others.service';

@Component({
  selector: 'app-nuevo-others',
  templateUrl: './nuevo-others.component.html',
  styleUrls: ['./nuevo-others.component.css']
})
export class NuevoOthersComponent implements OnInit {
  id?: number;
  item:string='';
  toastr: any;
  constructor(private othersService: OthersService,private router: Router) { }

  ngOnInit(): void {}
  postNewOthers(): void {
    const others = new Others(this.item);
    this.othersService.postnewothers(others).subscribe(data=>{
      this.toastr.success('Others creado','OK',{
        timeOut: 3000, positionClass:'toast-top-center'
      });
     this.router.navigate(['/']);
    },
    err=>{
      this.toastr.error('error al crear nuevo others', 'Fail',{
        timeOut:3000, positionClass:'toast-top-center'
      });
      this.router.navigate(['/']);
    }
  );                        
  }
  
  }

