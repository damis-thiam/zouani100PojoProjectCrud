import {Component, OnInit} from '@angular/core';
import {ChercheurService} from '../../../controller/service/Chercheur.service';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';
import {EntiteAdministrativeVo} from '../../../controller/model/EntiteAdministrative.model';
import {DepartementScientifiqueVo} from '../../../controller/model/DepartementScientifique.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {GradeVo} from '../../../controller/model/Grade.model';
import {CorpsVo} from '../../../controller/model/Corps.model';
import {CommissionScientifiqueVo} from '../../../controller/model/CommissionScientifique.model';

@Component({
  selector: 'app-chercheur-view',
  templateUrl: './chercheur-view.component.html',
  styleUrls: ['./chercheur-view.component.css']
})
export class ChercheurViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private chercheurService: ChercheurService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewChercheurDialog = false;
    } 



   // getters and setters
    get viewChercheurDialog():boolean {
        return this.chercheurService.viewChercheurDialog;
        }
    set viewChercheurDialog(value: boolean) {
        this.chercheurService.viewChercheurDialog= value;
        }
    
    get selectedChercheur():ChercheurVo {
           return this.chercheurService.selectedChercheur;
       }
    set selectedChercheur(value: ChercheurVo) {
        this.chercheurService.selectedChercheur = value;
       }





}