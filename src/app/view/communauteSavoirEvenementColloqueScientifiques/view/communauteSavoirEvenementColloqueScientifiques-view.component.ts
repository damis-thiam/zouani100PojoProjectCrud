import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirEvenementColloqueScientifiquesService} from '../../../controller/service/CommunauteSavoirEvenementColloqueScientifiques.service';
import {CommunauteSavoirEvenementColloqueScientifiquesVo} from '../../../controller/model/CommunauteSavoirEvenementColloqueScientifiques.model';
import {EvenementColloqueScienntifiqueVo} from '../../../controller/model/EvenementColloqueScienntifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirEvenementColloqueScientifiques-view',
  templateUrl: './communauteSavoirEvenementColloqueScientifiques-view.component.html',
  styleUrls: ['./communauteSavoirEvenementColloqueScientifiques-view.component.css']
})
export class CommunauteSavoirEvenementColloqueScientifiquesViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private communauteSavoirEvenementColloqueScientifiquesService: CommunauteSavoirEvenementColloqueScientifiquesService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCommunauteSavoirEvenementColloqueScientifiquesDialog = false;
    } 



   // getters and setters
    get viewCommunauteSavoirEvenementColloqueScientifiquesDialog():boolean {
        return this.communauteSavoirEvenementColloqueScientifiquesService.viewCommunauteSavoirEvenementColloqueScientifiquesDialog;
        }
    set viewCommunauteSavoirEvenementColloqueScientifiquesDialog(value: boolean) {
        this.communauteSavoirEvenementColloqueScientifiquesService.viewCommunauteSavoirEvenementColloqueScientifiquesDialog= value;
        }
    
    get selectedCommunauteSavoirEvenementColloqueScientifiques():CommunauteSavoirEvenementColloqueScientifiquesVo {
           return this.communauteSavoirEvenementColloqueScientifiquesService.selectedCommunauteSavoirEvenementColloqueScientifiques;
       }
    set selectedCommunauteSavoirEvenementColloqueScientifiques(value: CommunauteSavoirEvenementColloqueScientifiquesVo) {
        this.communauteSavoirEvenementColloqueScientifiquesService.selectedCommunauteSavoirEvenementColloqueScientifiques = value;
       }





}