import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoginService} from '../../../service/login.service';

@Component({
  selector: 'app-rgpd',
  templateUrl: './rgpd.component.html',
  styleUrls: ['./rgpd.component.css']
})
export class RGPDComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RGPDComponent>,
              private ser: LoginService) { }

  service = this.ser;

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
}
