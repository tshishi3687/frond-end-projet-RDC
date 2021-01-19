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
