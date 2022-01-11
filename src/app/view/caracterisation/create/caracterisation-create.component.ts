import {Component, OnInit} from '@angular/core';
import {CaracterisationService} from '../../../controller/service/Caracterisation.service';
import {CaracterisationVo} from '../../../controller/model/Caracterisation.model';

@Component({
  selector: 'app-caracterisation-create',
  templateUrl: './caracterisation-create.component.html',
  styleUrls: ['./caracterisation-create.component.css']
})
export class CaracterisationCreateComponent implements OnInit {

constructor(private caracterisationService: CaracterisationService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.caracterisationService.save().subscribe(caracterisation=>{
          
       this.caracterisations.push({...caracterisation});
       this.createCaracterisationDialog = false;
       this.selectedCaracterisation = new CaracterisationVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCaracterisationDialog  = false;
}

// getters and setters 

get caracterisations(): Array<CaracterisationVo> {
    return this.caracterisationService.caracterisations;
       }
set caracterisations(value: Array<CaracterisationVo>) {
        this.caracterisationService.caracterisations = value;
       } 

 get selectedCaracterisation():CaracterisationVo {
           return this.caracterisationService.selectedCaracterisation;
       }
    set selectedCaracterisation(value: CaracterisationVo) {
        this.caracterisationService.selectedCaracterisation = value;
       }
  
   get createCaracterisationDialog():boolean {
           return this.caracterisationService.createCaracterisationDialog;
       }
    set createCaracterisationDialog(value: boolean) {
        this.caracterisationService.createCaracterisationDialog= value;
       }


}