import {Component, OnInit} from '@angular/core';
import {NiveauEtudeEnseignementService} from '../../../controller/service/NiveauEtudeEnseignement.service';
import {NiveauEtudeEnseignementVo} from '../../../controller/model/NiveauEtudeEnseignement.model';
      import {EnseignementVo} from '../../../controller/model/Enseignement.model';
      import {NiveauEtudeVo} from '../../../controller/model/NiveauEtude.model';

@Component({
  selector: 'app-niveauEtudeEnseignement-create',
  templateUrl: './niveauEtudeEnseignement-create.component.html',
  styleUrls: ['./niveauEtudeEnseignement-create.component.css']
})
export class NiveauEtudeEnseignementCreateComponent implements OnInit {

constructor(private niveauEtudeEnseignementService: NiveauEtudeEnseignementService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.niveauEtudeEnseignementService.save().subscribe(niveauEtudeEnseignement=>{
          
       this.niveauEtudeEnseignements.push({...niveauEtudeEnseignement});
       this.createNiveauEtudeEnseignementDialog = false;
       this.selectedNiveauEtudeEnseignement = new NiveauEtudeEnseignementVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createNiveauEtudeEnseignementDialog  = false;
}

// getters and setters 

get niveauEtudeEnseignements(): Array<NiveauEtudeEnseignementVo> {
    return this.niveauEtudeEnseignementService.niveauEtudeEnseignements;
       }
set niveauEtudeEnseignements(value: Array<NiveauEtudeEnseignementVo>) {
        this.niveauEtudeEnseignementService.niveauEtudeEnseignements = value;
       } 

 get selectedNiveauEtudeEnseignement():NiveauEtudeEnseignementVo {
           return this.niveauEtudeEnseignementService.selectedNiveauEtudeEnseignement;
       }
    set selectedNiveauEtudeEnseignement(value: NiveauEtudeEnseignementVo) {
        this.niveauEtudeEnseignementService.selectedNiveauEtudeEnseignement = value;
       }
  
   get createNiveauEtudeEnseignementDialog():boolean {
           return this.niveauEtudeEnseignementService.createNiveauEtudeEnseignementDialog;
       }
    set createNiveauEtudeEnseignementDialog(value: boolean) {
        this.niveauEtudeEnseignementService.createNiveauEtudeEnseignementDialog= value;
       }


}