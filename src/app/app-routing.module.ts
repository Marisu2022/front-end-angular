import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { EditarAboutComponent } from './components/body/about/editar-about.component';
import { NuevoAboutComponent } from './components/body/about/nuevo-about.component';
import { EditarEducationComponent } from './components/body/education/editar-education.component';
import { NuevoEducationComponent } from './components/body/education/nuevo-education.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';



const routes: Routes = [
  {path: 'portfolio',component:PortfolioComponent},
   { path:'login', component:LoginComponent },
   {path:'neweducation',component:NuevoEducationComponent},
   {path:'updateeducation',component:EditarEducationComponent},
   {path:'updateabout',component:EditarAboutComponent},
   {path:'newabout',component:NuevoAboutComponent},
   
     {path: '' ,redirectTo:'portfolio',pathMatch: 'full'},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
