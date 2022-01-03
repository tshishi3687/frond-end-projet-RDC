import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../service/login.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-voir-contrat',
  templateUrl: './voir-contrat.component.html',
  styleUrls: ['./voir-contrat.component.css']
})
export class VoirContratComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.generatePDF();
  }

  generatePDF(): void{
    const document = this.getDocument();
    pdfMake.createPDF(document).open();
  }

  // tslint:disable-next-line:max-line-length typedef
  getDocument(){
    return {
      content: [
        {
          columns: [
            [
              {
                text: 'Mobembo.co \nSite de mise en relation Bailleur et Preneur de bien en R.D.C.'
              },
              {
                text: 'T.F.E (travail de fin d\'etude)\NTshibangu Cédrick'
              }]
          ]
        },
        {
          text: 'Contact de location',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        }
      ]
    };
  }
}
