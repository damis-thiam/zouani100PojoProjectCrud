import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirService} from '../../../controller/service/CommunauteSavoir.service';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoir-create',
  templateUrl: './communauteSavoir-create.component.html',
  styleUrls: ['./communauteSavoir-create.component.css']
})
export class CommunauteSavoirCreateComponent implements OnInit {

constructor(private communauteSavoirService: CommunauteSavoirService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.communauteSavoirService.save().subscribe(communauteSavoir=>{
          
       this.communauteSavoirs.push({...communauteSavoir});
       this.createCommunauteSavoirDialog = false;
       this.selectedCommunauteSavoir = new CommunauteSavoirVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCommunauteSavoirDialog  = false;
}

// getters and setters 

get communauteSavoirs(): Array<CommunauteSavoirVo> {
    return this.communauteSavoirService.communauteSavoirs;
       }
set communauteSavoirs(value: Array<CommunauteSavoirVo>) {
        this.communauteSavoirService.communauteSavoirs = value;
       } 

 get selectedCommunauteSavoir():CommunauteSavoirVo {
           return this.communauteSavoirService.selectedCommunauteSavoir;
       }
    set selectedCommunauteSavoir(value: CommunauteSavoirVo) {
        this.communauteSavoirService.selectedCommunauteSavoir = value;
       }
  
   get createCommunauteSavoirDialog():boolean {
           return this.communauteSavoirService.createCommunauteSavoirDialog;
       }
    set createCommunauteSavoirDialog(value: boolean) {
        this.communauteSavoirService.createCommunauteSavoirDialog= value;
       }


}