import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../objet';
import {LoginService} from '../service/login.service';
import {BienService} from '../service/bien.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {InfoBienComponent} from '../all-bien/info-bien/info-bien.component';

@Component({
  selector: 'app-one-bien',
  templateUrl: './one-bien.component.html',
  styleUrls: ['./one-bien.component.css']
})
export class OneBienComponent implements OnInit {

  constructor(private serv: LoginService,
              private bienService: BienService,
              private dialog: MatDialog) { }
   b = this.serv.repBiendb();
  service = this.serv.isAuthenticated();

  ngOnInit(): void {
  }

  informationbient(b: Bien): void{
    if (this.service){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '100%';
      dialogConfig.height = '100%';
      this.dialog.open(InfoBienComponent, dialogConfig);
    }else{
      alert('vous devez être connecter pour en voir plus');
    }

  }
}
