import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  @Input() disponibles: Array<Date> = [];
  @Input() reservations: Array<Date> = [];
  listR: Array<Date> = [];
  event: any;
  isSelected = (event: any) => {
    const date =
      event.getFullYear() +
      '-' +
      ('00' + (event.getMonth() + 1)).slice(-2) +
      '-' +
      ('00' + event.getDate()).slice(-2);
    this.reservations.find(r => this.listR.push(r));
    // @ts-ignore
    return this.reservations.find(r => r === date) ? 'selected' : (this.disponibles.find(d => d === date)) ? 'isnotselected' : null;
  }

  ngOnInit(): void {
  }

}

