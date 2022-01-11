import {Component, OnInit} from '@angular/core';
import {EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/EtablissementCultureScientifiqueRecontreGrandPublicJeunePublic.model';
      import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-create',
  templateUrl: './etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-create.component.html',
  styleUrls: ['./etablissementCultureScientifiqueRecontreGrandPublicJeunePublic-create.component.css']
})
export class EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent implements OnInit {

constructor(private etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.save().subscribe(etablissementCultureScientifiqueRecontreGrandPublicJeunePublic=>{
          
       this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics.push({...etablissementCultureScientifiqueRecontreGrandPublicJeunePublic});
       this.createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
       this.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = new EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog  = false;
}

// getters and setters 

get etablissementCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
    return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
set etablissementCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.etablissementCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       } 

 get selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic():EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic(value: EtablissementCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedEtablissementCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
  
   get createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.etablissementCultureScientifiqueRecontreGrandPublicJeunePublicService.createEtablissementCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }


}