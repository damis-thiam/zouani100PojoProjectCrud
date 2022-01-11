import {Component, OnInit} from '@angular/core';
import {RoleEvaluationRechercheUniversitaireService} from '../../../controller/service/RoleEvaluationRechercheUniversitaire.service';
import {RoleEvaluationRechercheUniversitaireVo} from '../../../controller/model/RoleEvaluationRechercheUniversitaire.model';

@Component({
  selector: 'app-roleEvaluationRechercheUniversitaire-create',
  templateUrl: './roleEvaluationRechercheUniversitaire-create.component.html',
  styleUrls: ['./roleEvaluationRechercheUniversitaire-create.component.css']
})
export class RoleEvaluationRechercheUniversitaireCreateComponent implements OnInit {

constructor(private roleEvaluationRechercheUniversitaireService: RoleEvaluationRechercheUniversitaireService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.roleEvaluationRechercheUniversitaireService.save().subscribe(roleEvaluationRechercheUniversitaire=>{
          
       this.roleEvaluationRechercheUniversitaires.push({...roleEvaluationRechercheUniversitaire});
       this.createRoleEvaluationRechercheUniversitaireDialog = false;
       this.selectedRoleEvaluationRechercheUniversitaire = new RoleEvaluationRechercheUniversitaireVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createRoleEvaluationRechercheUniversitaireDialog  = false;
}

// getters and setters 

get roleEvaluationRechercheUniversitaires(): Array<RoleEvaluationRechercheUniversitaireVo> {
    return this.roleEvaluationRechercheUniversitaireService.roleEvaluationRechercheUniversitaires;
       }
set roleEvaluationRechercheUniversitaires(value: Array<RoleEvaluationRechercheUniversitaireVo>) {
        this.roleEvaluationRechercheUniversitaireService.roleEvaluationRechercheUniversitaires = value;
       } 

 get selectedRoleEvaluationRechercheUniversitaire():RoleEvaluationRechercheUniversitaireVo {
           return this.roleEvaluationRechercheUniversitaireService.selectedRoleEvaluationRechercheUniversitaire;
       }
    set selectedRoleEvaluationRechercheUniversitaire(value: RoleEvaluationRechercheUniversitaireVo) {
        this.roleEvaluationRechercheUniversitaireService.selectedRoleEvaluationRechercheUniversitaire = value;
       }
  
   get createRoleEvaluationRechercheUniversitaireDialog():boolean {
           return this.roleEvaluationRechercheUniversitaireService.createRoleEvaluationRechercheUniversitaireDialog;
       }
    set createRoleEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.roleEvaluationRechercheUniversitaireService.createRoleEvaluationRechercheUniversitaireDialog= value;
       }


}