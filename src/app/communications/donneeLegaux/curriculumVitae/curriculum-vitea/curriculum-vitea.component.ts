import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-curriculum-vitea',
  templateUrl: './curriculum-vitea.component.html',
  styleUrls: ['./curriculum-vitea.component.css']
})
export class CurriculumViteaComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CurriculumViteaComponent>) { }


  ngOnInit(): void {
  }

  close(): void{
    this.dialogRef.close();
  }
}
