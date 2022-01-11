import {Component, OnInit} from '@angular/core';
import {EtablissementProjetService} from '../../../controller/service/EtablissementProjet.service';
import {EtablissementProjetVo} from '../../../controller/model/EtablissementProjet.model';

@Component({
  selector: 'app-etablissementProjet-create',
  templateUrl: './etablissementProjet-create.component.html',
  styleUrls: ['./etablissementProjet-create.component.css']
})
export class EtablissementProjetCreateComponent implements OnInit {

constructor(private etablissementProjetService: EtablissementProjetService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.etablissementProjetService.save().subscribe(etablissementProjet=>{
          
       this.etablissementProjets.push({...etablissementProjet});
       this.createEtablissementProjetDialog = false;
       this.selectedEtablissementProjet = new EtablissementProjetVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEtablissementProjetDialog  = false;
}

// getters and setters 

get etablissementProjets(): Array<EtablissementProjetVo> {
    return this.etablissementProjetService.etablissementProjets;
       }
set etablissementProjets(value: Array<EtablissementProjetVo>) {
        this.etablissementProjetService.etablissementProjets = value;
       } 

 get selectedEtablissementProjet():EtablissementProjetVo {
           return this.etablissementProjetService.selectedEtablissementProjet;
       }
    set selectedEtablissementProjet(value: EtablissementProjetVo) {
        this.etablissementProjetService.selectedEtablissementProjet = value;
       }
  
   get createEtablissementProjetDialog():boolean {
           return this.etablissementProjetService.createEtablissementProjetDialog;
       }
    set createEtablissementProjetDialog(value: boolean) {
        this.etablissementProjetService.createEtablissementProjetDialog= value;
       }


}