import {Component, OnInit} from '@angular/core';
import {NatureEnseignementService} from '../../../controller/service/NatureEnseignement.service';
import {NatureEnseignementVo} from '../../../controller/model/NatureEnseignement.model';
      import {EnseignementVo} from '../../../controller/model/Enseignement.model';
      import {NatureEtudeVo} from '../../../controller/model/NatureEtude.model';

@Component({
  selector: 'app-natureEnseignement-create',
  templateUrl: './natureEnseignement-create.component.html',
  styleUrls: ['./natureEnseignement-create.component.css']
})
export class NatureEnseignementCreateComponent implements OnInit {

constructor(private natureEnseignementService: NatureEnseignementService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.natureEnseignementService.save().subscribe(natureEnseignement=>{
          
       this.natureEnseignements.push({...natureEnseignement});
       this.createNatureEnseignementDialog = false;
       this.selectedNatureEnseignement = new NatureEnseignementVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createNatureEnseignementDialog  = false;
}

// getters and setters 

get natureEnseignements(): Array<NatureEnseignementVo> {
    return this.natureEnseignementService.natureEnseignements;
       }
set natureEnseignements(value: Array<NatureEnseignementVo>) {
        this.natureEnseignementService.natureEnseignements = value;
       } 

 get selectedNatureEnseignement():NatureEnseignementVo {
           return this.natureEnseignementService.selectedNatureEnseignement;
       }
    set selectedNatureEnseignement(value: NatureEnseignementVo) {
        this.natureEnseignementService.selectedNatureEnseignement = value;
       }
  
   get createNatureEnseignementDialog():boolean {
           return this.natureEnseignementService.createNatureEnseignementDialog;
       }
    set createNatureEnseignementDialog(value: boolean) {
        this.natureEnseignementService.createNatureEnseignementDialog= value;
       }


}