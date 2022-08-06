import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/servicios/about.service';

@Component({
  selector: 'app-editar-about',
  templateUrl: './editar-about.component.html',
  styleUrls: ['./editar-about.component.css']
})
export class EditarAboutComponent implements OnInit {
  about!: About;
  id!: number;
  
  constructor(private aboutService: AboutService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }}

  




