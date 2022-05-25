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
  dateJ: Date = new Date();
  isSelected: any;

  ngOnInit(): void {
    console.log('salut');
    this.isSelected = (event: any) => {
      const tshishi = new Date(event);

        console.log(this.reservations[0]);
        console.log(new Date(this.reservations[0]).getDate());
        console.log(this.reservations[0].getMonth());
        console.log(this.reservations[0].getFullYear());
        console.log(tshishi.getDay());
        console.log(tshishi.getMonth());
        console.log(tshishi.getFullYear());

      // tslint:disable-next-line:max-line-length
      console.log(!!this.reservations?.find(r => r.getFullYear() === tshishi.getFullYear()));
      // tslint:disable-next-line:max-line-length
      return this.reservations.find(r => new Date(r).getFullYear() === tshishi.getFullYear() && new Date(r).getMonth() === tshishi.getMonth() && new Date(r).getDate() === tshishi.getDate()) ? 'selected' : null;
    };
  }

}

