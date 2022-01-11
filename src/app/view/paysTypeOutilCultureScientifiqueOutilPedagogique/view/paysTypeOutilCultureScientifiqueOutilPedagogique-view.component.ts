import {Component, OnInit} from '@angular/core';
import {PaysTypeOutilCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/PaysTypeOutilCultureScientifiqueOutilPedagogique.service';
import {PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/PaysTypeOutilCultureScientifiqueOutilPedagogique.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysTypeOutilCultureScientifiqueOutilPedagogique-view',
  templateUrl: './paysTypeOutilCultureScientifiqueOutilPedagogique-view.component.html',
  styleUrls: ['./paysTypeOutilCultureScientifiqueOutilPedagogique-view.component.css']
})
export class PaysTypeOutilCultureScientifiqueOutilPedagogiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private paysTypeOutilCultureScientifiqueOutilPedagogiqueService: PaysTypeOutilCultureScientifiqueOutilPedagogiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = false;
    } 



   // getters and setters
    get viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
        return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
        }
    set viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.viewPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog= value;
        }
    
    get selectedPaysTypeOutilCultureScientifiqueOutilPedagogique():PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo {
           return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set selectedPaysTypeOutilCultureScientifiqueOutilPedagogique(value: PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = value;
       }





}