import {Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Bien,  LikeBien, Service} from '../../objet';
import {ImgService} from '../../service/img.service';
import {LoginService} from '../../service/login.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {PersonneService} from '../../service/personne.service';
import {ReservationComponent} from '../../communications/avertissement/reservation/reservation.component';
import {MatCalendar} from '@angular/material/datepicker';

class Moment {
}

@Component({
  selector: 'app-info-bien',
  templateUrl: './info-bien.component.html',
  styleUrls: ['./info-bien.component.css']
})
export class InfoBienComponent implements OnInit {
  constructor( private serv: LoginService,
               private imagService: ImgService,
               public dialogRef: MatDialogRef<InfoBienComponent>,
               private personne: PersonneService,
               private dialog: MatDialog,
               @Inject(MAT_DIALOG_DATA) data
  ) {
    this.bien = data.bien;
  }

  @Output() infoBien: EventEmitter<any> = new EventEmitter();
  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;

  bien: Bien;
  service = this.serv;
  likes = false;
  problemCo = false;
  selected: Date | null;

  ngOnInit(): void {
  }

  siConnecte(): boolean{
    return this.service.isAuthenticated();
  }

  onClose(): void{
    this.dialogRef.close();
    this.serv.viderCache();
  }
  // tslint:disable-next-line:typedef
  iLike() {
    const myLike = new LikeBien();
    myLike.personneSimplifierDTO = this.service.client();
    myLike.bienDTO = this.bien;
    this.personne.like(myLike).subscribe(reponse => {
      this.likes = true;
    }, reponse => {
      this.problemCo = true;
    });
  }

  reservation(): void{
    if (this.service.isAuthenticated()){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = 'auto';
    dialogConfig.data = {bien: this.bien};
    this.dialog.open(ReservationComponent, dialogConfig);
  }else{
    alert('vous devez être connecter pour en voir plus');
  }
  }
}
export class DatepickerInlineCalendarExample {
  selected: Date | null;
}
