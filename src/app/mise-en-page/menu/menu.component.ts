import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  text = 'Bonjour Bienvenue dans Angular';
  input: string;

  constructor(private service: LoginService) { }
  ser = this.service;

  ngOnInit(): void {
  }
}
