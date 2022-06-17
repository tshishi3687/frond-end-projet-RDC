import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from '../../../service/login.service';
import {BienService} from '../../../service/bien.service';
import {VilleService} from '../../../service/VilleService';
import {TypeDeBienService} from '../../../service/type-de-bien.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Aladisposition, Bien, Coordonnee, TypeDeBien, Ville} from '../../../objet';
import {ImgService} from '../../../service/img.service';
import {DureeLocationService} from '../../../service/duree-location.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PresentationBienCreeComponent} from './presentation-bien-cree/presentation-bien-cree.component';
import {AngularEditorConfig} from '@kolkov/angular-editor';

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

  @ViewChild('imgs') imgs: ElementRef;
  private error = 'Il y a eu un probleme :(';

  listTypeDeBien: Array<TypeDeBien> = [];
  listVille: Array<Ville> = [];
  logo = this.infoPersonne.logo;
  logo0 = this.infoPersonne.logo;
  logo1 = this.infoPersonne.logo;
  logo2 = this.infoPersonne.logo;
  logo3 = this.infoPersonne.logo;
  logo4 = this.infoPersonne.logo;
  logo5 = this.infoPersonne.logo;
  logo6 = this.infoPersonne.logo;
  logo7 = this.infoPersonne.logo;
  logo8 = this.infoPersonne.logo;
  logo9 = this.infoPersonne.logo;
  logo10 = this.infoPersonne.logo;
  nbPage = 7;
  currentPage = 1;

  BienForm = new FormGroup({
    type: new FormControl('defaults'),
    dureeLocation: new FormControl('defaults'),
    coordonneeVille: new FormControl('defaults'),
    prix: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(999999)]),
    npmin: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)]),
    npmax: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(500000)]),
    nchambre: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(20)]),
    nsdb: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(20)]),
    nwc: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(20)]),
    superficie: new FormControl(null, [Validators.required, Validators.min(2), Validators.max(900000)]),
    description: new FormControl('', [Validators.required, Validators.minLength(50), Validators.maxLength(3000)]),
    lien_photo: new FormControl(),
    coordonneeCPostal: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10)]),
    coordonneeRue: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    coordonneeNum: new FormControl(null, [Validators.min(1), Validators.max(10000)]),
    coordonneeEmail: new FormControl(null, [Validators.email]),
    coordonneeTelephone: new FormControl(null, Validators.pattern(/^[\+]?[(]?[0-9]{3,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)),
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

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Veuillez être le plus complet possible:....',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'Quote',
        class: 'quoteClass',
      },
      {
        name: 'Title Heading',
        class: 'titleHead',
        tag: 'h1',
      },
    ],
  };

  private myFiles: File [] = [];
  private selectedFile: File;

  dialogConfig = new MatDialogConfig();
  message: string;
  tailleimg = false;
  imgError = '';
  imgValid = false;
  errorList: Array<string> = [];
  imgNull = 'Vous ne pouvez pas créer un bien sans lui ajouter au moin une photo';
  boolImgNull = false;
  formCreationEnvoyeBool = true;
  messageAttente: boolean;

  ngOnInit(): void {
    this.voirVille();
    this.voirTypeDeBien();
  }

  verifville(): boolean{
    return this.BienForm.value.coordonneeVille !== 'defaults';
  }

  verifIMG(): boolean{
    return this.myFiles.length >= 1;
  }
  verifTypeBien(): boolean{
    return this.BienForm.value.type !== 'defaults';
  }

  ajouterBien(): void{

    if (this.infoPersonne.isAuthenticated() && !this.messageAttente && this.verifville() && this.verifTypeBien()){
      this.messageAttente = true;
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
        console.log('c\'est l\'id de mon bien ' + reponselienPhoto);
        if (reponselienPhoto <= 0){
          alert(this.error + 'Il y à eu un problème avec le server.. le bien n\'a pas ete enregistré!');
        }else{
          const uploadImageData = new FormData();
          // @ts-ignore
          uploadImageData.append('bien', reponselienPhoto);

          for (let i = 0; i < (this.myFiles.length); i++){
            console.log(this.myFiles);
            uploadImageData.append('imageFile', this.myFiles[i], this.myFiles[i].name);
          }
          this.imgService.ajouterImage(uploadImageData).subscribe(() => {
            this.bienService.voirUneBien(reponselienPhoto).subscribe((monBien: Bien) => {
              this.dialogConfig.data = {bien: monBien};
              this.messageAttente = false;
              this.resstFormControl();
              this.voirBienCre();
            }, () => alert(this.error + ' Il y à eu un problème avec le server.. Impossible de voir le bien créé !'));
          }, () => alert(this.error + 'Il y à eu un problème avec le server.. le/les images n\'ont pas été enregistré !'));
        }
      }, () => alert(this.error + 'Il y à eu un problème avec le server.. le bien n\'a pas ete enregistré!'));
    }else{
      alert(this.error + ' Un ou plusieur champs sont manquant!');
    }
  }

  onFileSelected(e): void {
    if ((e.target.files.length) > 10){
      this.tailleimg = true;
    }else {
      for (let i = 0; i < (e.target.files.length); i++) {
        if (e.target.files[i].size <= 6291456) {
          this.selectedFile = e.target.files[i];
          this.myFiles.push(this.selectedFile);

          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[i]);
          reader.onload = (event: any) => {
            switch (this.myFiles.length){
              case 1:
                this.logo0 = event.target.result;
                this.logo1 = event.target.result;
                break;
              case 2:
                this.logo2 = event.target.result;
                break;
              case 3:
                this.logo3 = event.target.result;
                break;
              case 4:
                this.logo4 = event.target.result;
                break;
              case 5:
                this.logo5 = event.target.result;
                break;
              case 6:
                this.logo6 = event.target.result;
                break;
              case 7:
                this.logo7 = event.target.result;
                break;
              case 8:
                this.logo8 = event.target.result;
                break;
              case 9:
                this.logo9 = event.target.result;
                break;
              case 10:
                this.logo10 = event.target.result;
                break;
            }
          };
        } else {
          this.imgValid = true;
          this.imgError = 'La photo portant le nom de "' + e.target.files[i].name + '" est trop grande !. La taille maximum autorisée ne peut dépasser 1048576/Ko, Votre photo fait : ' + e.target.files[i].size + '/Ko';
          this.errorList.push(this.imgError);
        }
      }
    }
  }

  voirVille(): void{
    this.villeService.voirVille().subscribe(reponse => this.listVille = reponse , reponse => alert(this.error + '\n' + reponse));

  }

  voirTypeDeBien(): void{
    // tslint:disable-next-line:max-line-length
    this.typeDeBienService.voirTypeDeBien().subscribe(reponse => this.listTypeDeBien = reponse, reponse => alert(this.error + '\n' + reponse));
  }

  voirBienCre(): void{
    this.messageAttente = false;
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.width = 'auto';
    this.dialogConfig.height = 'auto';
    this.dialog.open(PresentationBienCreeComponent, this.dialogConfig);
  }

  resstFormControl(): void{
    this.BienForm.reset();
    this.myFiles = [];
    this.imgs.nativeElement.value = null;
  }

  prev(): void {
    this.currentPage--;
  }

  next(): void {
    this.currentPage++;
  }

  change(v): void {
    this.currentPage = v;
  }
}
