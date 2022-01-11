import {Component, OnInit} from '@angular/core';
import {ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.service';
import {ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.model';
      import {ModeDiffusionVo} from '../../../controller/model/ModeDiffusion.model';
      import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';

@Component({
  selector: 'app-modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-create',
  templateUrl: './modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-create.component.html',
  styleUrls: ['./modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-create.component.css']
})
export class ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueCreateComponent implements OnInit {

constructor(private modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.save().subscribe(modeDiffusionDeveloppementDeSavoirEtInnovationScientifique=>{
          
       this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques.push({...modeDiffusionDeveloppementDeSavoirEtInnovationScientifique});
       this.createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
       this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = new ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog  = false;
}

// getters and setters 

get modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques(): Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo> {
    return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques;
       }
set modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques(value: Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques = value;
       } 

 get selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique():ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(value: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = value;
       }
  
   get createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }


}