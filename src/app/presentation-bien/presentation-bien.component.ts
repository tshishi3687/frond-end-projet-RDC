import {Component, Input, OnInit, Output} from '@angular/core';
import {LoginService} from '../service/login.service';
import {Bien} from '../objet';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {InfoBienComponent} from '../all-bien/info-bien/info-bien.component';

@Component({
  selector: 'app-presentation-bien',
  templateUrl: './presentation-bien.component.html',
  styleUrls: ['./presentation-bien.component.css']
})
export class PresentationBienComponent implements OnInit {

  @Input() b: Bien;

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addInformation(idB: number): void {
    if (this.loginService.isAuthenticated()) {
      this.dialog.open(InfoBienComponent, {
        disableClose: true,
        autoFocus: true,
      });
    } else {
      this.snackBar.open('vous devez être connecté pour en voir plus', 'Fermer');
    }
  }

}
