import {Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {Bien,  LikeBien} from '../../objet';
import {ImgService} from '../../service/img.service';
import {LoginService} from '../../service/login.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {PersonneService} from '../../service/personne.service';
import {ReservationComponent} from '../../communications/avertissement/reservation/reservation.component';
import {MatCalendar} from '@angular/material/datepicker';
import {BienService} from '../../service/bien.service';

class Moment {
}

@Component({
  selector: 'app-info-bien',
  templateUrl: './info-bien.component.html',
  styleUrls: ['./info-bien.component.css']
})
export class InfoBienComponent implements OnInit {
  constructor( private serv: LoginService,
               private bienService: BienService,
               private imagService: ImgService,
               public dialogRef: MatDialogRef<InfoBienComponent>,
               private personne: PersonneService,
               private dialog: MatDialog,
               @Inject(MAT_DIALOG_DATA) data
  ) {
    this.rechercheBien(data.idBien);
  }

  @Output() infoBien: EventEmitter<any> = new EventEmitter();
  @ViewChild('calendar') calendar: MatCalendar<Moment>;

  bien: Bien;
  service = this.serv;
  likes = false;
  problemCo = false;
  selected: Date | null;

  ngOnInit(): void {
  }

  rechercheBien(idBien: number): void{
    this.bienService.infoBien(idBien).subscribe((reponse: Bien) => this.bien = reponse, () => alert('Il y a eu un problème lor de la récupération des finformation'));
  }

  onClose(): void{
    this.dialogRef.close();
    this.serv.viderCache();
  }

  iLike(): void{
    const myLike = new LikeBien();
    myLike.personneSimplifierDTO = this.service.client();
    myLike.bienDTO = this.bien;
    this.personne.like(myLike).subscribe(() => {
      this.likes = true;
    }, () => {
      this.problemCo = true;
    });
  }

  reservation(): void{
    if (this.service.isAuthenticated()){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '100%';
    dialogConfig.data = {bien: this.bien};
    this.dialog.open(ReservationComponent, dialogConfig).afterClosed().subscribe(() => {
      alert('Votre réservation a bien été enregistrée.\nPour connaitre les détaile, rendez vous sur "contrat réservation" ou consulté votre boite E-mail.');
      this.onClose();
    });
  }else{
    alert('vous devez être connecter pour en voir plus');
  }
  }
}
