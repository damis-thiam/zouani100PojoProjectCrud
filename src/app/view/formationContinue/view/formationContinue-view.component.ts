import {Component, OnInit} from '@angular/core';
import {FormationContinueService} from '../../../controller/service/FormationContinue.service';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {OutilFormationContinueVo} from '../../../controller/model/OutilFormationContinue.model';
import {ModaliteFormationContinueVo} from '../../../controller/model/ModaliteFormationContinue.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-formationContinue-view',
  templateUrl: './formationContinue-view.component.html',
  styleUrls: ['./formationContinue-view.component.css']
})
export class FormationContinueViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private formationContinueService: FormationContinueService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewFormationContinueDialog = false;
    } 



   // getters and setters
    get viewFormationContinueDialog():boolean {
        return this.formationContinueService.viewFormationContinueDialog;
        }
    set viewFormationContinueDialog(value: boolean) {
        this.formationContinueService.viewFormationContinueDialog= value;
        }
    
    get selectedFormationContinue():FormationContinueVo {
           return this.formationContinueService.selectedFormationContinue;
       }
    set selectedFormationContinue(value: FormationContinueVo) {
        this.formationContinueService.selectedFormationContinue = value;
       }





}