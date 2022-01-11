import {Component, OnInit} from '@angular/core';
import {CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/CaracterisationDeveloppementDeSavoirEtInnovationScientifique.service';
import {CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/CaracterisationDeveloppementDeSavoirEtInnovationScientifique.model';
      import {CaracterisationVo} from '../../../controller/model/Caracterisation.model';
      import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';

@Component({
  selector: 'app-caracterisationDeveloppementDeSavoirEtInnovationScientifique-create',
  templateUrl: './caracterisationDeveloppementDeSavoirEtInnovationScientifique-create.component.html',
  styleUrls: ['./caracterisationDeveloppementDeSavoirEtInnovationScientifique-create.component.css']
})
export class CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueCreateComponent implements OnInit {

constructor(private caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.save().subscribe(caracterisationDeveloppementDeSavoirEtInnovationScientifique=>{
          
       this.caracterisationDeveloppementDeSavoirEtInnovationScientifiques.push({...caracterisationDeveloppementDeSavoirEtInnovationScientifique});
       this.createCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
       this.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique = new CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog  = false;
}

// getters and setters 

get caracterisationDeveloppementDeSavoirEtInnovationScientifiques(): Array<CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo> {
    return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.caracterisationDeveloppementDeSavoirEtInnovationScientifiques;
       }
set caracterisationDeveloppementDeSavoirEtInnovationScientifiques(value: Array<CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.caracterisationDeveloppementDeSavoirEtInnovationScientifiques = value;
       } 

 get selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique():CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique(value: CaracterisationDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.selectedCaracterisationDeveloppementDeSavoirEtInnovationScientifique = value;
       }
  
   get createCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.createCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set createCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.caracterisationDeveloppementDeSavoirEtInnovationScientifiqueService.createCaracterisationDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }


}