import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirChercheurService} from '../../../controller/service/CommunauteSavoirChercheur.service';
import {CommunauteSavoirChercheurVo} from '../../../controller/model/CommunauteSavoirChercheur.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-communauteSavoirChercheur-view',
  templateUrl: './communauteSavoirChercheur-view.component.html',
  styleUrls: ['./communauteSavoirChercheur-view.component.css']
})
export class CommunauteSavoirChercheurViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private communauteSavoirChercheurService: CommunauteSavoirChercheurService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCommunauteSavoirChercheurDialog = false;
    } 



   // getters and setters
    get viewCommunauteSavoirChercheurDialog():boolean {
        return this.communauteSavoirChercheurService.viewCommunauteSavoirChercheurDialog;
        }
    set viewCommunauteSavoirChercheurDialog(value: boolean) {
        this.communauteSavoirChercheurService.viewCommunauteSavoirChercheurDialog= value;
        }
    
    get selectedCommunauteSavoirChercheur():CommunauteSavoirChercheurVo {
           return this.communauteSavoirChercheurService.selectedCommunauteSavoirChercheur;
       }
    set selectedCommunauteSavoirChercheur(value: CommunauteSavoirChercheurVo) {
        this.communauteSavoirChercheurService.selectedCommunauteSavoirChercheur = value;
       }





}