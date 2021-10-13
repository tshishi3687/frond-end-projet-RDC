import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BienService} from '../service/bien.service';
import {Bien} from '../objet';
import {ImgService} from '../service/img.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {InfoBienComponent} from './info-bien/info-bien.component';
import {LoginService} from '../service/login.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-all-bien',
  templateUrl: './all-bien.component.html',
  styleUrls: ['./all-bien.component.css']
})
export class AllBienComponent implements OnInit {

  constructor(
    private ser: LoginService,
    private bienService: BienService,
    private imagService: ImgService,
    private dialog: MatDialog
  ) { }

  allProvince = new FormGroup({

    nomProvince:  new FormControl()
  });
  service = this.ser;
  ville = '';
  typeBien = '';
  province = '';

  @Output() listBien: Array<Bien> = [];
  image: string;
  allfaut = false;
  @Output() bien: EventEmitter<any> = new EventEmitter();
  @Input() tostring: string;

  ngOnInit(): void {
    this.voirToutBien();
  }

  nomPro(nomPro: string): void{
    this.province = nomPro;
    console.log(this.province);
  }

  voirToutBien(): void{
    // @ts-ignore
    this.bienService.voirBien().subscribe(reponse => this.listBien = reponse.list, reponse => alert('il y a un probleme'));
  }

  // tslint:disable-next-line:typedef
  informationbient(b: Bien){
    if (this.service.isAuthenticated()){
      this.service.biendb(b);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '100%';
      dialogConfig.height = '100%';
      this.dialog.open(InfoBienComponent, dialogConfig);
    }else{
      alert('vous devez être connecter pour en voir plus');
    }

  }

  envoyerBien(bien: Bien): void{
    this.bien.emit(bien);
  }

  startInfo(event): void{
    console.log(event);
  }
}
