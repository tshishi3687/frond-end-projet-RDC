import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-cmel',
  templateUrl: './cmel.component.html',
  styleUrls: ['./cmel.component.css']
})
export class CMELComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CMELComponent>) { }


  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close();
  }
}
