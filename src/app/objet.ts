import {DatePipe} from '@angular/common';
import {Byte} from '@angular/compiler/src/util';

export class Province{
  id: number;
  nomprovince: string;
  description: string;
}

export class Ville{
  id: number;
  // tslint:disable-next-line:variable-name
  nom_ville: string;
  nhabitant: number;
  province: Province;
  description: string;
}

export class TypeDeBien{
  id: number;
  nom: string;
}

export class TypeDeService{
  id: number;
  nomtype: string;
}

export class Coordonnee{
  id: number;
  ville: Ville;
  cpostal: number;
  rue: string;
  num: number;
  email: string;
  telephone: number;
}

export class Service{
  id: number;
  nom: string;
  type: TypeDeService;
  coordonnee: Coordonnee;
}

export class Personne{
  id: number;
  nom: string;
  prenom: string;
  ddn: DatePipe;
  mdp: string;
  telephone: number;
  email: string;
  status: string;
}

export class Bien{
  id: number;
  // tslint:disable-next-line:variable-name
  type_bien: TypeDeBien;
  prix: number;
  npmin: number;
  npmax: number;
  nchambre: number;
  nsdb: number;
  nwc: number;
  superficie: number;
  aladisposition: string;
  description: string;
  coordonnee: Coordonnee;
  appartient: Personne;
}

export class Aladisposition{
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
  vehicule: boolean;
  moto: boolean;
  velo: boolean;
  animaux: boolean;
}

// tslint:disable-next-line:class-name
export class Lien_photo{
  id: number;
  name: string;
  type: string;
  image: FormData;
  province: Province;
  ville: Ville;
  bien: Bien;
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
