import {Component, OnInit} from '@angular/core';
import {EtablissementEnseignementService} from '../../../controller/service/EtablissementEnseignement.service';
import {EtablissementEnseignementVo} from '../../../controller/model/EtablissementEnseignement.model';
      import {EnseignementVo} from '../../../controller/model/Enseignement.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissementEnseignement-create',
  templateUrl: './etablissementEnseignement-create.component.html',
  styleUrls: ['./etablissementEnseignement-create.component.css']
})
export class EtablissementEnseignementCreateComponent implements OnInit {

constructor(private etablissementEnseignementService: EtablissementEnseignementService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.etablissementEnseignementService.save().subscribe(etablissementEnseignement=>{
          
       this.etablissementEnseignements.push({...etablissementEnseignement});
       this.createEtablissementEnseignementDialog = false;
       this.selectedEtablissementEnseignement = new EtablissementEnseignementVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEtablissementEnseignementDialog  = false;
}

// getters and setters 

get etablissementEnseignements(): Array<EtablissementEnseignementVo> {
    return this.etablissementEnseignementService.etablissementEnseignements;
       }
set etablissementEnseignements(value: Array<EtablissementEnseignementVo>) {
        this.etablissementEnseignementService.etablissementEnseignements = value;
       } 

 get selectedEtablissementEnseignement():EtablissementEnseignementVo {
           return this.etablissementEnseignementService.selectedEtablissementEnseignement;
       }
    set selectedEtablissementEnseignement(value: EtablissementEnseignementVo) {
        this.etablissementEnseignementService.selectedEtablissementEnseignement = value;
       }
  
   get createEtablissementEnseignementDialog():boolean {
           return this.etablissementEnseignementService.createEtablissementEnseignementDialog;
       }
    set createEtablissementEnseignementDialog(value: boolean) {
        this.etablissementEnseignementService.createEtablissementEnseignementDialog= value;
       }


}