import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../objet';
import {LoginService} from '../service/login.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {InfoBienComponent} from '../all-bien/info-bien/info-bien.component';

@Component({
  selector: 'app-one-bien',
  templateUrl: './one-bien.component.html',
  styleUrls: ['./one-bien.component.css']
})
export class OneBienComponent implements OnInit {

  constructor(private serv: LoginService,
              private dialog: MatDialog
  ) {}

  @Input() b: Bien;

  ngOnInit(): void {
  }

  informationbient(b: number): void{
    if (this.serv.isAuthenticated()){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '100%';
      dialogConfig.height = '100%';
      dialogConfig.data = {idBien: b};
      this.dialog.open(InfoBienComponent, dialogConfig);
    }else{
      alert('vous devez être connecter pour en voir plus');
    }
  }
}
