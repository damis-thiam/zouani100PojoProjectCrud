import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirEvenementColloqueScientifiquesService} from '../../../controller/service/CommunauteSavoirEvenementColloqueScientifiques.service';
import {CommunauteSavoirEvenementColloqueScientifiquesVo} from '../../../controller/model/CommunauteSavoirEvenementColloqueScientifiques.model';
      import {EvenementColloqueScienntifiqueVo} from '../../../controller/model/EvenementColloqueScienntifique.model';
      import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirEvenementColloqueScientifiques-create',
  templateUrl: './communauteSavoirEvenementColloqueScientifiques-create.component.html',
  styleUrls: ['./communauteSavoirEvenementColloqueScientifiques-create.component.css']
})
export class CommunauteSavoirEvenementColloqueScientifiquesCreateComponent implements OnInit {

constructor(private communauteSavoirEvenementColloqueScientifiquesService: CommunauteSavoirEvenementColloqueScientifiquesService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.communauteSavoirEvenementColloqueScientifiquesService.save().subscribe(communauteSavoirEvenementColloqueScientifiques=>{
          
       this.communauteSavoirEvenementColloqueScientifiquess.push({...communauteSavoirEvenementColloqueScientifiques});
       this.createCommunauteSavoirEvenementColloqueScientifiquesDialog = false;
       this.selectedCommunauteSavoirEvenementColloqueScientifiques = new CommunauteSavoirEvenementColloqueScientifiquesVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCommunauteSavoirEvenementColloqueScientifiquesDialog  = false;
}

// getters and setters 

get communauteSavoirEvenementColloqueScientifiquess(): Array<CommunauteSavoirEvenementColloqueScientifiquesVo> {
    return this.communauteSavoirEvenementColloqueScientifiquesService.communauteSavoirEvenementColloqueScientifiquess;
       }
set communauteSavoirEvenementColloqueScientifiquess(value: Array<CommunauteSavoirEvenementColloqueScientifiquesVo>) {
        this.communauteSavoirEvenementColloqueScientifiquesService.communauteSavoirEvenementColloqueScientifiquess = value;
       } 

 get selectedCommunauteSavoirEvenementColloqueScientifiques():CommunauteSavoirEvenementColloqueScientifiquesVo {
           return this.communauteSavoirEvenementColloqueScientifiquesService.selectedCommunauteSavoirEvenementColloqueScientifiques;
       }
    set selectedCommunauteSavoirEvenementColloqueScientifiques(value: CommunauteSavoirEvenementColloqueScientifiquesVo) {
        this.communauteSavoirEvenementColloqueScientifiquesService.selectedCommunauteSavoirEvenementColloqueScientifiques = value;
       }
  
   get createCommunauteSavoirEvenementColloqueScientifiquesDialog():boolean {
           return this.communauteSavoirEvenementColloqueScientifiquesService.createCommunauteSavoirEvenementColloqueScientifiquesDialog;
       }
    set createCommunauteSavoirEvenementColloqueScientifiquesDialog(value: boolean) {
        this.communauteSavoirEvenementColloqueScientifiquesService.createCommunauteSavoirEvenementColloqueScientifiquesDialog= value;
       }


}