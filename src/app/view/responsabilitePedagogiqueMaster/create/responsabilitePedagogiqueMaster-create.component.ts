import {Component, OnInit} from '@angular/core';
import {ResponsabilitePedagogiqueMasterService} from '../../../controller/service/ResponsabilitePedagogiqueMaster.service';
import {ResponsabilitePedagogiqueMasterVo} from '../../../controller/model/ResponsabilitePedagogiqueMaster.model';
      import {MasterVo} from '../../../controller/model/Master.model';
      import {StatutMasterVo} from '../../../controller/model/StatutMaster.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-responsabilitePedagogiqueMaster-create',
  templateUrl: './responsabilitePedagogiqueMaster-create.component.html',
  styleUrls: ['./responsabilitePedagogiqueMaster-create.component.css']
})
export class ResponsabilitePedagogiqueMasterCreateComponent implements OnInit {

constructor(private responsabilitePedagogiqueMasterService: ResponsabilitePedagogiqueMasterService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.responsabilitePedagogiqueMasterService.save().subscribe(responsabilitePedagogiqueMaster=>{
          
       this.responsabilitePedagogiqueMasters.push({...responsabilitePedagogiqueMaster});
       this.createResponsabilitePedagogiqueMasterDialog = false;
       this.selectedResponsabilitePedagogiqueMaster = new ResponsabilitePedagogiqueMasterVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createResponsabilitePedagogiqueMasterDialog  = false;
}

// getters and setters 

get responsabilitePedagogiqueMasters(): Array<ResponsabilitePedagogiqueMasterVo> {
    return this.responsabilitePedagogiqueMasterService.responsabilitePedagogiqueMasters;
       }
set responsabilitePedagogiqueMasters(value: Array<ResponsabilitePedagogiqueMasterVo>) {
        this.responsabilitePedagogiqueMasterService.responsabilitePedagogiqueMasters = value;
       } 

 get selectedResponsabilitePedagogiqueMaster():ResponsabilitePedagogiqueMasterVo {
           return this.responsabilitePedagogiqueMasterService.selectedResponsabilitePedagogiqueMaster;
       }
    set selectedResponsabilitePedagogiqueMaster(value: ResponsabilitePedagogiqueMasterVo) {
        this.responsabilitePedagogiqueMasterService.selectedResponsabilitePedagogiqueMaster = value;
       }
  
   get createResponsabilitePedagogiqueMasterDialog():boolean {
           return this.responsabilitePedagogiqueMasterService.createResponsabilitePedagogiqueMasterDialog;
       }
    set createResponsabilitePedagogiqueMasterDialog(value: boolean) {
        this.responsabilitePedagogiqueMasterService.createResponsabilitePedagogiqueMasterDialog= value;
       }


}