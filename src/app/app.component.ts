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
  photo = 'assets/img/27078837-image-d-un-lion-regardant-la-caméra-.jpg';

}
