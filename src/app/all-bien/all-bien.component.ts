import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BienService} from '../service/bien.service';
import {Bien, Province, TryListAllBiens, TypeDeBien, Ville} from '../objet';
import {ImgService} from '../service/img.service';
import {MatDialog} from '@angular/material/dialog';
import {LoginService} from '../service/login.service';
import {FormControl, FormGroup} from '@angular/forms';
import {VilleService} from '../service/VilleService';
import {TypeDeBienService} from '../service/type-de-bien.service';
import {ProvinceService} from '../service/ProvienceService';
import {Byte} from '@angular/compiler/src/util';

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
  titreProvince = '';
  titreVille = '';
  textProvince = '';
  textVille = '';
  listVille: Array<Ville> = [];
  listProvince: Array<Province> = [];
  listTypeBien: Array<TypeDeBien> = [];

  @Output() listBien: Array<Bien> = [];
  imgProvince: Byte[];
  imgVille: Byte[];
  image: string;
  @Output() bien: EventEmitter<any> = new EventEmitter();
  @Input() tostring: string;
  tryList: TryListAllBiens;
  nbPage = 0;
  currentPage = 1;
  isLoading = false;

  ngOnInit(): void {
    this.voirToutBien();
    this.voirTypeBien();
    this.voirAllProvince();
  }

  voirToutBien(): void{
    this.bienService.countBiens().subscribe((reponse: number) => {
      this.nbPage = Math.floor((reponse - 1) / 6) + 1;
      this.loadData();
    }, () => alert('il y a un probleme'));
  }
  loadData(): void{
    // tslint:disable-next-line:max-line-length
    this.isLoading = true;
    // tslint:disable-next-line:max-line-length
    this.bienService.voirBien({
      page: this.currentPage,
      provinceId: this.rechercheForm.value.province === 'defaults' ? 0 : this.listProvince[this.rechercheForm.value.province].id,
      typeId: this.rechercheForm.value.typeBien === 'defaults' ? 0 : this.listTypeBien[this.rechercheForm.value.typeBien].id,
      // tslint:disable-next-line:max-line-length
      villeId: this.rechercheForm.value.ville === 'defaults' ? 0 : this.listProvince[this.rechercheForm.value.province].villes[this.rechercheForm.value.ville].id
    }).subscribe((reponsee: Array<Bien>) => {
      this.isLoading = false; this.listBien = reponsee;

      }, () => alert('il y a un probleme'));
  }
  voirAllProvince(): void{
    this.provinceService.voirProvince().subscribe(reponse => this.listProvince = reponse, () => alert('il y a eu un probleme avec la liste des provinve'));
  }

  voirTypeBien(): void{
    this.typeDBien.voirTypeDeBien().subscribe((reponse: Array<TypeDeBien>) => this.listTypeBien = reponse, () => alert('il y a eu un probleme avec la liste des type de bien'));
  }


  enventTB(): void{
    if (this.rechercheForm.value.typeBien === 'defaults'){
      this.typeBien = '';
    }else{
      this.typeBien = this.listTypeBien[this.rechercheForm.value.typeBien].nom;
    }
  }

  enventProvince(): void{
    if (this.rechercheForm.value.province === 'defaults'){
      this.province = '';
    }else{
      this.resetVille();
      this.imgProvince = this.listProvince[this.rechercheForm.value.province].img[0].picByte;
      this.textProvince = this.listProvince[this.rechercheForm.value.province].description;
      this.titreProvince = this.listProvince[this.rechercheForm.value.province].nomprovince;
      this.province = this.listProvince[this.rechercheForm.value.province].nomprovince;
      this.listVille = this.listProvince[this.rechercheForm.value.province].villes;
    }
  }

  enventVille(): void{
    if (this.rechercheForm.value.ville === 'defaults'){
      this.ville = '';
    }else{
      this.imgVille = this.listVille[this.rechercheForm.value.ville].img[0].picByte;
      this.textVille = this.listVille[this.rechercheForm.value.ville].description;
      this.titreVille = this.listVille[this.rechercheForm.value.ville].nomVille;
      this.ville = this.listVille[this.rechercheForm.value.ville].nomVille;
    }
  }

  resetVille(): void{
    this.rechercheForm.value.ville = 'defaults';
    this.imgVille = null;
    this.ville = '';
    this.titreVille = '';
    this.textVille = '';
  }
  resetReserche(): void{
    this.rechercheForm.reset();
    this.rechercheForm.value.province = 'defaults';
    this.rechercheForm.value.ville = 'defaults';
    this.rechercheForm.value.typeBien = 'defaults';
    this.imgVille = null;
    this.imgProvince = null;
    this.ville = '';
    this.province = '';
    this.typeBien = '';
    this.titreVille = '';
    this.textVille = '';
    this.titreProvince = '';
    this.textProvince = '';
  }

  prev(): void {
    this.currentPage--;
    this.loadData();
  }

  next(): void {
    this.currentPage++;
    this.loadData();
  }

  change(v): void {
    this.currentPage = v;
    this.loadData();
  }
}
