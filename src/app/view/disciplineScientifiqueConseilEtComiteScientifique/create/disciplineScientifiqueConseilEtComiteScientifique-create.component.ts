import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueConseilEtComiteScientifiqueService} from '../../../controller/service/DisciplineScientifiqueConseilEtComiteScientifique.service';
import {DisciplineScientifiqueConseilEtComiteScientifiqueVo} from '../../../controller/model/DisciplineScientifiqueConseilEtComiteScientifique.model';
      import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
      import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueConseilEtComiteScientifique-create',
  templateUrl: './disciplineScientifiqueConseilEtComiteScientifique-create.component.html',
  styleUrls: ['./disciplineScientifiqueConseilEtComiteScientifique-create.component.css']
})
export class DisciplineScientifiqueConseilEtComiteScientifiqueCreateComponent implements OnInit {

constructor(private disciplineScientifiqueConseilEtComiteScientifiqueService: DisciplineScientifiqueConseilEtComiteScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.disciplineScientifiqueConseilEtComiteScientifiqueService.save().subscribe(disciplineScientifiqueConseilEtComiteScientifique=>{
          
       this.disciplineScientifiqueConseilEtComiteScientifiques.push({...disciplineScientifiqueConseilEtComiteScientifique});
       this.createDisciplineScientifiqueConseilEtComiteScientifiqueDialog = false;
       this.selectedDisciplineScientifiqueConseilEtComiteScientifique = new DisciplineScientifiqueConseilEtComiteScientifiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDisciplineScientifiqueConseilEtComiteScientifiqueDialog  = false;
}

// getters and setters 

get disciplineScientifiqueConseilEtComiteScientifiques(): Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo> {
    return this.disciplineScientifiqueConseilEtComiteScientifiqueService.disciplineScientifiqueConseilEtComiteScientifiques;
       }
set disciplineScientifiqueConseilEtComiteScientifiques(value: Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.disciplineScientifiqueConseilEtComiteScientifiques = value;
       } 

 get selectedDisciplineScientifiqueConseilEtComiteScientifique():DisciplineScientifiqueConseilEtComiteScientifiqueVo {
           return this.disciplineScientifiqueConseilEtComiteScientifiqueService.selectedDisciplineScientifiqueConseilEtComiteScientifique;
       }
    set selectedDisciplineScientifiqueConseilEtComiteScientifique(value: DisciplineScientifiqueConseilEtComiteScientifiqueVo) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.selectedDisciplineScientifiqueConseilEtComiteScientifique = value;
       }
  
   get createDisciplineScientifiqueConseilEtComiteScientifiqueDialog():boolean {
           return this.disciplineScientifiqueConseilEtComiteScientifiqueService.createDisciplineScientifiqueConseilEtComiteScientifiqueDialog;
       }
    set createDisciplineScientifiqueConseilEtComiteScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.createDisciplineScientifiqueConseilEtComiteScientifiqueDialog= value;
       }


}