

export class Province{
  id: number;
  nomprovince: string;
  description: string;
  img: Array<ImageProvince>;
  villes: Array<Ville>;
}

export class Ville{
  id: number;
  // tslint:disable-next-line:variable-name
  nomVille: string;
  nhabitant: number;
  province: Province;
  description: string;
  dateCreation: Date;
  img: Array<ImageVille>;
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
  cpostal: string;
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

export class Roll{
  id: number;
  nomRoll: string;
}

export class Personne{
  id: number;
  nom: string;
  prenom: string;
  ddn: Date;
  role: string;
  roll: Roll;
  contactUser: ContactUser;
  password: Mdp;
  verifMDP: string;
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
  appartirDe: Date;
  likes: number;
  modeActive: boolean;
  images: Array<Img>;
  image: Img;
  idNNuit: number;
  dateFinMisEnLigne: Date;
  service: Array<Service>;
  disponibles: Array<Date>;
  reservers: Array<Date>;
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
  ddDebut: Date;
  ddFin: Date;
  bienVuDTO: Bien;
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
  bienConserne: Bien;
  faitPar: Personne;
  ddArrivee: Date;
  ddDepart: Date;
  nPersonneSurLieu: number;
}

export class ImageModel{
  name: string;
  type: string;
  // picByte: Byte[];
}


// tslint:disable-next-line:class-name
export class ImageProvince{
  id: string;
  name: string;
  type: string;
  // picByte: Byte[];
}

// tslint:disable-next-line:class-name
export class ImageVille{
  id: string;
  name: string;
  type: string;
  // picByte: Byte[];
}


export class Img{
  id: string;
  name: string;
  type: string;
  // picByte: Byte[];
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

export class ModifPass{
  codeActive: string;
  newPass: string;
  verifPass: string;
}

export class Details{
  id: string;
  payerId: string;
  createTime: Date;
  updateTime: Date;
  intent: string;
  status: string;
  nom: string;
  prenom: string;
  email: string;
  adressLine1: string;
  adminArea1: string;
  adminArea2: string;
  countryCode: string;
  postalCode: string;
}

export class PayPal{
  id: number;
  details: Details;
  reservationBienDTO: Reservation;
  Prix: number;
}

export class Detailes{
  id: number;
  details: Details;
}

export interface TryListAllBiens{
  typeId: string;
  provinceId: string;
  villeId: string;
  page: number;
  nbPage: number;
  list: Array<Bien>;
}

export class Validator{
  ibau: boolean;
  reservation: boolean;
  mel: boolean;
  biensNonMel: boolean;
}
