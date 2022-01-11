import {Component, OnInit} from '@angular/core';
import {EnjeuxIrdChercheurService} from '../../../controller/service/EnjeuxIrdChercheur.service';
import {EnjeuxIrdChercheurVo} from '../../../controller/model/EnjeuxIrdChercheur.model';
      import {EnjeuxIrdVo} from '../../../controller/model/EnjeuxIrd.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-enjeuxIrdChercheur-create',
  templateUrl: './enjeuxIrdChercheur-create.component.html',
  styleUrls: ['./enjeuxIrdChercheur-create.component.css']
})
export class EnjeuxIrdChercheurCreateComponent implements OnInit {

constructor(private enjeuxIrdChercheurService: EnjeuxIrdChercheurService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.enjeuxIrdChercheurService.save().subscribe(enjeuxIrdChercheur=>{
          
       this.enjeuxIrdChercheurs.push({...enjeuxIrdChercheur});
       this.createEnjeuxIrdChercheurDialog = false;
       this.selectedEnjeuxIrdChercheur = new EnjeuxIrdChercheurVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEnjeuxIrdChercheurDialog  = false;
}

// getters and setters 

get enjeuxIrdChercheurs(): Array<EnjeuxIrdChercheurVo> {
    return this.enjeuxIrdChercheurService.enjeuxIrdChercheurs;
       }
set enjeuxIrdChercheurs(value: Array<EnjeuxIrdChercheurVo>) {
        this.enjeuxIrdChercheurService.enjeuxIrdChercheurs = value;
       } 

 get selectedEnjeuxIrdChercheur():EnjeuxIrdChercheurVo {
           return this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur;
       }
    set selectedEnjeuxIrdChercheur(value: EnjeuxIrdChercheurVo) {
        this.enjeuxIrdChercheurService.selectedEnjeuxIrdChercheur = value;
       }
  
   get createEnjeuxIrdChercheurDialog():boolean {
           return this.enjeuxIrdChercheurService.createEnjeuxIrdChercheurDialog;
       }
    set createEnjeuxIrdChercheurDialog(value: boolean) {
        this.enjeuxIrdChercheurService.createEnjeuxIrdChercheurDialog= value;
       }


}