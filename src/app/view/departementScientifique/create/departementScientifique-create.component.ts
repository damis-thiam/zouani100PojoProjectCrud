import {Component, OnInit} from '@angular/core';
import {DepartementScientifiqueService} from '../../../controller/service/DepartementScientifique.service';
import {DepartementScientifiqueVo} from '../../../controller/model/DepartementScientifique.model';

@Component({
  selector: 'app-departementScientifique-create',
  templateUrl: './departementScientifique-create.component.html',
  styleUrls: ['./departementScientifique-create.component.css']
})
export class DepartementScientifiqueCreateComponent implements OnInit {

constructor(private departementScientifiqueService: DepartementScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.departementScientifiqueService.save().subscribe(departementScientifique=>{
          
       this.departementScientifiques.push({...departementScientifique});
       this.createDepartementScientifiqueDialog = false;
       this.selectedDepartementScientifique = new DepartementScientifiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDepartementScientifiqueDialog  = false;
}

// getters and setters 

get departementScientifiques(): Array<DepartementScientifiqueVo> {
    return this.departementScientifiqueService.departementScientifiques;
       }
set departementScientifiques(value: Array<DepartementScientifiqueVo>) {
        this.departementScientifiqueService.departementScientifiques = value;
       } 

 get selectedDepartementScientifique():DepartementScientifiqueVo {
           return this.departementScientifiqueService.selectedDepartementScientifique;
       }
    set selectedDepartementScientifique(value: DepartementScientifiqueVo) {
        this.departementScientifiqueService.selectedDepartementScientifique = value;
       }
  
   get createDepartementScientifiqueDialog():boolean {
           return this.departementScientifiqueService.createDepartementScientifiqueDialog;
       }
    set createDepartementScientifiqueDialog(value: boolean) {
        this.departementScientifiqueService.createDepartementScientifiqueDialog= value;
       }


}