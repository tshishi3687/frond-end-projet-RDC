import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {TypeDeServiceService} from '../../service/type-de-service.service';
import {VilleService} from '../../service/VilleService';
import {Coordonnee, Service, TypeDeService, Ville} from '../../objet';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private serviceService: ServiceService, private typeService: TypeDeServiceService, private villeService: VilleService) {}

  private error = 'Il y a eu un probleme :(';
  startingString = '';

  serviceForm = new UntypedFormGroup({
    nom: new UntypedFormControl(null, [Validators.required, Validators.minLength(3)]),
    type: new UntypedFormControl('default'),
    coordonneeVille: new UntypedFormControl('defaults'),
    coordonneeCpostal: new UntypedFormControl(null, [Validators.min(100), Validators.max(100000)]),
    coordonneeRue: new UntypedFormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    coordonneeNum: new UntypedFormControl(null, [Validators.min(1), Validators.max(10000)]),
    coordonneeEmail: new UntypedFormControl(null, [Validators.email, Validators.maxLength(100)]),
    coordonneeTelephone: new UntypedFormControl(null, [Validators.min(1000), Validators.max(999999999999999)])
  });

  listService: Array<Service> = [];
  listTypeDeService: Array<TypeDeService> = [];
  listVille: Array<Ville> = [];

  ngOnInit(): void {
    this.voirType();
    this.voirVille();
    this.voirService();
  }

  voirVille(): void{
    this.villeService.voirVille().subscribe(reponse => this.listVille = reponse , () => alert(this.error));
  }

  voirType(): void{
    this.typeService.voirTypeDeService().subscribe(reponse => this.listTypeDeService = reponse , () => alert(this.error));
  }

  voirService(): void{
    this.serviceService.voirService().subscribe(reponse => this.listService = reponse , () => alert(this.error));
  }

  ajouterService(): void{
    if (this.serviceForm.valid){

      const serviceCoordonnee = new Coordonnee();
      serviceCoordonnee.id = 0;
      serviceCoordonnee.ville = this.listVille[this.serviceForm.value.coordonneeVille];
      serviceCoordonnee.cpostal = this.serviceForm.value.coordonneeCpostal;
      serviceCoordonnee.rue = this.serviceForm.value.coordonneeRue;
      serviceCoordonnee.num = this.serviceForm.value.coordonneeNum;
      serviceCoordonnee.email = this.serviceForm.value.coordonneeEmail;
      serviceCoordonnee.telephone = this.serviceForm.value.coordonneeTelephone;

      console.log(this.listVille[this.serviceForm.value.coordonneeVille]);

      const service = new Service();
      service.id = 0;
      service.nom = this.serviceForm.value.nom;
      service.type = this.listTypeDeService[this.serviceForm.value.type];
      service.coordonnee = serviceCoordonnee;
      this.serviceService.ajouterService(service).subscribe(() => this.voirService(), () => alert(this.error));
    }
  }

  supprimerService(id): void{
    this.serviceService.supprimerService(id).subscribe(() => this.voirService(), () => alert(this.error));
  }
}
