import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueService} from '../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifique-create',
  templateUrl: './disciplineScientifique-create.component.html',
  styleUrls: ['./disciplineScientifique-create.component.css']
})
export class DisciplineScientifiqueCreateComponent implements OnInit {

constructor(private disciplineScientifiqueService: DisciplineScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.disciplineScientifiqueService.save().subscribe(disciplineScientifique=>{
          
       this.disciplineScientifiques.push({...disciplineScientifique});
       this.createDisciplineScientifiqueDialog = false;
       this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDisciplineScientifiqueDialog  = false;
}

// getters and setters 

get disciplineScientifiques(): Array<DisciplineScientifiqueVo> {
    return this.disciplineScientifiqueService.disciplineScientifiques;
       }
set disciplineScientifiques(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueService.disciplineScientifiques = value;
       } 

 get selectedDisciplineScientifique():DisciplineScientifiqueVo {
           return this.disciplineScientifiqueService.selectedDisciplineScientifique;
       }
    set selectedDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.selectedDisciplineScientifique = value;
       }
  
   get createDisciplineScientifiqueDialog():boolean {
           return this.disciplineScientifiqueService.createDisciplineScientifiqueDialog;
       }
    set createDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.createDisciplineScientifiqueDialog= value;
       }


}