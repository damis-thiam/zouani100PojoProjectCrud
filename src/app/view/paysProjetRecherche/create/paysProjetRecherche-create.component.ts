import {Component, OnInit} from '@angular/core';
import {PaysProjetRechercheService} from '../../../controller/service/PaysProjetRecherche.service';
import {PaysProjetRechercheVo} from '../../../controller/model/PaysProjetRecherche.model';
      import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysProjetRecherche-create',
  templateUrl: './paysProjetRecherche-create.component.html',
  styleUrls: ['./paysProjetRecherche-create.component.css']
})
export class PaysProjetRechercheCreateComponent implements OnInit {

constructor(private paysProjetRechercheService: PaysProjetRechercheService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.paysProjetRechercheService.save().subscribe(paysProjetRecherche=>{
          
       this.paysProjetRecherches.push({...paysProjetRecherche});
       this.createPaysProjetRechercheDialog = false;
       this.selectedPaysProjetRecherche = new PaysProjetRechercheVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createPaysProjetRechercheDialog  = false;
}

// getters and setters 

get paysProjetRecherches(): Array<PaysProjetRechercheVo> {
    return this.paysProjetRechercheService.paysProjetRecherches;
       }
set paysProjetRecherches(value: Array<PaysProjetRechercheVo>) {
        this.paysProjetRechercheService.paysProjetRecherches = value;
       } 

 get selectedPaysProjetRecherche():PaysProjetRechercheVo {
           return this.paysProjetRechercheService.selectedPaysProjetRecherche;
       }
    set selectedPaysProjetRecherche(value: PaysProjetRechercheVo) {
        this.paysProjetRechercheService.selectedPaysProjetRecherche = value;
       }
  
   get createPaysProjetRechercheDialog():boolean {
           return this.paysProjetRechercheService.createPaysProjetRechercheDialog;
       }
    set createPaysProjetRechercheDialog(value: boolean) {
        this.paysProjetRechercheService.createPaysProjetRechercheDialog= value;
       }


}