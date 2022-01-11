import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {DisciplineScientifiqueDirectionEncadrementDoctorantService} from '../../../controller/service/DisciplineScientifiqueDirectionEncadrementDoctorant.service';
import {DisciplineScientifiqueDirectionEncadrementDoctorantVo} from '../../../controller/model/DisciplineScientifiqueDirectionEncadrementDoctorant.model';
import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';

@Component({
  selector: 'app-disciplineScientifiqueDirectionEncadrementDoctorant-edit',
  templateUrl: './disciplineScientifiqueDirectionEncadrementDoctorant-edit.component.html',
  styleUrls: ['./disciplineScientifiqueDirectionEncadrementDoctorant-edit.component.css']
})
export class DisciplineScientifiqueDirectionEncadrementDoctorantEditComponent implements OnInit {
// declarations
 editDisciplineScientifiqueDirectionEncadrementDoctorantForm = new FormGroup({
  }); 
constructor(private disciplineScientifiqueDirectionEncadrementDoctorantService: DisciplineScientifiqueDirectionEncadrementDoctorantService) { }
// methods 


  ngOnInit(): void {
    this.disciplineScientifiqueDirectionEncadrementDoctorantService.editDisciplineScientifiqueDirectionEncadrementDoctorant$.subscribe(value=>{
    if(value){
     this.editDisciplineScientifiqueDirectionEncadrementDoctorantForm.setValue({
    });
    }
  });
  }



public edit(){ 
    this.disciplineScientifiqueDirectionEncadrementDoctorantService.edit().subscribe(updatedDisciplineScientifiqueDirectionEncadrementDoctorant => {
          const indexOfUpdated = this.disciplineScientifiqueDirectionEncadrementDoctorants.findIndex(
           (DisciplineScientifiqueDirectionEncadrementDoctorant) => DisciplineScientifiqueDirectionEncadrementDoctorant.id === updatedDisciplineScientifiqueDirectionEncadrementDoctorant.id
            );
            indexOfUpdated > -1 ? this.disciplineScientifiqueDirectionEncadrementDoctorants[indexOfUpdated] = updatedDisciplineScientifiqueDirectionEncadrementDoctorant : false;
                });
                  this.editDisciplineScientifiqueDirectionEncadrementDoctorantDialog = false;
    this.selectedDisciplineScientifiqueDirectionEncadrementDoctorant = new DisciplineScientifiqueDirectionEncadrementDoctorantVo();
            }

  hideEditDialog(){
    this.editDisciplineScientifiqueDirectionEncadrementDoctorantDialog = false;
  }
   submit(){
    this.disciplineScientifiqueDirectionEncadrementDoctorantService.edit().subscribe(result=>{
        this.editDisciplineScientifiqueDirectionEncadrementDoctorantDialog = false;
    },error=>{
        console.log(error);
    });
  
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
  
  get editDisciplineScientifiqueDirectionEncadrementDoctorantDialog():boolean {
           return this.disciplineScientifiqueDirectionEncadrementDoctorantService.editDisciplineScientifiqueDirectionEncadrementDoctorantDialog;
       }
  set editDisciplineScientifiqueDirectionEncadrementDoctorantDialog(value: boolean) {
        this.disciplineScientifiqueDirectionEncadrementDoctorantService.editDisciplineScientifiqueDirectionEncadrementDoctorantDialog= value;
       }


}