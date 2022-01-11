import {Component, OnInit} from '@angular/core';
import {GestionEquipeService} from '../../../controller/service/GestionEquipe.service';
import {GestionEquipeVo} from '../../../controller/model/GestionEquipe.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-gestionEquipe-create',
  templateUrl: './gestionEquipe-create.component.html',
  styleUrls: ['./gestionEquipe-create.component.css']
})
export class GestionEquipeCreateComponent implements OnInit {

constructor(private gestionEquipeService: GestionEquipeService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.gestionEquipeService.save().subscribe(gestionEquipe=>{
          
       this.gestionEquipes.push({...gestionEquipe});
       this.createGestionEquipeDialog = false;
       this.selectedGestionEquipe = new GestionEquipeVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createGestionEquipeDialog  = false;
}

// getters and setters 

get gestionEquipes(): Array<GestionEquipeVo> {
    return this.gestionEquipeService.gestionEquipes;
       }
set gestionEquipes(value: Array<GestionEquipeVo>) {
        this.gestionEquipeService.gestionEquipes = value;
       } 

 get selectedGestionEquipe():GestionEquipeVo {
           return this.gestionEquipeService.selectedGestionEquipe;
       }
    set selectedGestionEquipe(value: GestionEquipeVo) {
        this.gestionEquipeService.selectedGestionEquipe = value;
       }
  
   get createGestionEquipeDialog():boolean {
           return this.gestionEquipeService.createGestionEquipeDialog;
       }
    set createGestionEquipeDialog(value: boolean) {
        this.gestionEquipeService.createGestionEquipeDialog= value;
       }


}