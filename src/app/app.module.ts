import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortadaComponent } from './body/home/portada/portada.component';
import { SidebarComponent } from './body/home/sidebar/sidebar.component';
import { AboutComponent } from './body/about/about.component';
import { TableComponent } from './body/experience/table/table.component';
import { OthersComponent } from './body/experience/others/others.component';
import { TitleComponent } from './body/experience/title/title.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    SidebarComponent,
    AboutComponent,
    TableComponent,
    OthersComponent,
    TitleComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
