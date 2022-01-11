import {Component, OnInit} from '@angular/core';
import {EtablissementCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/EtablissementCultureScientifiqueOutilPedagogique.service';
import {EtablissementCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/EtablissementCultureScientifiqueOutilPedagogique.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissementCultureScientifiqueOutilPedagogique-view',
  templateUrl: './etablissementCultureScientifiqueOutilPedagogique-view.component.html',
  styleUrls: ['./etablissementCultureScientifiqueOutilPedagogique-view.component.css']
})
export class EtablissementCultureScientifiqueOutilPedagogiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private etablissementCultureScientifiqueOutilPedagogiqueService: EtablissementCultureScientifiqueOutilPedagogiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEtablissementCultureScientifiqueOutilPedagogiqueDialog = false;
    } 



   // getters and setters
    get viewEtablissementCultureScientifiqueOutilPedagogiqueDialog():boolean {
        return this.etablissementCultureScientifiqueOutilPedagogiqueService.viewEtablissementCultureScientifiqueOutilPedagogiqueDialog;
        }
    set viewEtablissementCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.viewEtablissementCultureScientifiqueOutilPedagogiqueDialog= value;
        }
    
    get selectedEtablissementCultureScientifiqueOutilPedagogique():EtablissementCultureScientifiqueOutilPedagogiqueVo {
           return this.etablissementCultureScientifiqueOutilPedagogiqueService.selectedEtablissementCultureScientifiqueOutilPedagogique;
       }
    set selectedEtablissementCultureScientifiqueOutilPedagogique(value: EtablissementCultureScientifiqueOutilPedagogiqueVo) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.selectedEtablissementCultureScientifiqueOutilPedagogique = value;
       }





}