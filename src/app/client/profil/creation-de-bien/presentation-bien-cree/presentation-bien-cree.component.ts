import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../../../../objet';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {SuppressionBienComponent} from '../../../../communications/danger/suppression-bien/suppression-bien.component';
import {LoginService} from '../../../../service/login.service';

@Component({
  selector: 'app-presentation-bien-cree',
  templateUrl: './presentation-bien-cree.component.html',
  styleUrls: ['./presentation-bien-cree.component.css']
})
export class PresentationBienCreeComponent implements OnInit {

  constructor(private ser: LoginService,
              private dialog: MatDialog,
              public dialogRef: MatDialogRef<PresentationBienCreeComponent>) { }

  service = this.ser;

  ngOnInit(): void {
  }

  suprimerBien(b: Bien): void{
    this.service.biendb(b);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    this.dialog.open(SuppressionBienComponent, dialogConfig);
  }

  doBack(): void{
    this.dialogRef.close();
  }
}
