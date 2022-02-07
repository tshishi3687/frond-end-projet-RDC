import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {render} from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.component.html',
  styleUrls: ['./pay-pal.component.css']
})
export class PayPalComponent implements OnInit {

  constructor(private service: LoginService) {}

  ngOnInit(): void {
  }

}
