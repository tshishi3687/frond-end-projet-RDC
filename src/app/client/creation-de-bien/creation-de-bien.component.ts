import {Component, getPlatform, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {BienService} from '../../service/bien.service';
import {VilleService} from '../../service/VilleService';
import {TypeDeBienService} from '../../service/type-de-bien.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bien, Coordonnee, DureeLocation, ImageBien, TypeDeBien, Ville} from '../../objet';
import {Router} from '@angular/router';
import {LienPhotoService} from '../../service/lien-photo.service';
import {ImgService} from '../../service/img.service';
import {DureeLocationService} from '../../service/duree-location.service';

@Component({
  selector: 'app-creation-de-bien',
  templateUrl: './creation-de-bien.component.html',
  styleUrls: ['./creation-de-bien.component.css']
})
export class CreationDeBienComponent implements OnInit {
  imgFile: string;
  private idBien: number;
  constructor(
    private infoPersonne: LoginService,
    private dureeLocationServive: DureeLocationService,
    private bienService: BienService,
    private villeService: VilleService,
    private typeDeBienService: TypeDeBienService,
    private imgService: ImgService,
    private route: Router) { }
    private aladisposition = '';

  private error = 'Il y a eu un probleme :(';
  private ok = 'tout c\'est bien passée :)-';

  listTypeDeBien: Array<TypeDeBien> = [];
  listVille: Array<Ville> = [];
  listdureeLocation: Array<DureeLocation> = [];

  BienForm = new FormGroup({
    type: new FormControl('defaults'),
    dureeLocation: new FormControl('defaults'),
    prix: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(999999)]),
    npmin: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)]),
    npmax: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)]),
    nchambre: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(20)]),
    nsdb: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(20)]),
    nwc: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(20)]),
    superficie: new FormControl(null, [Validators.required, Validators.min(2), Validators.max(300)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(50), Validators.maxLength(450)]),
    lien_photo: new FormControl(),
    coordonneeVille: new FormControl('defaults', [Validators.required]),
    coordonneeCPostal: new FormControl(null, [Validators.min(100), Validators.max(100000)]),
    coordonneeRue: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    coordonneeNum: new FormControl(null, [Validators.min(1), Validators.max(10000)]),
    coordonneeEmail: new FormControl(null, [Validators.email, Validators.maxLength(100)]),
    coordonneeTelephone: new FormControl(null, [Validators.min(100000)]),
    securite: new FormControl(),
    wifi: new FormControl(),
    television: new FormControl(),
    vesselle: new FormControl(),
    literie: new FormControl(),
    lingeMaison: new FormControl(),
    eauChaude: new FormControl(),
    eauFroide: new FormControl(),
    eauPotable: new FormControl(),
    jardin: new FormControl(),
    cour: new FormControl(),
    terrasse: new FormControl(),
    piscinePrive: new FormControl(),
    piscineCommune: new FormControl(),
    vehicule: new FormControl(),
    moto: new FormControl(),
    velo: new FormControl(),
    animaux: new FormControl()
  });
  // tslint:disable-next-line:ban-types
  private myFiles: File [] = [];
  private selectedFile: File;
  message: string;
  imageName: any;
  tailleimg = false;
  superid: number;

  ngOnInit(): void {
    this.voirVille();
    this.voirTypeDeBien();
    this.voirdureeLocation();
    console.log(this.listdureeLocation);
  }

  onFileSelected(event): void {
    if ((event.target.files.length) > 10){
      this.tailleimg = true;
    }else{
      for (let i = 0; i < (event.target.files.length); i++) {
        this.selectedFile = event.target.files[i];
        // @ts-ignore
        this.myFiles.push(this.selectedFile);
      }
    }
  }

  voirVille(): void{
    // @ts-ignore
    this.villeService.voirVille().subscribe(reponse => this.listVille = reponse.list , reponse => alert(this.error));
    // console.log(this.listVille);
  }

  voirdureeLocation(): void{
    // tslint:disable-next-line:max-line-length
    this.dureeLocationServive.voirDureeLocation().subscribe(reponse => this.listdureeLocation = reponse.list, reponse => alert(this.error));
  }


  voirTypeDeBien(): void{
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    this.typeDeBienService.voirTypeDeBien().subscribe(reponse => this.listTypeDeBien = reponse.list, reponse => alert(this.error));
  }

  ajouterBien(): void{

    const coordonnee = new Coordonnee();
    coordonnee.id = 0;
    coordonnee.ville = this.listVille[this.BienForm.value.coordonneeVille];
    coordonnee.cpostal = this.BienForm.value.coordonneeCPostal;
    coordonnee.rue = this.BienForm.value.coordonneeRue;
    coordonnee.num = this.BienForm.value.coordonneeNum;
    coordonnee.email = this.BienForm.value.coordonneeEmail;
    coordonnee.telephone = this.BienForm.value.coordonneeTelephone;

    if (this.BienForm.value.securite) {
      this.BienForm.value.securite = 'securite';
    }
    if (this.BienForm.value.wifi) {
      this.BienForm.value.wifi = 'wifi';
    }
    if (this.BienForm.value.television) {
      this.BienForm.value.television = 'television';
    }
    if (this.BienForm.value.vesselle) {
      this.BienForm.value.vesselle = 'vesselle';
    }
    if (this.BienForm.value.literie) {
      this.BienForm.value.literie = 'literie';
    }
    if (this.BienForm.value.lingeMaison) {
      this.BienForm.value.lingeMaison = 'lingeMaison';
    }
    if (this.BienForm.value.eauChaude) {
      this.BienForm.value.eauChaude = 'eau Chaude';
    }
    if (this.BienForm.value.eauFroide) {
      this.BienForm.value.eauFroide = 'eau Froide';
    }
    if (this.BienForm.value.eauPotable) {
      this.BienForm.value.eauPotable = 'eauPotable';
    }
    if (this.BienForm.value.jardin) {
      this.BienForm.value.jardin = 'jardin';
    }
    if (this.BienForm.value.cour) {
      this.BienForm.value.cour = 'cour';
    }
    if (this.BienForm.value.terrasse) {
      this.BienForm.value.terrasse = 'terrasse';
    }
    if (this.BienForm.value.piscinePrive) {
      this.BienForm.value.piscinePrive = 'piscinePrive';
    }
    if (this.BienForm.value.piscineCommune) {
      this.BienForm.value.piscineCommune = 'piscineCommune';
    }
    if (this.BienForm.value.vehicule) {
      this.BienForm.value.vehicule = 'vehicule';
    }
    if (this.BienForm.value.animaux) {
      this.BienForm.value.animaux = 'animaux';
    }

    this.aladisposition = '' +
      this.BienForm.value.securite + '' +
      this.BienForm.value.wifi + '' +
      this.BienForm.value.television + '' +
      this.BienForm.value.vesselle + '' +
      this.BienForm.value.literie + '' +
      this.BienForm.value.lingeMaison + '' +
      this.BienForm.value.eauChaude + '' +
      this.BienForm.value.eauFroide + '' +
      this.BienForm.value.eauPotable + '' +
      this.BienForm.value.jardin + '' +
      this.BienForm.value.cour + '' +
      this.BienForm.value.terrasse + '' +
      this.BienForm.value.piscinePrive + '' +
      this.BienForm.value.piscineCommune + '' +
      this.BienForm.value.vehicule + '' +
      this.BienForm.value.animaux;

    const img = this.BienForm.value.file;

    const bien = new Bien();
    bien.id = 0;
    bien.type_bien = this.listTypeDeBien[this.BienForm.value.type];
    bien.dureeLocation = this.listdureeLocation[this.BienForm.value.dureeLocation];
    bien.prix = this.BienForm.value.prix;
    bien.npmin = this.BienForm.value.npmin;
    bien.npmax = this.BienForm.value.npmax;
    bien.nchambre = this.BienForm.value.nchambre;
    bien.nsdb = this.BienForm.value.nsdb;
    bien.nwc = this.BienForm.value.nwc;
    bien.superficie = this.BienForm.value.superficie;
    bien.aladisposition = this.aladisposition;
    bien.description = this.BienForm.value.description;
    bien.coordonnee = coordonnee;
    bien.appartient = this.infoPersonne.client();

    console.log(bien);
    // tslint:disable-next-line:max-line-length
    this.bienService.ajouterBien(bien).subscribe((reponselienPhoto: number) => {

      console.log(this.superid);
      const uploadImageData = new FormData();
      // @ts-ignore
      uploadImageData.append('bien', reponselienPhoto);
      for (let i = 0; i < (this.myFiles.length); i++){
        // @ts-ignore
        // tslint:disable-next-line:max-line-length
        uploadImageData.append('imageFile', this.myFiles[i], this.myFiles[i].name);
      }
      this.imgService.ajouterImage(uploadImageData).subscribe(reponse => alert(this.ok), reponse => alert(this.error));
    }, reponselienPhoto => alert(this.error));
  }
}
