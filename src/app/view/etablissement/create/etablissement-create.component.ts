import {Component, OnInit} from '@angular/core';
import {EtablissementService} from '../../../controller/service/Etablissement.service';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissement-create',
  templateUrl: './etablissement-create.component.html',
  styleUrls: ['./etablissement-create.component.css']
})
export class EtablissementCreateComponent implements OnInit {

constructor(private etablissementService: EtablissementService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.etablissementService.save().subscribe(etablissement=>{
          
       this.etablissements.push({...etablissement});
       this.createEtablissementDialog = false;
       this.selectedEtablissement = new EtablissementVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEtablissementDialog  = false;
}

// getters and setters 

get etablissements(): Array<EtablissementVo> {
    return this.etablissementService.etablissements;
       }
set etablissements(value: Array<EtablissementVo>) {
        this.etablissementService.etablissements = value;
       } 

 get selectedEtablissement():EtablissementVo {
           return this.etablissementService.selectedEtablissement;
       }
    set selectedEtablissement(value: EtablissementVo) {
        this.etablissementService.selectedEtablissement = value;
       }
  
   get createEtablissementDialog():boolean {
           return this.etablissementService.createEtablissementDialog;
       }
    set createEtablissementDialog(value: boolean) {
        this.etablissementService.createEtablissementDialog= value;
       }


}