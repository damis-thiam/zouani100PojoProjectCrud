import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueExpertiseScientifiqueService} from '../../../controller/service/DisciplineScientifiqueExpertiseScientifique.service';
import {DisciplineScientifiqueExpertiseScientifiqueVo} from '../../../controller/model/DisciplineScientifiqueExpertiseScientifique.model';
      import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
      import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueExpertiseScientifique-create',
  templateUrl: './disciplineScientifiqueExpertiseScientifique-create.component.html',
  styleUrls: ['./disciplineScientifiqueExpertiseScientifique-create.component.css']
})
export class DisciplineScientifiqueExpertiseScientifiqueCreateComponent implements OnInit {

constructor(private disciplineScientifiqueExpertiseScientifiqueService: DisciplineScientifiqueExpertiseScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.disciplineScientifiqueExpertiseScientifiqueService.save().subscribe(disciplineScientifiqueExpertiseScientifique=>{
          
       this.disciplineScientifiqueExpertiseScientifiques.push({...disciplineScientifiqueExpertiseScientifique});
       this.createDisciplineScientifiqueExpertiseScientifiqueDialog = false;
       this.selectedDisciplineScientifiqueExpertiseScientifique = new DisciplineScientifiqueExpertiseScientifiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDisciplineScientifiqueExpertiseScientifiqueDialog  = false;
}

// getters and setters 

get disciplineScientifiqueExpertiseScientifiques(): Array<DisciplineScientifiqueExpertiseScientifiqueVo> {
    return this.disciplineScientifiqueExpertiseScientifiqueService.disciplineScientifiqueExpertiseScientifiques;
       }
set disciplineScientifiqueExpertiseScientifiques(value: Array<DisciplineScientifiqueExpertiseScientifiqueVo>) {
        this.disciplineScientifiqueExpertiseScientifiqueService.disciplineScientifiqueExpertiseScientifiques = value;
       } 

 get selectedDisciplineScientifiqueExpertiseScientifique():DisciplineScientifiqueExpertiseScientifiqueVo {
           return this.disciplineScientifiqueExpertiseScientifiqueService.selectedDisciplineScientifiqueExpertiseScientifique;
       }
    set selectedDisciplineScientifiqueExpertiseScientifique(value: DisciplineScientifiqueExpertiseScientifiqueVo) {
        this.disciplineScientifiqueExpertiseScientifiqueService.selectedDisciplineScientifiqueExpertiseScientifique = value;
       }
  
   get createDisciplineScientifiqueExpertiseScientifiqueDialog():boolean {
           return this.disciplineScientifiqueExpertiseScientifiqueService.createDisciplineScientifiqueExpertiseScientifiqueDialog;
       }
    set createDisciplineScientifiqueExpertiseScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueExpertiseScientifiqueService.createDisciplineScientifiqueExpertiseScientifiqueDialog= value;
       }


}