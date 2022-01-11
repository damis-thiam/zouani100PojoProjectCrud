import {Component, OnInit} from '@angular/core';
import {RoleEvaluationRechercheUniversitaireService} from '../../../controller/service/RoleEvaluationRechercheUniversitaire.service';
import {RoleEvaluationRechercheUniversitaireVo} from '../../../controller/model/RoleEvaluationRechercheUniversitaire.model';

@Component({
  selector: 'app-roleEvaluationRechercheUniversitaire-view',
  templateUrl: './roleEvaluationRechercheUniversitaire-view.component.html',
  styleUrls: ['./roleEvaluationRechercheUniversitaire-view.component.css']
})
export class RoleEvaluationRechercheUniversitaireViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private roleEvaluationRechercheUniversitaireService: RoleEvaluationRechercheUniversitaireService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewRoleEvaluationRechercheUniversitaireDialog = false;
    } 



   // getters and setters
    get viewRoleEvaluationRechercheUniversitaireDialog():boolean {
        return this.roleEvaluationRechercheUniversitaireService.viewRoleEvaluationRechercheUniversitaireDialog;
        }
    set viewRoleEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.roleEvaluationRechercheUniversitaireService.viewRoleEvaluationRechercheUniversitaireDialog= value;
        }
    
    get selectedRoleEvaluationRechercheUniversitaire():RoleEvaluationRechercheUniversitaireVo {
           return this.roleEvaluationRechercheUniversitaireService.selectedRoleEvaluationRechercheUniversitaire;
       }
    set selectedRoleEvaluationRechercheUniversitaire(value: RoleEvaluationRechercheUniversitaireVo) {
        this.roleEvaluationRechercheUniversitaireService.selectedRoleEvaluationRechercheUniversitaire = value;
       }





}