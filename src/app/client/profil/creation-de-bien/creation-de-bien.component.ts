import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../service/login.service';
import {BienService} from '../../../service/bien.service';
import {VilleService} from '../../../service/VilleService';
import {TypeDeBienService} from '../../../service/type-de-bien.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Aladisposition, Bien, Coordonnee, DureeLocation, TypeDeBien, Ville} from '../../../objet';
import {ImgService} from '../../../service/img.service';
import {DureeLocationService} from '../../../service/duree-location.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {InfoBienComponent} from '../../../all-bien/info-bien/info-bien.component';
import {VoirBienComponent} from '../voir-bien/voir-bien.component';
import {OneBienComponent} from '../../../one-bien/one-bien.component';
import {PresentationBienCreeComponent} from './presentation-bien-cree/presentation-bien-cree.component';

@Component({
  selector: 'app-creation-de-bien',
  templateUrl: './creation-de-bien.component.html',
  styleUrls: ['./creation-de-bien.component.css']
})
export class CreationDeBienComponent implements OnInit {

  constructor(
    private infoPersonne: LoginService,
    private dureeLocationServive: DureeLocationService,
    private bienService: BienService,
    private villeService: VilleService,
    private typeDeBienService: TypeDeBienService,
    private imgService: ImgService,
    private dialog: MatDialog) { }

  private error = 'Il y a eu un probleme :(';
  private ok = 'tout c\'est bien passée :)-';
  imgFile: string;

  listTypeDeBien: Array<TypeDeBien> = [];
  listVille: Array<Ville> = [];
  listDureeLocation: Array<DureeLocation> = [];

  BienForm = new FormGroup({
    type: new FormControl('defaults'),
    dureeLocation: new FormControl('defaults'),
    coordonneeVille: new FormControl('defaults'),
    prix: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(999999)]),
    npmin: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)]),
    npmax: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10000)]),
    nchambre: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(20)]),
    nsdb: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(20)]),
    nwc: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(20)]),
    superficie: new FormControl(null, [Validators.required, Validators.min(2), Validators.max(10000)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(50), Validators.maxLength(1000)]),
    lien_photo: new FormControl(),
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
  imgError = '';
  imgValid = false;
  errorList: Array<string> = [];
  imgNull = 'Vous ne pouvez pas créer un bien sans lui ajouter au moin une photo';
  boolImgNull = false;
  formCreationEnvoyeBool = true;

  ngOnInit(): void {
    this.voirVille();
    this.voirTypeDeBien();
    this.voirdureeLocation();
  }

  onFileSelected(event): void {
    if ((event.target.files.length) > 10){
      this.tailleimg = true;
    }else{
      for (let i = 0; i < (event.target.files.length); i++) {
        if (event.target.files[i].size <= 1048576){
          this.selectedFile = event.target.files[i];
          // @ts-ignore
          this.myFiles.push(this.selectedFile);
        }else{
          this.imgValid = true;
          this.imgError = 'La photo n°' + (i + 1) + ' portant le nom de "' + event.target.files[i].name + '" est trop grande !. La taille maximum autorisée ne peut dépasser 1048576/Ko, Votre photo fait : ' + event.target.files[i].size + '/Ko';
          this.errorList.push(this.imgError);
        }
      }
    }
  }

  voirVille(): void{
    // @ts-ignore
    this.villeService.voirVille().subscribe(reponse => this.listVille = reponse.list , reponse => alert(this.error));
    // console.log(this.listVille);
  }

  voirTypeDeBien(): void{
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    this.typeDeBienService.voirTypeDeBien().subscribe(reponse => this.listTypeDeBien = reponse.list, reponse => alert(this.error));
  }

  voirdureeLocation(): void{
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    this.dureeLocationServive.voirDureeLocation().subscribe(reponse => this.listDureeLocation = reponse.list, reponse => alert(this.error));
  }

  ajouterBien(): void{

    if (this.infoPersonne.isProprietaireRoll()){

      const coordonnee = new Coordonnee();
      coordonnee.id = 0;
      coordonnee.ville = this.listVille[this.BienForm.value.coordonneeVille];
      coordonnee.cpostal = this.BienForm.value.coordonneeCPostal;
      coordonnee.rue = this.BienForm.value.coordonneeRue;
      coordonnee.num = this.BienForm.value.coordonneeNum;
      coordonnee.email = this.BienForm.value.coordonneeEmail;
      coordonnee.telephone = this.BienForm.value.coordonneeTelephone;

      const aladispo = new Aladisposition();
      aladispo.id = 0;
      aladispo.securite = this.BienForm.value.securite;
      aladispo.wifi = this.BienForm.value.wifi;
      aladispo.television = this.BienForm.value.television;
      aladispo.vesselle = this.BienForm.value.vesselle;
      aladispo.literie = this.BienForm.value.literie;
      aladispo.lingeMaison = this.BienForm.value.lingeMaison;
      aladispo.eauChaude = this.BienForm.value.eauChaude;
      aladispo.eauFroide = this.BienForm.value.eauFroide;
      aladispo.eauPotable = this.BienForm.value.eauPotable;
      aladispo.jardin = this.BienForm.value.jardin;
      aladispo.cour = this.BienForm.value.cour;
      aladispo.terrasse = this.BienForm.value.terrasse;
      aladispo.piscinePrive = this.BienForm.value.piscinePrive;
      aladispo.piscineCommune = this.BienForm.value.piscineCommune;
      aladispo.voiture = this.BienForm.value.vehicule;
      aladispo.moto = this.BienForm.value.moto;
      aladispo.velo = this.BienForm.value.velo;
      aladispo.animaux = this.BienForm.value.animaux;

      const bien = new Bien();
      bien.id = 0;
      bien.type_bien = this.listTypeDeBien[this.BienForm.value.type];
      bien.aladisposition = aladispo;
      bien.prix = this.BienForm.value.prix;
      bien.npmin = this.BienForm.value.npmin;
      bien.npmax = this.BienForm.value.npmax;
      bien.nchambre = this.BienForm.value.nchambre;
      bien.nsdb = this.BienForm.value.nsdb;
      bien.nwc = this.BienForm.value.nwc;
      bien.superficie = this.BienForm.value.superficie;
      bien.description = this.BienForm.value.description;
      bien.coordonnee = coordonnee;
      bien.appartient = this.infoPersonne.client();

      this.bienService.ajouterBien(bien).subscribe((reponselienPhoto: number) => {
        console.log(reponselienPhoto);
        if (reponselienPhoto <= 0){
          alert(this.error + 'on est ici 1');
        }else{
          const uploadImageData = new FormData();
          // @ts-ignore
          uploadImageData.append('bien', reponselienPhoto);
          for (let i = 0; i < (this.myFiles.length); i++){

            uploadImageData.append('imageFile', this.myFiles[i], this.myFiles[i].name);
          }
          this.imgService.ajouterImage(uploadImageData).subscribe(reponse => {
            this.bienService.voirUneBien(reponselienPhoto).subscribe((monBien: Bien) => {
              // console.log(monBien);
              this.infoPersonne.biendb(monBien);
              this.resstFormControl();
              this.voirBienCre();
            }, monBien => alert('error'));
          }, reponse => alert(this.error));
        }
      }, reponselienPhoto => alert(this.error));
    }else{
      alert(this.error + ' on est ici 3');
    }
  }

  voirBienCre(): void{
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = 'auto';
      dialogConfig.height = 'auto';
      this.dialog.open(PresentationBienCreeComponent, dialogConfig);
  }

  resstFormControl(): void{
    this.BienForm.reset();
    this.myFiles = [];
  }
}
