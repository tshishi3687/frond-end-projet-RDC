import {DatePipe} from '@angular/common';
import {Byte} from '@angular/compiler/src/util';

export class Province{
  id: number;
  nomprovince: string;
  description: string;
  dateCreation: Date;
  superid: number;
}

export class Ville{
  id: number;
  // tslint:disable-next-line:variable-name
  nomVille: string;
  nhabitant: number;
  province: Province;
  description: string;
  dateCreation: Date;
}

export class TypeDeBien{
  id: number;
  nom: string;
  dateCreation: Date;
  superid: number;
}

export class TypeDeService{
  id: number;
  nomtype: string;
  dateCreation: Date;
  superid: number;
}

export class Coordonnee{
  id: number;
  ville: Ville;
  cpostal: number;
  rue: string;
  num: number;
  email: string;
  telephone: number;
  dateCreation: Date;
  superid: number;
}

export class Service{
  id: number;
  nom: string;
  type: TypeDeService;
  coordonnee: Coordonnee;
  dateCreation: Date;
  superid: number;
}
export class Roll{
  id: number;
  nomRoll: string;
}
export class Authorities{
  authority: string;
}

export class Personne{
  id: number;
  nom: string;
  prenom: string;
  ddn: DatePipe;
  roll: Roll;
  contactUser: ContactUser;
  password: Mdp;
  verifMDP: string;
  ddj: DatePipe;
  active: boolean;
}

export class Bien{
  id: number;
  // tslint:disable-next-line:variable-name
  type_bien: TypeDeBien;
  aladisposition: Aladisposition;
  prix: number;
  npmin: number;
  npmax: number;
  nchambre: number;
  nsdb: number;
  nwc: number;
  superficie: number;
  description: string;
  coordonnee: Coordonnee;
  appartient: Personne;
  dateCreation: Date;
  likes: number;
  modeActive: boolean;
  images: Array<ImageBien>;
  idNNuit: number;
  dateFinMisEnLigne: Date;
}

export class Aladisposition{
  id: number;
  securite: boolean;
  wifi: boolean;
  television: boolean;
  vesselle: boolean;
  literie: boolean;
  lingeMaison: boolean;
  eauFroide: boolean;
  eauChaude: boolean;
  eauPotable: boolean;
  jardin: boolean;
  cour: boolean;
  terrasse: boolean;
  piscinePrive: boolean;
  piscineCommune: boolean;
  voiture: boolean;
  moto: boolean;
  velo: boolean;
  animaux: boolean;
}

export class Mdp{
  mdp: string;
  mail: string;
}
export class ContactUser{
  id: number;
  email: string;
  telephone: string;
  appartienA: Personne;
}

export class Contrat{
  id: number;
  bailleur: Personne;
  preneur: Personne;
  enCour: boolean;
  entre: string;
  entre2: string;
  objet: string;
  etatLieu: string;
  loyer: string;
  duree: string;
  dardl: string;
}

// tslint:disable-next-line:class-name
export class BienMisEnLigne{
  id: number;
  bienLie: Bien;
  contratBienMisEnLigne: Contrat;
  // tslint:disable-next-line:variable-name
  preneurOuBailleur: Personne;
}

export class EtatDemande{
  id: number;
  etat: string;
}

// tslint:disable-next-line:class-name
export class Reservation{
  id: number;
  ddj: string;
  dda: Date;
  ddd: Date;
  npersonne: number;
  // tslint:disable-next-line:variable-name
  bien_reserve: Bien;
  // tslint:disable-next-line:variable-name
  reserverPar: Personne;
}

export class ImageBien{
  id: string;
  name: string;
  type: string;
  picByte: Byte[];
  bienid: Bien;
}


// tslint:disable-next-line:class-name
export class ImageProvince{
  id: string;
  name: string;
  type: string;
  picByte: Byte[];
  provinceID: Province;
}

export class DureeLocation{
  id: number;
  duree: string;
  desciption: string;
}

export class LikeBien{
  personneSimplifierDTO: Personne;
  bienDTO: Bien;
}

export class Pays{
  id: number;
  code: number;
  alpha2: string;
  alpha3: string;
  nomEnGb: string;
  nomFrFr: string;
}

export class AdressUser{
  id: number;
  numHabitation: string;
  nomRue: string;
  codePostal: string;
  pays: Pays;
  appartienA: Personne;
}

export class InfoBancaire{
  id: number;
  nomBanque: string;
  numCarte: string;
  numCompte: string;
  dateExpiration: Date;
  appartienA: Personne;
}

export class NombreNuitVoulu{
  id: number;
  nNuit: number;
}

export abstract class Constants{
  // tslint:disable-next-line:variable-name
  private readonly _roll1 = btoa('Admin');
  // tslint:disable-next-line:variable-name
  private readonly _roll2 = btoa('Proprietaire');
  // tslint:disable-next-line:variable-name
  private readonly _roll3 = btoa('Locataire');
  // tslint:disable-next-line:variable-name
  private readonly _SessionUser = btoa('user-details');
  // tslint:disable-next-line:variable-name
  private readonly _SessionBien = btoa('bien-details');
  // tslint:disable-next-line:variable-name
  private readonly _SessionDemande = btoa('demande-details');
  // tslint:disable-next-line:variable-name
  private readonly _SessionREservation = btoa('reservation-details');
  // tslint:disable-next-line:variable-name
  private readonly _SessionVerifIBAU = btoa('IBAU-details');
  // tslint:disable-next-line:variable-name
  private readonly _SessionContrat = btoa('contrat-details');


  get SessionContrat(): string {
    return atob(this._SessionContrat);
  }

  get SessionVerifIBAU(): string {
    return atob(this._SessionVerifIBAU);
  }

  get SessionUser(): string {
    return atob(this._SessionUser);
  }

  get SessionBien(): string {
    return atob(this._SessionBien);
  }

  get SessionDemande(): string {
    return atob(this._SessionDemande);
  }

  get SessionREservation(): string {
    return atob(this._SessionREservation);
  }

  get roll1(): string {
    return atob(this._roll1);
  }

  get roll2(): string {
    return atob(this._roll2);
  }

  get roll3(): string {
    return atob(this._roll3);
  }
}
