import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-cr',
  templateUrl: './cr.component.html',
  styleUrls: ['./cr.component.css']
})
export class CRComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CRComponent>) { }


  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close();
  }
}
