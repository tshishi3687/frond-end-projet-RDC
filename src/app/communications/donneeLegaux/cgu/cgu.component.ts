import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.component.html',
  styleUrls: ['./cgu.component.css']
})
export class CGUComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CGUComponent>) { }

  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close();
  }

}
