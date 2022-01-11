import {Component, OnInit} from '@angular/core';
import {EtablissementEnseignementService} from '../../../controller/service/EtablissementEnseignement.service';
import {EtablissementEnseignementVo} from '../../../controller/model/EtablissementEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissementEnseignement-view',
  templateUrl: './etablissementEnseignement-view.component.html',
  styleUrls: ['./etablissementEnseignement-view.component.css']
})
export class EtablissementEnseignementViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private etablissementEnseignementService: EtablissementEnseignementService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEtablissementEnseignementDialog = false;
    } 



   // getters and setters
    get viewEtablissementEnseignementDialog():boolean {
        return this.etablissementEnseignementService.viewEtablissementEnseignementDialog;
        }
    set viewEtablissementEnseignementDialog(value: boolean) {
        this.etablissementEnseignementService.viewEtablissementEnseignementDialog= value;
        }
    
    get selectedEtablissementEnseignement():EtablissementEnseignementVo {
           return this.etablissementEnseignementService.selectedEtablissementEnseignement;
       }
    set selectedEtablissementEnseignement(value: EtablissementEnseignementVo) {
        this.etablissementEnseignementService.selectedEtablissementEnseignement = value;
       }





}