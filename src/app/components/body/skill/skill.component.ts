import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/servicios/token.service';
import { SkilService } from 'src/app/servicios/skil.service';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  
})
export class SkillComponent implements OnInit {
skill: Skill[]=[];
id!: number;
percent:string='';
text_circle:string='';
  toastr: any;

roles!: string[];
isLogged = false;
isAdmin = false

  constructor(private skilService:SkilService,
     private tokenService: TokenService,
  
    private router: Router) { }

  ngOnInit(): void {
      this.getSkill()

  if(this.tokenService.getToken()){
    this.isLogged = true;
    return console.log(`${this.isLogged} + estas logeado`)
  }else{
    this.isLogged = false;
  };
  this.getSkill();
      
}
private getSkill(){
  this.skilService.getskill().subscribe(
    (data:Skill[])=>{
      this.skill = data;
      
    }
  );
 }

 deleteskill(id?:number){
  if(id !=undefined){
    this.skilService.deleteskill(id).subscribe(
  data=>{
    this.getSkill();
  
  },
  (err)=>{
    alert(" No se logró eliminar")
  }
    );
}}
postnewskill(): void {
  const skill= new Skill(this.percent,this.text_circle);
  this.skilService.postnewskill(skill).subscribe(data=>{
    this.toastr.success('Skill creado','OK',{
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

updateskill(): void {
//const id = this.activatedRoute.snapshot.params['id'];
const skill = new Skill(this.percent,this.text_circle);
  this.skilService.updateskill(this.id,skill).subscribe(data=>{
this.toastr.success('Acerca de mí Actualizado', 'OK', {
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
