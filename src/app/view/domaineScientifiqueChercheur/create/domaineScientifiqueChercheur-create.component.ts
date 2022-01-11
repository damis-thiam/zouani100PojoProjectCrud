import {Component, OnInit} from '@angular/core';
import {DomaineScientifiqueChercheurService} from '../../../controller/service/DomaineScientifiqueChercheur.service';
import {DomaineScientifiqueChercheurVo} from '../../../controller/model/DomaineScientifiqueChercheur.model';
      import {DomaineScientifiqueVo} from '../../../controller/model/DomaineScientifique.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-domaineScientifiqueChercheur-create',
  templateUrl: './domaineScientifiqueChercheur-create.component.html',
  styleUrls: ['./domaineScientifiqueChercheur-create.component.css']
})
export class DomaineScientifiqueChercheurCreateComponent implements OnInit {

constructor(private domaineScientifiqueChercheurService: DomaineScientifiqueChercheurService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.domaineScientifiqueChercheurService.save().subscribe(domaineScientifiqueChercheur=>{
          
       this.domaineScientifiqueChercheurs.push({...domaineScientifiqueChercheur});
       this.createDomaineScientifiqueChercheurDialog = false;
       this.selectedDomaineScientifiqueChercheur = new DomaineScientifiqueChercheurVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDomaineScientifiqueChercheurDialog  = false;
}

// getters and setters 

get domaineScientifiqueChercheurs(): Array<DomaineScientifiqueChercheurVo> {
    return this.domaineScientifiqueChercheurService.domaineScientifiqueChercheurs;
       }
set domaineScientifiqueChercheurs(value: Array<DomaineScientifiqueChercheurVo>) {
        this.domaineScientifiqueChercheurService.domaineScientifiqueChercheurs = value;
       } 

 get selectedDomaineScientifiqueChercheur():DomaineScientifiqueChercheurVo {
           return this.domaineScientifiqueChercheurService.selectedDomaineScientifiqueChercheur;
       }
    set selectedDomaineScientifiqueChercheur(value: DomaineScientifiqueChercheurVo) {
        this.domaineScientifiqueChercheurService.selectedDomaineScientifiqueChercheur = value;
       }
  
   get createDomaineScientifiqueChercheurDialog():boolean {
           return this.domaineScientifiqueChercheurService.createDomaineScientifiqueChercheurDialog;
       }
    set createDomaineScientifiqueChercheurDialog(value: boolean) {
        this.domaineScientifiqueChercheurService.createDomaineScientifiqueChercheurDialog= value;
       }


}