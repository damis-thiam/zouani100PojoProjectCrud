import {Component, OnInit} from '@angular/core';
import {TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/TypeSavoirDeveloppementDeSavoirEtInnovationScientifique.service';
import {TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/TypeSavoirDeveloppementDeSavoirEtInnovationScientifique.model';
      import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';
      import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';

@Component({
  selector: 'app-typeSavoirDeveloppementDeSavoirEtInnovationScientifique-create',
  templateUrl: './typeSavoirDeveloppementDeSavoirEtInnovationScientifique-create.component.html',
  styleUrls: ['./typeSavoirDeveloppementDeSavoirEtInnovationScientifique-create.component.css']
})
export class TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueCreateComponent implements OnInit {

constructor(private typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.save().subscribe(typeSavoirDeveloppementDeSavoirEtInnovationScientifique=>{
          
       this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques.push({...typeSavoirDeveloppementDeSavoirEtInnovationScientifique});
       this.createTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog = false;
       this.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = new TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog  = false;
}

// getters and setters 

get typeSavoirDeveloppementDeSavoirEtInnovationScientifiques(): Array<TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo> {
    return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques;
       }
set typeSavoirDeveloppementDeSavoirEtInnovationScientifiques(value: Array<TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.typeSavoirDeveloppementDeSavoirEtInnovationScientifiques = value;
       } 

 get selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique():TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique(value: TypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.selectedTypeSavoirDeveloppementDeSavoirEtInnovationScientifique = value;
       }
  
   get createTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.createTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set createTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.typeSavoirDeveloppementDeSavoirEtInnovationScientifiqueService.createTypeSavoirDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }


}