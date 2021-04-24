import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {BienService} from '../../service/bien.service';
import {VilleService} from '../../service/VilleService';
import {TypeDeBienService} from '../../service/type-de-bien.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bien, Coordonnee, TypeDeBien, Ville} from '../../objet';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LienPhotoService} from '../../service/lien-photo.service';

@Component({
  selector: 'app-creation-de-bien',
  templateUrl: './creation-de-bien.component.html',
  styleUrls: ['./creation-de-bien.component.css']
})
export class CreationDeBienComponent implements OnInit {

  constructor(
    private client: HttpClient,
    // tslint:disable-next-line:variable-name
    private lien_photo: LienPhotoService,
    private infoPersonne: LoginService,
    private bienService: BienService,
    private villeService: VilleService,
    private typeDeBienService: TypeDeBienService,
    private route: Router) { }
    private aladisposition = '';

  private error = 'Il y a eu un probleme :(';
  private ok = 'tout c\'est bien passée :)-';

  listTypeDeBien: Array<TypeDeBien> = [];
  listVille: Array<Ville> = [];

  BienForm = new FormGroup({
    type: new FormControl('defaults'),
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
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  ngOnInit(): void {
    this.voirVille();
    this.voirTypeDeBien();
  }

  // tslint:disable-next-line:typedef
  onFileSelected(event){
    this.selectedFile = (event.target.files[0] as File);
  }


  // onUpload(): void {
  //   console.log(this.selectedFile);
  //
  //   const uploadImageData = new FormData();
  //   uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  //
  //
  //   this.client.post('http://localhost:8081/image/upload', uploadImageData, { observe: 'response' })
  //     .subscribe((response) => {
  //         if (response.status === 200) {
  //           this.message = 'Image uploaded successfully';
  //         } else {
  //           this.message = 'Image not uploaded successfully';
  //         }
  //       }
  //     );
  // }

  // getImage(): void {
  //   this.client.get('http://localhost:8080/image/get/' + this.imageName)
  //     .subscribe(
  //       res => {
  //         this.retrieveResonse = res;
  //         this.base64Data = this.retrieveResonse.picByte;
  //         this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //       }
  //     );
  // }

  voirVille(): void{
    // @ts-ignore
    this.villeService.voirVille().subscribe(reponse => this.listVille = reponse.list , reponse => alert(this.error));
    // console.log(this.listVille);
  }

  voirTypeDeBien(): void{
    // @ts-ignore
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
      this.BienForm.value.eauChaude = 'eauChaude';
    }
    if (this.BienForm.value.eauFroide) {
      this.BienForm.value.eauFroide = 'eauFroide';
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

    const bien = new Bien();
    bien.id = 0;
    bien.type_bien = this.listTypeDeBien[this.BienForm.value.type];
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
    this.bienService.ajouterBien(bien).subscribe(reponse => alert(this.ok), reponse => alert(this.error));
    }
}
