import {Component, Input} from '@angular/core';
import {LoginService} from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
   service: LoginService;
  photo = 'assets/img/header/999999-6413933219236.jpg';

}
