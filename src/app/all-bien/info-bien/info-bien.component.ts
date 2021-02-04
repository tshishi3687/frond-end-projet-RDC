import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Bien} from '../../objet';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-info-bien',
  templateUrl: './info-bien.component.html',
  styleUrls: ['./info-bien.component.css']
})
export class InfoBienComponent implements OnInit {

  @Output() infoBien: EventEmitter<any> = new EventEmitter();
  @Input() b: Bien;
  constructor( private service: LoginService) { }

   echange = false;

  ngOnInit(): void {
  }

  siConnecte(): boolean{
    return this.service.isAuthenticated();
  }

  changement(): boolean{

    if (this.echange === false) {
      this.echange = true;
      return this.echange;
    }else{
      this.echange = false;
      return this.echange;
    }
  }
}
