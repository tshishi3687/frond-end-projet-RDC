import {Component, Input, OnInit} from '@angular/core';
import {Bien, Personne, TypeDeBien} from '../../../objet';
import {LoginService} from '../../../service/login.service';
import {BienService} from '../../../service/bien.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {InfoBienComponent} from '../../../all-bien/info-bien/info-bien.component';
import {SuppressionBienComponent} from '../../../communications/danger/suppression-bien/suppression-bien.component';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {TypeDeBienService} from '../../../service/type-de-bien.service';
import {MettreBienEnLigneComponent} from '../../../communications/avertissement/mettre-bien-en-ligne/mettre-bien-en-ligne.component';

@Component({
  selector: 'app-voir-bien',
  templateUrl: './voir-bien.component.html',
  styleUrls: ['./voir-bien.component.css']
})
export class VoirBienComponent implements OnInit {

  constructor(
    private infoPersonne: LoginService,
    private bienService: BienService,
    private dialog: MatDialog,
    private typeDBien: TypeDeBienService
  ) { }


  rechercheForm = new UntypedFormGroup({
    typeBien: new UntypedFormControl('defaults')
  });

  @Input() biensup: boolean;
  startingString = '';
  service = this.infoPersonne;
  private error = 'Il y a eu un probleme :(';
  listBien: Array<Bien> = [];
  listTypeBien: Array<TypeDeBien> = [];
  typeBien = '';

  ngOnInit(): void {
    this.voirBienPersonne();
    this.voirTypeBien();
  }

  voirTypeBien(): void{
    this.typeDBien.voirTypeDeBien().subscribe((reponse: Array<TypeDeBien>) => {
      // @ts-ignore
      this.listTypeBien = reponse.list;
    });
  }

  resetReserche(): void{
    this.rechercheForm.reset();
    this.typeBien = '';
  }

  redirection(): void{
    if (this.biensup === true){
      this.voirBienPersonne();
    }
  }

  voirBienPersonne(): void{
    const maPersonne = new Personne();
    maPersonne.id = this.infoPersonne.client().id;
    maPersonne.nom = this.infoPersonne.client().nom;
    maPersonne.prenom = this.infoPersonne.client().prenom;
    // tslint:disable-next-line:max-line-length
    this.bienService.voirBienPersonne(maPersonne).subscribe((reponse: Array<Bien>) => this.listBien = reponse, () => alert(this.error));
  }

  suprimerBien(b: Bien): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = {bien: b};
    this.dialog.open(SuppressionBienComponent, dialogConfig).afterClosed().subscribe(() => {
      this.voirBienPersonne();
    });
  }

  // tslint:disable-next-line:typedef
  activation(b: Bien): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = {bien: b};
    this.dialog.open(MettreBienEnLigneComponent, dialogConfig).afterClosed().subscribe(() => {
      this.voirBienPersonne();
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

}
