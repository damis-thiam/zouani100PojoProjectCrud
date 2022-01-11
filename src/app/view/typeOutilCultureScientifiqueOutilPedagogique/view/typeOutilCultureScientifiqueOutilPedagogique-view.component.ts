import {Component, OnInit} from '@angular/core';
import {TypeOutilCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/TypeOutilCultureScientifiqueOutilPedagogique.service';
import {TypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/TypeOutilCultureScientifiqueOutilPedagogique.model';
import {TypeOutilVo} from '../../../controller/model/TypeOutil.model';
import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';

@Component({
  selector: 'app-typeOutilCultureScientifiqueOutilPedagogique-view',
  templateUrl: './typeOutilCultureScientifiqueOutilPedagogique-view.component.html',
  styleUrls: ['./typeOutilCultureScientifiqueOutilPedagogique-view.component.css']
})
export class TypeOutilCultureScientifiqueOutilPedagogiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private typeOutilCultureScientifiqueOutilPedagogiqueService: TypeOutilCultureScientifiqueOutilPedagogiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog = false;
    } 



   // getters and setters
    get viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
        return this.typeOutilCultureScientifiqueOutilPedagogiqueService.viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
        }
    set viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.viewTypeOutilCultureScientifiqueOutilPedagogiqueDialog= value;
        }
    
    get selectedTypeOutilCultureScientifiqueOutilPedagogique():TypeOutilCultureScientifiqueOutilPedagogiqueVo {
           return this.typeOutilCultureScientifiqueOutilPedagogiqueService.selectedTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set selectedTypeOutilCultureScientifiqueOutilPedagogique(value: TypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.selectedTypeOutilCultureScientifiqueOutilPedagogique = value;
       }





}