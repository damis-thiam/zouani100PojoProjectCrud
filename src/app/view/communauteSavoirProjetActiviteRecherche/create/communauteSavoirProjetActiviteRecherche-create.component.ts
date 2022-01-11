import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirProjetActiviteRechercheService} from '../../../controller/service/CommunauteSavoirProjetActiviteRecherche.service';
import {CommunauteSavoirProjetActiviteRechercheVo} from '../../../controller/model/CommunauteSavoirProjetActiviteRecherche.model';
      import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
      import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirProjetActiviteRecherche-create',
  templateUrl: './communauteSavoirProjetActiviteRecherche-create.component.html',
  styleUrls: ['./communauteSavoirProjetActiviteRecherche-create.component.css']
})
export class CommunauteSavoirProjetActiviteRechercheCreateComponent implements OnInit {

constructor(private communauteSavoirProjetActiviteRechercheService: CommunauteSavoirProjetActiviteRechercheService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.communauteSavoirProjetActiviteRechercheService.save().subscribe(communauteSavoirProjetActiviteRecherche=>{
          
       this.communauteSavoirProjetActiviteRecherches.push({...communauteSavoirProjetActiviteRecherche});
       this.createCommunauteSavoirProjetActiviteRechercheDialog = false;
       this.selectedCommunauteSavoirProjetActiviteRecherche = new CommunauteSavoirProjetActiviteRechercheVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCommunauteSavoirProjetActiviteRechercheDialog  = false;
}

// getters and setters 

get communauteSavoirProjetActiviteRecherches(): Array<CommunauteSavoirProjetActiviteRechercheVo> {
    return this.communauteSavoirProjetActiviteRechercheService.communauteSavoirProjetActiviteRecherches;
       }
set communauteSavoirProjetActiviteRecherches(value: Array<CommunauteSavoirProjetActiviteRechercheVo>) {
        this.communauteSavoirProjetActiviteRechercheService.communauteSavoirProjetActiviteRecherches = value;
       } 

 get selectedCommunauteSavoirProjetActiviteRecherche():CommunauteSavoirProjetActiviteRechercheVo {
           return this.communauteSavoirProjetActiviteRechercheService.selectedCommunauteSavoirProjetActiviteRecherche;
       }
    set selectedCommunauteSavoirProjetActiviteRecherche(value: CommunauteSavoirProjetActiviteRechercheVo) {
        this.communauteSavoirProjetActiviteRechercheService.selectedCommunauteSavoirProjetActiviteRecherche = value;
       }
  
   get createCommunauteSavoirProjetActiviteRechercheDialog():boolean {
           return this.communauteSavoirProjetActiviteRechercheService.createCommunauteSavoirProjetActiviteRechercheDialog;
       }
    set createCommunauteSavoirProjetActiviteRechercheDialog(value: boolean) {
        this.communauteSavoirProjetActiviteRechercheService.createCommunauteSavoirProjetActiviteRechercheDialog= value;
       }


}