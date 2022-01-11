import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirDirectionEncadrementDoctorantService} from '../../../controller/service/CommunauteSavoirDirectionEncadrementDoctorant.service';
import {CommunauteSavoirDirectionEncadrementDoctorantVo} from '../../../controller/model/CommunauteSavoirDirectionEncadrementDoctorant.model';
      import {DirectionEncadrementDoctorantVo} from '../../../controller/model/DirectionEncadrementDoctorant.model';
      import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';

@Component({
  selector: 'app-communauteSavoirDirectionEncadrementDoctorant-create',
  templateUrl: './communauteSavoirDirectionEncadrementDoctorant-create.component.html',
  styleUrls: ['./communauteSavoirDirectionEncadrementDoctorant-create.component.css']
})
export class CommunauteSavoirDirectionEncadrementDoctorantCreateComponent implements OnInit {

constructor(private communauteSavoirDirectionEncadrementDoctorantService: CommunauteSavoirDirectionEncadrementDoctorantService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.communauteSavoirDirectionEncadrementDoctorantService.save().subscribe(communauteSavoirDirectionEncadrementDoctorant=>{
          
       this.communauteSavoirDirectionEncadrementDoctorants.push({...communauteSavoirDirectionEncadrementDoctorant});
       this.createCommunauteSavoirDirectionEncadrementDoctorantDialog = false;
       this.selectedCommunauteSavoirDirectionEncadrementDoctorant = new CommunauteSavoirDirectionEncadrementDoctorantVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCommunauteSavoirDirectionEncadrementDoctorantDialog  = false;
}

// getters and setters 

get communauteSavoirDirectionEncadrementDoctorants(): Array<CommunauteSavoirDirectionEncadrementDoctorantVo> {
    return this.communauteSavoirDirectionEncadrementDoctorantService.communauteSavoirDirectionEncadrementDoctorants;
       }
set communauteSavoirDirectionEncadrementDoctorants(value: Array<CommunauteSavoirDirectionEncadrementDoctorantVo>) {
        this.communauteSavoirDirectionEncadrementDoctorantService.communauteSavoirDirectionEncadrementDoctorants = value;
       } 

 get selectedCommunauteSavoirDirectionEncadrementDoctorant():CommunauteSavoirDirectionEncadrementDoctorantVo {
           return this.communauteSavoirDirectionEncadrementDoctorantService.selectedCommunauteSavoirDirectionEncadrementDoctorant;
       }
    set selectedCommunauteSavoirDirectionEncadrementDoctorant(value: CommunauteSavoirDirectionEncadrementDoctorantVo) {
        this.communauteSavoirDirectionEncadrementDoctorantService.selectedCommunauteSavoirDirectionEncadrementDoctorant = value;
       }
  
   get createCommunauteSavoirDirectionEncadrementDoctorantDialog():boolean {
           return this.communauteSavoirDirectionEncadrementDoctorantService.createCommunauteSavoirDirectionEncadrementDoctorantDialog;
       }
    set createCommunauteSavoirDirectionEncadrementDoctorantDialog(value: boolean) {
        this.communauteSavoirDirectionEncadrementDoctorantService.createCommunauteSavoirDirectionEncadrementDoctorantDialog= value;
       }


}