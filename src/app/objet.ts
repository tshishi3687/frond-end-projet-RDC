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
  nom_ville: string;
  nhabitant: number;
  province: Province;
  description: string;
  dateCreation: Date;
  superid: number;
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
export class Personne{
  id: number;
  nom: string;
  prenom: string;
  ddn: DatePipe;
  roll: Roll;
  contactUser: ContactUser;
  mdp: Mdp;
  ddj: DatePipe;
}

export class Bien{
  id: number;
  // tslint:disable-next-line:variable-name
  type_bien: TypeDeBien;
  dureeLocation: DureeLocation;
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
// tslint:disable-next-line:class-name
export class Demande{
  id: number;
  ddj: Date;
  dda: Date;
  ddd: Date;
  npersonne: number;
  // tslint:disable-next-line:variable-name
  bienDemandee: Bien;
  // tslint:disable-next-line:variable-name
  faitPar: Personne;
  etat: EtatDemande;
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


