import {Component, OnInit} from '@angular/core';
import {EtablissementPartenaireService} from '../../../controller/service/EtablissementPartenaire.service';
import {EtablissementPartenaireVo} from '../../../controller/model/EtablissementPartenaire.model';

@Component({
  selector: 'app-etablissementPartenaire-create',
  templateUrl: './etablissementPartenaire-create.component.html',
  styleUrls: ['./etablissementPartenaire-create.component.css']
})
export class EtablissementPartenaireCreateComponent implements OnInit {

constructor(private etablissementPartenaireService: EtablissementPartenaireService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.etablissementPartenaireService.save().subscribe(etablissementPartenaire=>{
          
       this.etablissementPartenaires.push({...etablissementPartenaire});
       this.createEtablissementPartenaireDialog = false;
       this.selectedEtablissementPartenaire = new EtablissementPartenaireVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEtablissementPartenaireDialog  = false;
}

// getters and setters 

get etablissementPartenaires(): Array<EtablissementPartenaireVo> {
    return this.etablissementPartenaireService.etablissementPartenaires;
       }
set etablissementPartenaires(value: Array<EtablissementPartenaireVo>) {
        this.etablissementPartenaireService.etablissementPartenaires = value;
       } 

 get selectedEtablissementPartenaire():EtablissementPartenaireVo {
           return this.etablissementPartenaireService.selectedEtablissementPartenaire;
       }
    set selectedEtablissementPartenaire(value: EtablissementPartenaireVo) {
        this.etablissementPartenaireService.selectedEtablissementPartenaire = value;
       }
  
   get createEtablissementPartenaireDialog():boolean {
           return this.etablissementPartenaireService.createEtablissementPartenaireDialog;
       }
    set createEtablissementPartenaireDialog(value: boolean) {
        this.etablissementPartenaireService.createEtablissementPartenaireDialog= value;
       }


}