import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortadaComponent } from './components/body/portada/portada.component';
import { SidebarComponent } from './components/body/sidebar/sidebar.component';
import { AboutComponent } from './components/body/about/about.component';
import { CoursesComponent } from './components/body/courses/courses.component';
import { SkillsComponent } from './components/body/skills/skills.component';
import { SkillComponent } from './components/body/skills/skill/skill.component';
import { ContactComponent } from './components/footer/contact/contact.component';
import { ContactFormComponent } from './components/footer/contact/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioService } from './servicios/portfolio.service';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider, InterceptorService } from './servicios/interceptor.service';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditarAboutComponent } from './components/body/about/editar-about.component';
import { NuevoAboutComponent } from './components/body/about/nuevo-about.component';
import { EditarEducationComponent } from './components/body/education/editar-education.component';
import { NuevoEducationComponent } from './components/body/education/nuevo-education.component';
import { NuevoCoursesComponent } from './components/body/courses/nuevo-courses.component';
import { EditarCoursesComponent } from './components/body/courses/editar-courses.component';
import { EditarPortadaComponent } from './components/body/portada/editar-portada.component';
import { NuevoPortadaComponent } from './components/body/portada/nuevo-portada.component';
import { NuevoSkillComponent } from './components/body/skills/skill/nuevo-skill.component';
import { NuevoHeaderComponent } from './components/header/nuevo-header.component';
import { EditarHeaderComponent } from './components/header/editar-header.component';
import { ExperienceComponent } from './components/body/experience/experience.component';
import { OthersComponent } from './components/body/others/others.component';
import { EducationComponent } from './components/body/education/education.component';
import { ProjectsComponent } from './components/body/projects/projects.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    SidebarComponent,
    AboutComponent,
    EducationComponent,
    CoursesComponent,
    OthersComponent,
    SkillsComponent,
    SkillComponent,
    ProjectsComponent,
    ContactComponent,
    ContactFormComponent,
    FooterComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    LoginComponent,
    RegistroComponent,
    EditarHeaderComponent,
    EditarAboutComponent,
    NuevoAboutComponent,
    EditarEducationComponent,
    NuevoEducationComponent,
    NuevoCoursesComponent,
    EditarCoursesComponent,
    EditarPortadaComponent,
    NuevoPortadaComponent,
    NuevoSkillComponent,
    NuevoHeaderComponent,
    ExperienceComponent,
    OthersComponent


],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    FormsModule,
  ],
  providers: [PortfolioService,interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
