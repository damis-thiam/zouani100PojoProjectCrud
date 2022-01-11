import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirExpertiseScientifiqueService} from '../../../controller/service/CommunauteSavoirExpertiseScientifique.service';
import {CommunauteSavoirExpertiseScientifiqueVo} from '../../../controller/model/CommunauteSavoirExpertiseScientifique.model';
      import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
      import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirExpertiseScientifique-create',
  templateUrl: './communauteSavoirExpertiseScientifique-create.component.html',
  styleUrls: ['./communauteSavoirExpertiseScientifique-create.component.css']
})
export class CommunauteSavoirExpertiseScientifiqueCreateComponent implements OnInit {

constructor(private communauteSavoirExpertiseScientifiqueService: CommunauteSavoirExpertiseScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.communauteSavoirExpertiseScientifiqueService.save().subscribe(communauteSavoirExpertiseScientifique=>{
          
       this.communauteSavoirExpertiseScientifiques.push({...communauteSavoirExpertiseScientifique});
       this.createCommunauteSavoirExpertiseScientifiqueDialog = false;
       this.selectedCommunauteSavoirExpertiseScientifique = new CommunauteSavoirExpertiseScientifiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCommunauteSavoirExpertiseScientifiqueDialog  = false;
}

// getters and setters 

get communauteSavoirExpertiseScientifiques(): Array<CommunauteSavoirExpertiseScientifiqueVo> {
    return this.communauteSavoirExpertiseScientifiqueService.communauteSavoirExpertiseScientifiques;
       }
set communauteSavoirExpertiseScientifiques(value: Array<CommunauteSavoirExpertiseScientifiqueVo>) {
        this.communauteSavoirExpertiseScientifiqueService.communauteSavoirExpertiseScientifiques = value;
       } 

 get selectedCommunauteSavoirExpertiseScientifique():CommunauteSavoirExpertiseScientifiqueVo {
           return this.communauteSavoirExpertiseScientifiqueService.selectedCommunauteSavoirExpertiseScientifique;
       }
    set selectedCommunauteSavoirExpertiseScientifique(value: CommunauteSavoirExpertiseScientifiqueVo) {
        this.communauteSavoirExpertiseScientifiqueService.selectedCommunauteSavoirExpertiseScientifique = value;
       }
  
   get createCommunauteSavoirExpertiseScientifiqueDialog():boolean {
           return this.communauteSavoirExpertiseScientifiqueService.createCommunauteSavoirExpertiseScientifiqueDialog;
       }
    set createCommunauteSavoirExpertiseScientifiqueDialog(value: boolean) {
        this.communauteSavoirExpertiseScientifiqueService.createCommunauteSavoirExpertiseScientifiqueDialog= value;
       }


}