import {Component, OnInit} from '@angular/core';
import {VieInstitutionnelleService} from '../../../controller/service/VieInstitutionnelle.service';
import {VieInstitutionnelleVo} from '../../../controller/model/VieInstitutionnelle.model';
      import {TypeInstanceVo} from '../../../controller/model/TypeInstance.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';
      import {PaysVo} from '../../../controller/model/Pays.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-vieInstitutionnelle-create',
  templateUrl: './vieInstitutionnelle-create.component.html',
  styleUrls: ['./vieInstitutionnelle-create.component.css']
})
export class VieInstitutionnelleCreateComponent implements OnInit {

constructor(private vieInstitutionnelleService: VieInstitutionnelleService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.vieInstitutionnelleService.save().subscribe(vieInstitutionnelle=>{
          
       this.vieInstitutionnelles.push({...vieInstitutionnelle});
       this.createVieInstitutionnelleDialog = false;
       this.selectedVieInstitutionnelle = new VieInstitutionnelleVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createVieInstitutionnelleDialog  = false;
}

// getters and setters 

get vieInstitutionnelles(): Array<VieInstitutionnelleVo> {
    return this.vieInstitutionnelleService.vieInstitutionnelles;
       }
set vieInstitutionnelles(value: Array<VieInstitutionnelleVo>) {
        this.vieInstitutionnelleService.vieInstitutionnelles = value;
       } 

 get selectedVieInstitutionnelle():VieInstitutionnelleVo {
           return this.vieInstitutionnelleService.selectedVieInstitutionnelle;
       }
    set selectedVieInstitutionnelle(value: VieInstitutionnelleVo) {
        this.vieInstitutionnelleService.selectedVieInstitutionnelle = value;
       }
  
   get createVieInstitutionnelleDialog():boolean {
           return this.vieInstitutionnelleService.createVieInstitutionnelleDialog;
       }
    set createVieInstitutionnelleDialog(value: boolean) {
        this.vieInstitutionnelleService.createVieInstitutionnelleDialog= value;
       }


}