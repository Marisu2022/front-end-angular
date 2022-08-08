import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { EditarAboutComponent } from './components/body/about/editar-about.component';
import { NuevoAboutComponent } from './components/body/about/nuevo-about.component';
import { NuevoCoursesComponent } from './components/body/courses/nuevo-courses.component';
import { EditarEducationComponent } from './components/body/education/editar-education.component';
import { NuevoEducationComponent } from './components/body/education/nuevo-education.component';
import { NuevoExperienceComponent } from './components/body/experience/nuevo-experience/nuevo-experience.component';
import { NuevoOthersComponent } from './components/body/others/nuevo-others/nuevo-others.component';
import { NuevoSkillComponent } from './components/body/skills/skill/nuevo-skill.component';

import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'neweducation', component: NuevoEducationComponent },
  { path: 'updateeducation', component: EditarEducationComponent },
  { path: 'newabout', component: NuevoAboutComponent },
  { path: 'updateabout', component: EditarAboutComponent },
  { path: 'newexperience', component: NuevoExperienceComponent },
  { path: 'updateexperience', component:NuevoExperienceComponent },
  { path: 'newothers', component: NuevoOthersComponent },
  { path: 'newcourses', component: NuevoCoursesComponent },
  { path: 'newskills', component: NuevoSkillComponent },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
