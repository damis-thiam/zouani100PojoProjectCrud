import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirChercheurService} from '../../../controller/service/CommunauteSavoirChercheur.service';
import {CommunauteSavoirChercheurVo} from '../../../controller/model/CommunauteSavoirChercheur.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-communauteSavoirChercheur-create',
  templateUrl: './communauteSavoirChercheur-create.component.html',
  styleUrls: ['./communauteSavoirChercheur-create.component.css']
})
export class CommunauteSavoirChercheurCreateComponent implements OnInit {

constructor(private communauteSavoirChercheurService: CommunauteSavoirChercheurService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.communauteSavoirChercheurService.save().subscribe(communauteSavoirChercheur=>{
          
       this.communauteSavoirChercheurs.push({...communauteSavoirChercheur});
       this.createCommunauteSavoirChercheurDialog = false;
       this.selectedCommunauteSavoirChercheur = new CommunauteSavoirChercheurVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCommunauteSavoirChercheurDialog  = false;
}

// getters and setters 

get communauteSavoirChercheurs(): Array<CommunauteSavoirChercheurVo> {
    return this.communauteSavoirChercheurService.communauteSavoirChercheurs;
       }
set communauteSavoirChercheurs(value: Array<CommunauteSavoirChercheurVo>) {
        this.communauteSavoirChercheurService.communauteSavoirChercheurs = value;
       } 

 get selectedCommunauteSavoirChercheur():CommunauteSavoirChercheurVo {
           return this.communauteSavoirChercheurService.selectedCommunauteSavoirChercheur;
       }
    set selectedCommunauteSavoirChercheur(value: CommunauteSavoirChercheurVo) {
        this.communauteSavoirChercheurService.selectedCommunauteSavoirChercheur = value;
       }
  
   get createCommunauteSavoirChercheurDialog():boolean {
           return this.communauteSavoirChercheurService.createCommunauteSavoirChercheurDialog;
       }
    set createCommunauteSavoirChercheurDialog(value: boolean) {
        this.communauteSavoirChercheurService.createCommunauteSavoirChercheurDialog= value;
       }


}