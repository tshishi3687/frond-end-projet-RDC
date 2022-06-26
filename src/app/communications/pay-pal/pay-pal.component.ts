import {Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { render} from 'creditcardpayments/creditCardPayments';
import {LoginService} from '../../service/login.service';
import {BienService} from '../../service/bien.service';
import {ReservationService} from '../../service/reservation.service';
import {Detailes, Details, PayPal, Reservation, Validator} from '../../objet';
import {PersonneService} from '../../service/personne.service';
@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.component.html',
  styleUrls: ['./pay-pal.component.css']
})
export class PayPalComponent implements OnInit, AfterViewInit {
  @ViewChild('paypal') paypalElement: ElementRef;

  constructor(
    private service: LoginService,
    private bienService: BienService,
    private reservationService: ReservationService,
    private perService: PersonneService
  ) {
    this.statusPayement = new EventEmitter<boolean>();
  }

  @Input() idObjet: number;
  @Input() prix: number;
  @Input() reservation: Reservation;
  @Input() payementPour: string;
  @Output() statusPayement: EventEmitter<boolean>;
  attente = false;
  message: string;
  messageBol = false;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void{
    // @ts-ignore
    render(
      {
        id: '#paypal',
        currency: 'EUR',
        value: this.prix.toString(),
        onApprove: (details) => {

          switch (this.payementPour){
            case 'mel':
              const detail = new Details();
              detail.id = details.id;
              detail.payerId = details.payer.payer_id;
              detail.createTime = details.create_time;
              detail.updateTime = details.update_time;
              detail.intent = details.intent;
              detail.status = details.status;
              detail.nom = details.payer.name.given_name;
              detail.prenom = details.payer.name.surname;
              detail.email = details.payer.email_adress;
              detail.adressLine1 = details.payer.address.address_line_1;
              detail.adminArea1 = details.payer.address.admin_area_1;
              detail.adminArea2 = details.payer.address.admin_area_2;
              detail.countryCode = details.payer.address.country_code;
              detail.postalCode = details.payer.address.postal_code;

              const payPal = new PayPal();
              payPal.id = this.idObjet;
              payPal.details = detail;

              // tslint:disable-next-line:max-line-length
              this.bienService.annulCMEL(payPal).subscribe(() => {
                this.statusPayement.emit(true);
              }, () => alert('Enregistrement DB MEL RATER'));
              break;
            case 'reservation':
              console.log(this.reservation);
              this.attente = true;
              const detaill = new Details();
              detaill.id = details.id;
              detaill.payerId = details.payer.payer_id;
              detaill.createTime = details.create_time;
              detaill.updateTime = details.update_time;
              detaill.intent = details.intent;
              detaill.status = details.status;
              detaill.nom = details.payer.name.given_name;
              detaill.prenom = details.payer.name.surname;
              detaill.email = details.payer.email_adress;
              detaill.adressLine1 = details.payer.address.address_line_1;
              detaill.adminArea1 = details.payer.address.admin_area_1;
              detaill.adminArea2 = details.payer.address.admin_area_2;
              detaill.countryCode = details.payer.address.country_code;
              detaill.postalCode = details.payer.address.postal_code;

              const payPall = new PayPal();
              payPall.id = this.idObjet;
              payPall.details = detaill;
              payPall.reservationBienDTO = this.reservation;
              payPall.Prix = this.prix;

              this.reservationService.ajouterReservation(payPall).subscribe((reponse: number) => {
                const det = new Detailes();
                det.id = reponse;
                det.details = detaill;
                this.attente = false;
                this.reservationService.details(det).subscribe(() => {
                  this.message = 'Votre réservation c\'est bien effectué';
                  this.perService.verifIBAU(this.service.client()).subscribe((reponses: Validator) => {
                    this.statusPayement.emit(true);
                    this.messageBol = true;
                    sessionStorage.setItem(this.service.SessionVerifValidator, JSON.stringify(reponses));
                  }, () => alert('Impossible de verifier les validators'));
                }, () => {
                  this.attente = false;
                  alert('enregistrement de detail no effectuer');
                });
              }, () => {
                alert('Enregistrement DB Réservation RATER');
                this.attente = false;
              });
              break;
          }
        }

        // onError: onError => {
        //   this.statusPayement.emit(true);
        // }
      }
    );
  }

}
