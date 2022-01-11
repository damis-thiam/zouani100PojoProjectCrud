import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueEvenementColloqueScientifiquesService} from '../../../controller/service/DisciplineScientifiqueEvenementColloqueScientifiques.service';
import {DisciplineScientifiqueEvenementColloqueScientifiquesVo} from '../../../controller/model/DisciplineScientifiqueEvenementColloqueScientifiques.model';
      import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
      import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-disciplineScientifiqueEvenementColloqueScientifiques-create',
  templateUrl: './disciplineScientifiqueEvenementColloqueScientifiques-create.component.html',
  styleUrls: ['./disciplineScientifiqueEvenementColloqueScientifiques-create.component.css']
})
export class DisciplineScientifiqueEvenementColloqueScientifiquesCreateComponent implements OnInit {

constructor(private disciplineScientifiqueEvenementColloqueScientifiquesService: DisciplineScientifiqueEvenementColloqueScientifiquesService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.disciplineScientifiqueEvenementColloqueScientifiquesService.save().subscribe(disciplineScientifiqueEvenementColloqueScientifiques=>{
          
       this.disciplineScientifiqueEvenementColloqueScientifiquess.push({...disciplineScientifiqueEvenementColloqueScientifiques});
       this.createDisciplineScientifiqueEvenementColloqueScientifiquesDialog = false;
       this.selectedDisciplineScientifiqueEvenementColloqueScientifiques = new DisciplineScientifiqueEvenementColloqueScientifiquesVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDisciplineScientifiqueEvenementColloqueScientifiquesDialog  = false;
}

// getters and setters 

get disciplineScientifiqueEvenementColloqueScientifiquess(): Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo> {
    return this.disciplineScientifiqueEvenementColloqueScientifiquesService.disciplineScientifiqueEvenementColloqueScientifiquess;
       }
set disciplineScientifiqueEvenementColloqueScientifiquess(value: Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.disciplineScientifiqueEvenementColloqueScientifiquess = value;
       } 

 get selectedDisciplineScientifiqueEvenementColloqueScientifiques():DisciplineScientifiqueEvenementColloqueScientifiquesVo {
           return this.disciplineScientifiqueEvenementColloqueScientifiquesService.selectedDisciplineScientifiqueEvenementColloqueScientifiques;
       }
    set selectedDisciplineScientifiqueEvenementColloqueScientifiques(value: DisciplineScientifiqueEvenementColloqueScientifiquesVo) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.selectedDisciplineScientifiqueEvenementColloqueScientifiques = value;
       }
  
   get createDisciplineScientifiqueEvenementColloqueScientifiquesDialog():boolean {
           return this.disciplineScientifiqueEvenementColloqueScientifiquesService.createDisciplineScientifiqueEvenementColloqueScientifiquesDialog;
       }
    set createDisciplineScientifiqueEvenementColloqueScientifiquesDialog(value: boolean) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.createDisciplineScientifiqueEvenementColloqueScientifiquesDialog= value;
       }


}