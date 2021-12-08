import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {LoginService} from '../../../service/login.service';
import {RGPDComponent} from '../../donneeLegaux/rgpd/rgpd.component';

@Component({
  selector: 'app-mise-engarde-start-apps',
  templateUrl: './mise-engarde-start-apps.component.html',
  styleUrls: ['./mise-engarde-start-apps.component.css']
})
export class MiseEngardeStartAppsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<MiseEngardeStartAppsComponent>,
              private service: LoginService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  AcceptationConditions(): void{
    this.dialogRef.close();
  }

  refusConditions(): string{
    this.dialogRef.close();
    window.location.href = 'http://google.be';
    return window.location.href;
  }

  lookRGPD(): void{
    this.dialogRef.close();
    if (!this.service.isAuthenticated()){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '100%';
      dialogConfig.height = '100%';
      this.dialog.open(RGPDComponent, dialogConfig);
    }
  }
}
