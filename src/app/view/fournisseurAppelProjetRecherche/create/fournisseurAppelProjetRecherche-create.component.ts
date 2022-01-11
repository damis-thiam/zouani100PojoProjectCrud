import {Component, OnInit} from '@angular/core';
import {FournisseurAppelProjetRechercheService} from '../../../controller/service/FournisseurAppelProjetRecherche.service';
import {FournisseurAppelProjetRechercheVo} from '../../../controller/model/FournisseurAppelProjetRecherche.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-fournisseurAppelProjetRecherche-create',
  templateUrl: './fournisseurAppelProjetRecherche-create.component.html',
  styleUrls: ['./fournisseurAppelProjetRecherche-create.component.css']
})
export class FournisseurAppelProjetRechercheCreateComponent implements OnInit {

constructor(private fournisseurAppelProjetRechercheService: FournisseurAppelProjetRechercheService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.fournisseurAppelProjetRechercheService.save().subscribe(fournisseurAppelProjetRecherche=>{
          
       this.fournisseurAppelProjetRecherches.push({...fournisseurAppelProjetRecherche});
       this.createFournisseurAppelProjetRechercheDialog = false;
       this.selectedFournisseurAppelProjetRecherche = new FournisseurAppelProjetRechercheVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createFournisseurAppelProjetRechercheDialog  = false;
}

// getters and setters 

get fournisseurAppelProjetRecherches(): Array<FournisseurAppelProjetRechercheVo> {
    return this.fournisseurAppelProjetRechercheService.fournisseurAppelProjetRecherches;
       }
set fournisseurAppelProjetRecherches(value: Array<FournisseurAppelProjetRechercheVo>) {
        this.fournisseurAppelProjetRechercheService.fournisseurAppelProjetRecherches = value;
       } 

 get selectedFournisseurAppelProjetRecherche():FournisseurAppelProjetRechercheVo {
           return this.fournisseurAppelProjetRechercheService.selectedFournisseurAppelProjetRecherche;
       }
    set selectedFournisseurAppelProjetRecherche(value: FournisseurAppelProjetRechercheVo) {
        this.fournisseurAppelProjetRechercheService.selectedFournisseurAppelProjetRecherche = value;
       }
  
   get createFournisseurAppelProjetRechercheDialog():boolean {
           return this.fournisseurAppelProjetRechercheService.createFournisseurAppelProjetRechercheDialog;
       }
    set createFournisseurAppelProjetRechercheDialog(value: boolean) {
        this.fournisseurAppelProjetRechercheService.createFournisseurAppelProjetRechercheDialog= value;
       }


}