import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import {BienService} from '../service/bien.service';
import {Bien, Personne} from '../objet';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
