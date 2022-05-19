import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private sercice: LoginService, private route: Router, private  root: ActivatedRoute) { }


  ngOnInit(): void {
  }
}
