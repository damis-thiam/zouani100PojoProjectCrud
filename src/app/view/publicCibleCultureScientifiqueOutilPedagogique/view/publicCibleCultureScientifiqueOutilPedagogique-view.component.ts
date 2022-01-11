import {Component, OnInit} from '@angular/core';
import {PublicCibleCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/PublicCibleCultureScientifiqueOutilPedagogique.service';
import {PublicCibleCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/PublicCibleCultureScientifiqueOutilPedagogique.model';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-publicCibleCultureScientifiqueOutilPedagogique-view',
  templateUrl: './publicCibleCultureScientifiqueOutilPedagogique-view.component.html',
  styleUrls: ['./publicCibleCultureScientifiqueOutilPedagogique-view.component.css']
})
export class PublicCibleCultureScientifiqueOutilPedagogiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private publicCibleCultureScientifiqueOutilPedagogiqueService: PublicCibleCultureScientifiqueOutilPedagogiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog = false;
    } 



   // getters and setters
    get viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog():boolean {
        return this.publicCibleCultureScientifiqueOutilPedagogiqueService.viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog;
        }
    set viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.viewPublicCibleCultureScientifiqueOutilPedagogiqueDialog= value;
        }
    
    get selectedPublicCibleCultureScientifiqueOutilPedagogique():PublicCibleCultureScientifiqueOutilPedagogiqueVo {
           return this.publicCibleCultureScientifiqueOutilPedagogiqueService.selectedPublicCibleCultureScientifiqueOutilPedagogique;
       }
    set selectedPublicCibleCultureScientifiqueOutilPedagogique(value: PublicCibleCultureScientifiqueOutilPedagogiqueVo) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.selectedPublicCibleCultureScientifiqueOutilPedagogique = value;
       }





}