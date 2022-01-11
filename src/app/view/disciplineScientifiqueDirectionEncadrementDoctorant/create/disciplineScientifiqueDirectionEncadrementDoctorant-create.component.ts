import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueDirectionEncadrementDoctorantService} from '../../../controller/service/DisciplineScientifiqueDirectionEncadrementDoctorant.service';
import {DisciplineScientifiqueDirectionEncadrementDoctorantVo} from '../../../controller/model/DisciplineScientifiqueDirectionEncadrementDoctorant.model';
      import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';
      import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueDirectionEncadrementDoctorant-create',
  templateUrl: './disciplineScientifiqueDirectionEncadrementDoctorant-create.component.html',
  styleUrls: ['./disciplineScientifiqueDirectionEncadrementDoctorant-create.component.css']
})
export class DisciplineScientifiqueDirectionEncadrementDoctorantCreateComponent implements OnInit {

constructor(private disciplineScientifiqueDirectionEncadrementDoctorantService: DisciplineScientifiqueDirectionEncadrementDoctorantService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.disciplineScientifiqueDirectionEncadrementDoctorantService.save().subscribe(disciplineScientifiqueDirectionEncadrementDoctorant=>{
          
       this.disciplineScientifiqueDirectionEncadrementDoctorants.push({...disciplineScientifiqueDirectionEncadrementDoctorant});
       this.createDisciplineScientifiqueDirectionEncadrementDoctorantDialog = false;
       this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant = new DisciplineScientifiqueDirectionEncadrementDoctorantVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDisciplineScientifiqueDirectionEncadrementDoctorantDialog  = false;
}

// getters and setters 

get disciplineScientifiqueDirectionEncadrementDoctorants(): Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo> {
    return this.disciplineScientifiqueDirectionEncadrementDoctorantService.disciplineScientifiqueDirectionEncadrementDoctorants;
       }
set disciplineScientifiqueDirectionEncadrementDoctorants(value: Array<DisciplineScientifiqueDirectionEncadrementDoctorantVo>) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.disciplineScientifiqueDirectionEncadrementDoctorants = value;
       } 

 get selectedDisciplineScientifiqueDirectionEncadrementDoctorant():DisciplineScientifiqueDirectionEncadrementDoctorantVo {
           return this.disciplineScientifiqueDirectionEncadrementDoctorantService.selectedDisciplineScientifiqueDirectionEncadrementDoctorant;
       }
    set selectedDisciplineScientifiqueDirectionEncadrementDoctorant(value: DisciplineScientifiqueDirectionEncadrementDoctorantVo) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.selectedDisciplineScientifiqueDirectionEncadrementDoctorant = value;
       }
  
   get createDisciplineScientifiqueDirectionEncadrementDoctorantDialog():boolean {
           return this.disciplineScientifiqueDirectionEncadrementDoctorantService.createDisciplineScientifiqueDirectionEncadrementDoctorantDialog;
       }
    set createDisciplineScientifiqueDirectionEncadrementDoctorantDialog(value: boolean) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.createDisciplineScientifiqueDirectionEncadrementDoctorantDialog= value;
       }


}