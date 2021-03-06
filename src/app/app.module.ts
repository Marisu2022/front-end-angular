import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortadaComponent } from './body/home/portada/portada.component';
import { SidebarComponent } from './body/home/sidebar/sidebar.component';
import { AboutComponent } from './body/about/about.component';
import { TableComponent } from './body/experience/table/table.component';
import { TitleComponent } from './body/experience/title/title.component';
import { EducationComponent } from './body/education/education.component';
import { TableStudiesComponent } from './body/education/table-studies/table-studies.component';
import { CoursesComponent } from './body/education/courses/courses.component';
import { OthersComponent } from './body/experience/others/others.component';
import { SkillsComponent } from './body/skills/skills.component';
import { SkillComponent } from './body/skills/skill/skill.component';
import { ProjectsComponent } from './body/projects/projects.component';
import { ProjectComponent } from './body/projects/project/project.component';
import { SkillSecondComponent } from './body/skills/skill-second/skill-second.component';
import { SkillThirdComponent } from './body/skills/skill-third/skill-third.component';
import { ContactComponent } from './body/contact/contact.component';
import { ContactFormComponent } from './body/contact/contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioService } from './servicios/portfolio.service';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    SidebarComponent,
    AboutComponent,
    TableComponent,
    TitleComponent,
    EducationComponent,
    TableStudiesComponent,
    CoursesComponent,
    OthersComponent,
    SkillsComponent,
    SkillComponent,
    ProjectsComponent,
    ProjectComponent,
    SkillSecondComponent,
    SkillThirdComponent,
    ContactComponent,
    ContactFormComponent,
    FooterComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
