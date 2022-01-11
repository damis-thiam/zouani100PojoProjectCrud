import {Component, OnInit} from '@angular/core';
import {IdentifiantAuteurExpertService} from '../../../controller/service/IdentifiantAuteurExpert.service';
import {IdentifiantAuteurExpertVo} from '../../../controller/model/IdentifiantAuteurExpert.model';
import {IdentifiantRechercheVo} from '../../../controller/model/IdentifiantRecherche.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-identifiantAuteurExpert-view',
  templateUrl: './identifiantAuteurExpert-view.component.html',
  styleUrls: ['./identifiantAuteurExpert-view.component.css']
})
export class IdentifiantAuteurExpertViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private identifiantAuteurExpertService: IdentifiantAuteurExpertService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewIdentifiantAuteurExpertDialog = false;
    } 



   // getters and setters
    get viewIdentifiantAuteurExpertDialog():boolean {
        return this.identifiantAuteurExpertService.viewIdentifiantAuteurExpertDialog;
        }
    set viewIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.viewIdentifiantAuteurExpertDialog= value;
        }
    
    get selectedIdentifiantAuteurExpert():IdentifiantAuteurExpertVo {
           return this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert;
       }
    set selectedIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert = value;
       }





}