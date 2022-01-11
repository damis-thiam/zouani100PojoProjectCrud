import {Component, OnInit} from '@angular/core';
import {CultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/CultureScientifiqueOutilPedagogique.service';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';

@Component({
  selector: 'app-cultureScientifiqueOutilPedagogique-view',
  templateUrl: './cultureScientifiqueOutilPedagogique-view.component.html',
  styleUrls: ['./cultureScientifiqueOutilPedagogique-view.component.css']
})
export class CultureScientifiqueOutilPedagogiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private cultureScientifiqueOutilPedagogiqueService: CultureScientifiqueOutilPedagogiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCultureScientifiqueOutilPedagogiqueDialog = false;
    } 



   // getters and setters
    get viewCultureScientifiqueOutilPedagogiqueDialog():boolean {
        return this.cultureScientifiqueOutilPedagogiqueService.viewCultureScientifiqueOutilPedagogiqueDialog;
        }
    set viewCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.cultureScientifiqueOutilPedagogiqueService.viewCultureScientifiqueOutilPedagogiqueDialog= value;
        }
    
    get selectedCultureScientifiqueOutilPedagogique():CultureScientifiqueOutilPedagogiqueVo {
           return this.cultureScientifiqueOutilPedagogiqueService.selectedCultureScientifiqueOutilPedagogique;
       }
    set selectedCultureScientifiqueOutilPedagogique(value: CultureScientifiqueOutilPedagogiqueVo) {
        this.cultureScientifiqueOutilPedagogiqueService.selectedCultureScientifiqueOutilPedagogique = value;
       }





}