import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirExpertiseScientifiqueService} from '../../../controller/service/CommunauteSavoirExpertiseScientifique.service';
import {CommunauteSavoirExpertiseScientifiqueVo} from '../../../controller/model/CommunauteSavoirExpertiseScientifique.model';
import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirExpertiseScientifique-view',
  templateUrl: './communauteSavoirExpertiseScientifique-view.component.html',
  styleUrls: ['./communauteSavoirExpertiseScientifique-view.component.css']
})
export class CommunauteSavoirExpertiseScientifiqueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private communauteSavoirExpertiseScientifiqueService: CommunauteSavoirExpertiseScientifiqueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCommunauteSavoirExpertiseScientifiqueDialog = false;
    } 



   // getters and setters
    get viewCommunauteSavoirExpertiseScientifiqueDialog():boolean {
        return this.communauteSavoirExpertiseScientifiqueService.viewCommunauteSavoirExpertiseScientifiqueDialog;
        }
    set viewCommunauteSavoirExpertiseScientifiqueDialog(value: boolean) {
        this.communauteSavoirExpertiseScientifiqueService.viewCommunauteSavoirExpertiseScientifiqueDialog= value;
        }
    
    get selectedCommunauteSavoirExpertiseScientifique():CommunauteSavoirExpertiseScientifiqueVo {
           return this.communauteSavoirExpertiseScientifiqueService.selectedCommunauteSavoirExpertiseScientifique;
       }
    set selectedCommunauteSavoirExpertiseScientifique(value: CommunauteSavoirExpertiseScientifiqueVo) {
        this.communauteSavoirExpertiseScientifiqueService.selectedCommunauteSavoirExpertiseScientifique = value;
       }





}