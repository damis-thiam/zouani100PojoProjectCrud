import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirConseilEtComiteScientifiqueService} from '../../../controller/service/CommunauteSavoirConseilEtComiteScientifique.service';
import {CommunauteSavoirConseilEtComiteScientifiqueVo} from '../../../controller/model/CommunauteSavoirConseilEtComiteScientifique.model';
      import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
      import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirConseilEtComiteScientifique-create',
  templateUrl: './communauteSavoirConseilEtComiteScientifique-create.component.html',
  styleUrls: ['./communauteSavoirConseilEtComiteScientifique-create.component.css']
})
export class CommunauteSavoirConseilEtComiteScientifiqueCreateComponent implements OnInit {

constructor(private communauteSavoirConseilEtComiteScientifiqueService: CommunauteSavoirConseilEtComiteScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.communauteSavoirConseilEtComiteScientifiqueService.save().subscribe(communauteSavoirConseilEtComiteScientifique=>{
          
       this.communauteSavoirConseilEtComiteScientifiques.push({...communauteSavoirConseilEtComiteScientifique});
       this.createCommunauteSavoirConseilEtComiteScientifiqueDialog = false;
       this.selectedCommunauteSavoirConseilEtComiteScientifique = new CommunauteSavoirConseilEtComiteScientifiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCommunauteSavoirConseilEtComiteScientifiqueDialog  = false;
}

// getters and setters 

get communauteSavoirConseilEtComiteScientifiques(): Array<CommunauteSavoirConseilEtComiteScientifiqueVo> {
    return this.communauteSavoirConseilEtComiteScientifiqueService.communauteSavoirConseilEtComiteScientifiques;
       }
set communauteSavoirConseilEtComiteScientifiques(value: Array<CommunauteSavoirConseilEtComiteScientifiqueVo>) {
        this.communauteSavoirConseilEtComiteScientifiqueService.communauteSavoirConseilEtComiteScientifiques = value;
       } 

 get selectedCommunauteSavoirConseilEtComiteScientifique():CommunauteSavoirConseilEtComiteScientifiqueVo {
           return this.communauteSavoirConseilEtComiteScientifiqueService.selectedCommunauteSavoirConseilEtComiteScientifique;
       }
    set selectedCommunauteSavoirConseilEtComiteScientifique(value: CommunauteSavoirConseilEtComiteScientifiqueVo) {
        this.communauteSavoirConseilEtComiteScientifiqueService.selectedCommunauteSavoirConseilEtComiteScientifique = value;
       }
  
   get createCommunauteSavoirConseilEtComiteScientifiqueDialog():boolean {
           return this.communauteSavoirConseilEtComiteScientifiqueService.createCommunauteSavoirConseilEtComiteScientifiqueDialog;
       }
    set createCommunauteSavoirConseilEtComiteScientifiqueDialog(value: boolean) {
        this.communauteSavoirConseilEtComiteScientifiqueService.createCommunauteSavoirConseilEtComiteScientifiqueDialog= value;
       }


}