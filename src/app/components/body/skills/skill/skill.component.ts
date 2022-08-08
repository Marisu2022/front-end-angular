import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  providers:[PortfolioService]
})
export class SkillComponent implements OnInit {
skill: Skill[]=[];
miPortfolio:any;

roles!: string[];
isLogged = false;
isAdmin = false

  constructor(private datosPortfolio:PortfolioService,
     private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }}