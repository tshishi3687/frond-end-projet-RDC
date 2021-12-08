import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BienService} from '../service/bien.service';
import {Bien, Province, TypeDeBien, Ville} from '../objet';
import {ImgService} from '../service/img.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {InfoBienComponent} from './info-bien/info-bien.component';
import {LoginService} from '../service/login.service';
import {FormControl, FormGroup} from '@angular/forms';
import {VilleService} from '../service/VilleService';
import {TypeDeBienService} from '../service/type-de-bien.service';
import {ProvinceService} from '../service/ProvienceService';

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
    private dialog: MatDialog,
    private villeService: VilleService,
    private typeDBien: TypeDeBienService,
    private provinceService: ProvinceService
  ) { }

  rechercheForm = new FormGroup({
    province:  new FormControl('defaults'),
    ville: new FormControl('defaults'),
    typeBien: new FormControl('defaults')
  });

  service = this.ser;
  ville = '';
  typeBien = '';
  province = '';
  listVille: Array<Ville> = [];
  listProvince: Array<Province> = [];
  listTypeBien: Array<TypeDeBien> = [];

  @Output() listBien: Array<Bien> = [];
  image: string;
  allfaut = false;
  @Output() bien: EventEmitter<any> = new EventEmitter();
  @Input() tostring: string;

  ngOnInit(): void {
    this.voirAllProvince();
    this.voirToutBien();
    this.voirVilleProvince();
    this.voirTypeBien();
  }

  voirToutBien(): void{
    // @ts-ignore
    this.bienService.voirBien().subscribe(reponse => this.listBien = reponse.list, reponse => alert('il y a un probleme'));
  }

  informationbient(b: Bien): void{
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

  voirVilleProvince(): void{
    // @ts-ignore
    this.villeService.voirVille().subscribe((reponse: Array<Ville>) => {
      // @ts-ignore
      this.listVille = reponse.list;
    } , reponse => alert('il y a eu un probleme avec le telechargement ville'));
    // console.log(this.listVille);
  }

  voirAllProvince(): void{
    this.provinceService.voirProvince().subscribe((reponse: Array<Province>) => {
      // @ts-ignore
      this.listProvince = reponse.list;
    }, reponse => alert('il y a eu un probleme avec la liste des provinve'));
  }

  voirTypeBien(): void{
    this.typeDBien.voirTypeDeBien().subscribe((reponse: Array<TypeDeBien>) => {
      // @ts-ignore
      this.listTypeBien = reponse.list;
    });
  }

  enventTB(): void{
    if (this.rechercheForm.value.typeBien === 'defaults'){
      this.typeBien = '';
    }else{
      // @ts-ignore
      this.typeBien = this.listTypeBien[this.rechercheForm.value.typeBien].nom;
    }
  }

  enventProvince(): void{
    if (this.rechercheForm.value.province === 'defaults'){
      this.province = '';
    }else{
      // @ts-ignore
      this.province = this.listProvince[this.rechercheForm.value.province].nomprovince;
    }
  }

  enventVille(): void{
    if (this.rechercheForm.value.ville === 'defaults'){
      this.ville = '';
    }else{
      // @ts-ignore
      this.ville = this.listVille[this.rechercheForm.value.ville].nomVille;
    }
  }

  resetReserche(): void{
    this.rechercheForm.reset();
    this.ville = '';
    this.province = '';
    this.typeBien = '';
  }
}
