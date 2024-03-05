import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BienService} from '../service/bien.service';
import {Bien, Province, TryListAllBiens, TypeDeBien, Ville} from '../objet';
import {ImgService} from '../service/img.service';
import {MatDialog} from '@angular/material/dialog';
import {LoginService} from '../service/login.service';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {VilleService} from '../service/VilleService';
import {TypeDeBienService} from '../service/type-de-bien.service';
import {ProvinceService} from '../service/ProvienceService';
import {PersonneService} from '../service/personne.service';

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
    private provinceService: ProvinceService,
    private personneService: PersonneService
  ) { }

  @ViewChild('type') type: ElementRef;
  @ViewChild('provinces') provinces: ElementRef;
  @ViewChild('villes') villes: ElementRef;
  rechercheForm = new UntypedFormGroup({
    province:  new UntypedFormControl('defaults'),
    ville: new UntypedFormControl('defaults'),
    typeBien: new UntypedFormControl('defaults')
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
  nbComte: number;

  @Output() listBien: Array<Bien> = [];
  // imgProvince: Byte[];
  // imgVille: Byte[];
  image: string;
  @Output() bien: EventEmitter<any> = new EventEmitter();
  @Input() tostring: string;
  nbPage = 0;
  currentPage = 1;
  isLoading = false;

  ngOnInit(): void {
    this.loadData();
    this.voirTypeBien();
    this.voirAllProvince();
    this.nombreCompte();
  }

  nombreCompte(): void{
    this.personneService.nbCompte().subscribe((reponse: number) => this.nbComte = reponse);
  }

  loadData(): void{
    this.isLoading = true;
    this.bienService.voirBien({
      page: this.currentPage,
      provinceId: this.rechercheForm.value.province === 'defaults' ? '' : this.listProvince[this.rechercheForm.value.province].nomprovince,
      typeId: this.rechercheForm.value.typeBien === 'defaults' ? '' : this.listTypeBien[this.rechercheForm.value.typeBien].nom,
      // tslint:disable-next-line:max-line-length
      villeId: this.rechercheForm.value.ville === 'defaults' ? '' : this.listProvince[this.rechercheForm.value.province].villes[this.rechercheForm.value.ville].nomVille
    }).subscribe((reponsee: TryListAllBiens) => {
      this.isLoading = false;
      this.listBien = reponsee.list;
      this.nbPage = Math.floor((reponsee.nbPage - 1) / 6) + 1;
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
      // this.imgProvince = this.listProvince[this.rechercheForm.value.province].img[0].picByte;
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
      // this.imgVille = this.listVille[this.rechercheForm.value.ville].img[0].picByte;
      this.textVille = this.listVille[this.rechercheForm.value.ville].description;
      this.titreVille = this.listVille[this.rechercheForm.value.ville].nomVille;
      this.ville = this.listVille[this.rechercheForm.value.ville].nomVille;
    }
  }

  resetVille(): void{
    this.rechercheForm.value.ville = 'defaults';
    // this.imgVille = null;
    this.ville = '';
    this.titreVille = '';
    this.textVille = '';
  }
  resetReserche(): void{
    this.rechercheForm.reset();
    this.rechercheForm.value.province = 'defaults';
    this.rechercheForm.value.ville = 'defaults';
    this.rechercheForm.value.typeBien = 'defaults';
    this.type.nativeElement.value = 'defaults';
    this.provinces.nativeElement.value = 'defaults';
    // tslint:disable-next-line:triple-equals
    if (this.rechercheForm.value.ville != 'defaults'){
      this.villes.nativeElement.value = 'defaults';
    }
    // this.imgVille = null;
    // this.imgProvince = null;
    this.ville = '';
    this.province = '';
    this.typeBien = '';
    this.titreVille = '';
    this.textVille = '';
    this.titreProvince = '';
    this.textProvince = '';
    this.loadData();
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
