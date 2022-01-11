import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueEncadrementEtudiantService} from '../../../controller/service/DisciplineScientifiqueEncadrementEtudiant.service';
import {DisciplineScientifiqueEncadrementEtudiantVo} from '../../../controller/model/DisciplineScientifiqueEncadrementEtudiant.model';
      import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
      import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueEncadrementEtudiant-create',
  templateUrl: './disciplineScientifiqueEncadrementEtudiant-create.component.html',
  styleUrls: ['./disciplineScientifiqueEncadrementEtudiant-create.component.css']
})
export class DisciplineScientifiqueEncadrementEtudiantCreateComponent implements OnInit {

constructor(private disciplineScientifiqueEncadrementEtudiantService: DisciplineScientifiqueEncadrementEtudiantService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.disciplineScientifiqueEncadrementEtudiantService.save().subscribe(disciplineScientifiqueEncadrementEtudiant=>{
          
       this.disciplineScientifiqueEncadrementEtudiants.push({...disciplineScientifiqueEncadrementEtudiant});
       this.createDisciplineScientifiqueEncadrementEtudiantDialog = false;
       this.selectedDisciplineScientifiqueEncadrementEtudiant = new DisciplineScientifiqueEncadrementEtudiantVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDisciplineScientifiqueEncadrementEtudiantDialog  = false;
}

// getters and setters 

get disciplineScientifiqueEncadrementEtudiants(): Array<DisciplineScientifiqueEncadrementEtudiantVo> {
    return this.disciplineScientifiqueEncadrementEtudiantService.disciplineScientifiqueEncadrementEtudiants;
       }
set disciplineScientifiqueEncadrementEtudiants(value: Array<DisciplineScientifiqueEncadrementEtudiantVo>) {
        this.disciplineScientifiqueEncadrementEtudiantService.disciplineScientifiqueEncadrementEtudiants = value;
       } 

 get selectedDisciplineScientifiqueEncadrementEtudiant():DisciplineScientifiqueEncadrementEtudiantVo {
           return this.disciplineScientifiqueEncadrementEtudiantService.selectedDisciplineScientifiqueEncadrementEtudiant;
       }
    set selectedDisciplineScientifiqueEncadrementEtudiant(value: DisciplineScientifiqueEncadrementEtudiantVo) {
        this.disciplineScientifiqueEncadrementEtudiantService.selectedDisciplineScientifiqueEncadrementEtudiant = value;
       }
  
   get createDisciplineScientifiqueEncadrementEtudiantDialog():boolean {
           return this.disciplineScientifiqueEncadrementEtudiantService.createDisciplineScientifiqueEncadrementEtudiantDialog;
       }
    set createDisciplineScientifiqueEncadrementEtudiantDialog(value: boolean) {
        this.disciplineScientifiqueEncadrementEtudiantService.createDisciplineScientifiqueEncadrementEtudiantDialog= value;
       }


}