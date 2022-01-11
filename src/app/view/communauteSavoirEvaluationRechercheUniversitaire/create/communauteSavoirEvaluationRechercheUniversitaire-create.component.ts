import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirEvaluationRechercheUniversitaireService} from '../../../controller/service/CommunauteSavoirEvaluationRechercheUniversitaire.service';
import {CommunauteSavoirEvaluationRechercheUniversitaireVo} from '../../../controller/model/CommunauteSavoirEvaluationRechercheUniversitaire.model';
      import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';
      import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirEvaluationRechercheUniversitaire-create',
  templateUrl: './communauteSavoirEvaluationRechercheUniversitaire-create.component.html',
  styleUrls: ['./communauteSavoirEvaluationRechercheUniversitaire-create.component.css']
})
export class CommunauteSavoirEvaluationRechercheUniversitaireCreateComponent implements OnInit {

constructor(private communauteSavoirEvaluationRechercheUniversitaireService: CommunauteSavoirEvaluationRechercheUniversitaireService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.communauteSavoirEvaluationRechercheUniversitaireService.save().subscribe(communauteSavoirEvaluationRechercheUniversitaire=>{
          
       this.communauteSavoirEvaluationRechercheUniversitaires.push({...communauteSavoirEvaluationRechercheUniversitaire});
       this.createCommunauteSavoirEvaluationRechercheUniversitaireDialog = false;
       this.selectedCommunauteSavoirEvaluationRechercheUniversitaire = new CommunauteSavoirEvaluationRechercheUniversitaireVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCommunauteSavoirEvaluationRechercheUniversitaireDialog  = false;
}

// getters and setters 

get communauteSavoirEvaluationRechercheUniversitaires(): Array<CommunauteSavoirEvaluationRechercheUniversitaireVo> {
    return this.communauteSavoirEvaluationRechercheUniversitaireService.communauteSavoirEvaluationRechercheUniversitaires;
       }
set communauteSavoirEvaluationRechercheUniversitaires(value: Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.communauteSavoirEvaluationRechercheUniversitaires = value;
       } 

 get selectedCommunauteSavoirEvaluationRechercheUniversitaire():CommunauteSavoirEvaluationRechercheUniversitaireVo {
           return this.communauteSavoirEvaluationRechercheUniversitaireService.selectedCommunauteSavoirEvaluationRechercheUniversitaire;
       }
    set selectedCommunauteSavoirEvaluationRechercheUniversitaire(value: CommunauteSavoirEvaluationRechercheUniversitaireVo) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.selectedCommunauteSavoirEvaluationRechercheUniversitaire = value;
       }
  
   get createCommunauteSavoirEvaluationRechercheUniversitaireDialog():boolean {
           return this.communauteSavoirEvaluationRechercheUniversitaireService.createCommunauteSavoirEvaluationRechercheUniversitaireDialog;
       }
    set createCommunauteSavoirEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.createCommunauteSavoirEvaluationRechercheUniversitaireDialog= value;
       }


}