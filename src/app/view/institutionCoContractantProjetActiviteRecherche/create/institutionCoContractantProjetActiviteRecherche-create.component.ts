import {Component, OnInit} from '@angular/core';
import {InstitutionCoContractantProjetActiviteRechercheService} from '../../../controller/service/InstitutionCoContractantProjetActiviteRecherche.service';
import {InstitutionCoContractantProjetActiviteRechercheVo} from '../../../controller/model/InstitutionCoContractantProjetActiviteRecherche.model';
      import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
      import {InstitutionCoContractantVo} from '../../../controller/model/InstitutionCoContractant.model';

@Component({
  selector: 'app-institutionCoContractantProjetActiviteRecherche-create',
  templateUrl: './institutionCoContractantProjetActiviteRecherche-create.component.html',
  styleUrls: ['./institutionCoContractantProjetActiviteRecherche-create.component.css']
})
export class InstitutionCoContractantProjetActiviteRechercheCreateComponent implements OnInit {

constructor(private institutionCoContractantProjetActiviteRechercheService: InstitutionCoContractantProjetActiviteRechercheService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.institutionCoContractantProjetActiviteRechercheService.save().subscribe(institutionCoContractantProjetActiviteRecherche=>{
          
       this.institutionCoContractantProjetActiviteRecherches.push({...institutionCoContractantProjetActiviteRecherche});
       this.createInstitutionCoContractantProjetActiviteRechercheDialog = false;
       this.selectedInstitutionCoContractantProjetActiviteRecherche = new InstitutionCoContractantProjetActiviteRechercheVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createInstitutionCoContractantProjetActiviteRechercheDialog  = false;
}

// getters and setters 

get institutionCoContractantProjetActiviteRecherches(): Array<InstitutionCoContractantProjetActiviteRechercheVo> {
    return this.institutionCoContractantProjetActiviteRechercheService.institutionCoContractantProjetActiviteRecherches;
       }
set institutionCoContractantProjetActiviteRecherches(value: Array<InstitutionCoContractantProjetActiviteRechercheVo>) {
        this.institutionCoContractantProjetActiviteRechercheService.institutionCoContractantProjetActiviteRecherches = value;
       } 

 get selectedInstitutionCoContractantProjetActiviteRecherche():InstitutionCoContractantProjetActiviteRechercheVo {
           return this.institutionCoContractantProjetActiviteRechercheService.selectedInstitutionCoContractantProjetActiviteRecherche;
       }
    set selectedInstitutionCoContractantProjetActiviteRecherche(value: InstitutionCoContractantProjetActiviteRechercheVo) {
        this.institutionCoContractantProjetActiviteRechercheService.selectedInstitutionCoContractantProjetActiviteRecherche = value;
       }
  
   get createInstitutionCoContractantProjetActiviteRechercheDialog():boolean {
           return this.institutionCoContractantProjetActiviteRechercheService.createInstitutionCoContractantProjetActiviteRechercheDialog;
       }
    set createInstitutionCoContractantProjetActiviteRechercheDialog(value: boolean) {
        this.institutionCoContractantProjetActiviteRechercheService.createInstitutionCoContractantProjetActiviteRechercheDialog= value;
       }


}