import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from '../../../service/login.service';
import {BienService} from '../../../service/bien.service';
import {VilleService} from '../../../service/VilleService';
import {TypeDeBienService} from '../../../service/type-de-bien.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Aladisposition, Bien, Coordonnee, TypeDeBien, Validator, Ville} from '../../../objet';
import {ImgService} from '../../../service/img.service';
import {DureeLocationService} from '../../../service/duree-location.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PresentationBienCreeComponent} from './presentation-bien-cree/presentation-bien-cree.component';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {PersonneService} from '../../../service/personne.service';

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
    private dialog: MatDialog,
    private perService: PersonneService,
    private formBuilder: FormBuilder) { }

  @ViewChild('imgs') imgs: ElementRef;
  private error = 'Il y a eu un probleme :(';

  listTypeDeBien: Array<TypeDeBien> = [];
  listVille: Array<Ville> = [];
  logo = this.infoPersonne.logo;
  nbPage = 7;
  currentPage = 1;
  isLinear = false;

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
    coordonneeRue: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    coordonneeNum: new FormControl(null, [Validators.minLength(1), Validators.maxLength(5)]),
    coordonneeEmail: new FormControl(null, [Validators.email, Validators.pattern(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)]),
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
    spellcheck: false,
    height: 'auto',
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

   myFiles: File [] = [];
   photos: Array<string> = [];
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
        this.perService.verifIBAU(this.infoPersonne.client()).subscribe((reponses: Validator) => {
          sessionStorage.setItem(this.infoPersonne.SessionVerifValidator, JSON.stringify(reponses));
        }, () => alert('Impossible de verifier les validators'));
        if (reponselienPhoto <= 0){
          alert(this.error + 'Il y à eu un problème avec le server.. le bien n\'a pas ete enregistré!');
        }else {
          const uploadImageData = new FormData();
          // @ts-ignore
          uploadImageData.append('bien', reponselienPhoto);

          // if (this.myFiles.length === 0){
          //   // this.selectedFile = new File(this.logo.);
          //   this.myFiles.push(this.selectedFile);
          // }
          for (let i = 0; i < (this.myFiles.length); i++){
            uploadImageData.append('imageFile', this.myFiles[i], this.myFiles[i].name);
          }
          if (this.myFiles.length) {
            this.imgService.ajouterImage(uploadImageData).subscribe(() => {
              this.bienService.voirUneBien(reponselienPhoto).subscribe((monBien: Bien) => {
                this.dialogConfig.data = {bien: monBien};
                this.messageAttente = false;
                this.voirBienCre();
              }, () => alert(this.error + ' Il y à eu un problème avec le server.. Impossible de voir le bien créé !'));
            }, () => alert(this.error + 'Il y à eu un problème avec le server.. le/les images n\'ont pas été enregistré !'));
          } else {
            this.bienService.voirUneBien(reponselienPhoto).subscribe((monBien: Bien) => {
              this.dialogConfig.data = {bien: monBien};
              this.messageAttente = false;
              this.voirBienCre();
            }, () => alert(this.error + ' Il y à eu un problème avec le server.. Impossible de voir le bien créé !'));
          }
        }
      }, () => alert(this.error + 'Il y à eu un problème avec le server.. le bien n\'a pas ete enregistré!'));
    }else{
      alert(this.error + ' Un ou plusieur champs sont manquant!');
    }
  }

  onFileSelected(e): void {
    if ((this.myFiles.length) > 10){
      this.tailleimg = true;
    }else {
        if (e.target.files[0].size <= 6291456) {
          this.selectedFile = e.target.files[0];
          this.myFiles.push(this.selectedFile);

          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = (event: any) => {
            this.photos.push(event.target.result);
          };
        } else {
          this.imgValid = true;
          this.imgError = 'La photo portant le nom de "' + e.target.files[0].name + '" est trop grande !. La taille maximum autorisée ne peut dépasser 1048576/Ko, Votre photo fait : ' + e.target.files[0].size + '/Ko';
          this.errorList.push(this.imgError);
        }
    }
  }

  supprimPhoto(n: any): void{
    const index: number = this.photos.indexOf(n);
    this.myFiles.splice(index, 1);
    this.photos.splice(index, 1);
    console.log(this.myFiles.length);
    console.log(this.photos.length);
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
    this.dialog.open(PresentationBienCreeComponent, this.dialogConfig).afterClosed().subscribe(() => {
      this.resstFormControl();
    });
  }

  resstFormControl(): void{
    this.BienForm.reset();
    this.myFiles = [];
    this.photos = [];
  }
}
