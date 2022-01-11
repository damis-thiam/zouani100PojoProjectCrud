import {Component, OnInit} from '@angular/core';
import {NiveauFormationService} from '../../../controller/service/NiveauFormation.service';
import {NiveauFormationVo} from '../../../controller/model/NiveauFormation.model';

@Component({
  selector: 'app-niveauFormation-create',
  templateUrl: './niveauFormation-create.component.html',
  styleUrls: ['./niveauFormation-create.component.css']
})
export class NiveauFormationCreateComponent implements OnInit {

constructor(private niveauFormationService: NiveauFormationService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.niveauFormationService.save().subscribe(niveauFormation=>{
          
       this.niveauFormations.push({...niveauFormation});
       this.createNiveauFormationDialog = false;
       this.selectedNiveauFormation = new NiveauFormationVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createNiveauFormationDialog  = false;
}

// getters and setters 

get niveauFormations(): Array<NiveauFormationVo> {
    return this.niveauFormationService.niveauFormations;
       }
set niveauFormations(value: Array<NiveauFormationVo>) {
        this.niveauFormationService.niveauFormations = value;
       } 

 get selectedNiveauFormation():NiveauFormationVo {
           return this.niveauFormationService.selectedNiveauFormation;
       }
    set selectedNiveauFormation(value: NiveauFormationVo) {
        this.niveauFormationService.selectedNiveauFormation = value;
       }
  
   get createNiveauFormationDialog():boolean {
           return this.niveauFormationService.createNiveauFormationDialog;
       }
    set createNiveauFormationDialog(value: boolean) {
        this.niveauFormationService.createNiveauFormationDialog= value;
       }


}