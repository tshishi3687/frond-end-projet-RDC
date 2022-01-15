import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../service/login.service';
import * as pdfMake from 'pdfmake/build/pdfmake';

import * as pdfFonts from 'pdfmake/build/vfs_fonts';
@Component({
  selector: 'app-voir-contrat',
  templateUrl: './voir-contrat.component.html',
  styleUrls: ['./voir-contrat.component.css']
})
export class VoirContratComponent implements OnInit {
  private pdfTable: any;

  constructor(private service: LoginService) { }

  contrat = this.service.repContrat();

  ngOnInit(): void {
  }

  exportAsPDF(): void {

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const dd = {

// Here you put the page settings as your footer, for example:
      // tslint:disable-next-line:typedef
      footer(currentPage, pageCount) {
        return [
          {
            text:
              currentPage.toString() +
              ' de ' +
              pageCount +
              '\n' +
              'Footer Name',
            alignment: currentPage ? 'center' : 'center'
          }
        ];
      },
// Here you can enter the page size and orientation:
      pageSize: 'A4',
      pageOrientation: 'Portrait',
      // in pageOrientation you can put "Portrait" or "landscape"

// start the body of your impression:
      content: [

        {
          table: {
            widths: ['*'],
            body: [
              [
                {
                  text: [
                    { text: `${'Text Example'}`, bold: true }
                  ],
                  style: 'header',
                  width: '150',
                  alignment: 'left',
                  border: [true, true, true, false],
                  margin: [0, 15, 0, 15]
                }
              ]
            ]
          }
        },
      ]

    };

    pdfMake.createPdf(dd).download('Name of Print');
  }
}
