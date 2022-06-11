import {Component, Input, OnInit} from '@angular/core';
import {Service} from '../../objet';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  constructor() { }

  @Input() services: Array<Service> = [];


  ngOnInit(): void {
  }

}
