import {Component, OnInit} from '@angular/core';
import {IdentifiantRechercheService} from '../../../controller/service/IdentifiantRecherche.service';
import {IdentifiantRechercheVo} from '../../../controller/model/IdentifiantRecherche.model';

@Component({
  selector: 'app-identifiantRecherche-create',
  templateUrl: './identifiantRecherche-create.component.html',
  styleUrls: ['./identifiantRecherche-create.component.css']
})
export class IdentifiantRechercheCreateComponent implements OnInit {

constructor(private identifiantRechercheService: IdentifiantRechercheService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.identifiantRechercheService.save().subscribe(identifiantRecherche=>{
          
       this.identifiantRecherches.push({...identifiantRecherche});
       this.createIdentifiantRechercheDialog = false;
       this.selectedIdentifiantRecherche = new IdentifiantRechercheVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createIdentifiantRechercheDialog  = false;
}

// getters and setters 

get identifiantRecherches(): Array<IdentifiantRechercheVo> {
    return this.identifiantRechercheService.identifiantRecherches;
       }
set identifiantRecherches(value: Array<IdentifiantRechercheVo>) {
        this.identifiantRechercheService.identifiantRecherches = value;
       } 

 get selectedIdentifiantRecherche():IdentifiantRechercheVo {
           return this.identifiantRechercheService.selectedIdentifiantRecherche;
       }
    set selectedIdentifiantRecherche(value: IdentifiantRechercheVo) {
        this.identifiantRechercheService.selectedIdentifiantRecherche = value;
       }
  
   get createIdentifiantRechercheDialog():boolean {
           return this.identifiantRechercheService.createIdentifiantRechercheDialog;
       }
    set createIdentifiantRechercheDialog(value: boolean) {
        this.identifiantRechercheService.createIdentifiantRechercheDialog= value;
       }


}