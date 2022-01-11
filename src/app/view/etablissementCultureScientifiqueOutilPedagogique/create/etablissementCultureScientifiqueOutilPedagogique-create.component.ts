import {Component, OnInit} from '@angular/core';
import {EtablissementCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/EtablissementCultureScientifiqueOutilPedagogique.service';
import {EtablissementCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/EtablissementCultureScientifiqueOutilPedagogique.model';
      import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
      import {EtablissementVo} from '../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissementCultureScientifiqueOutilPedagogique-create',
  templateUrl: './etablissementCultureScientifiqueOutilPedagogique-create.component.html',
  styleUrls: ['./etablissementCultureScientifiqueOutilPedagogique-create.component.css']
})
export class EtablissementCultureScientifiqueOutilPedagogiqueCreateComponent implements OnInit {

constructor(private etablissementCultureScientifiqueOutilPedagogiqueService: EtablissementCultureScientifiqueOutilPedagogiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.etablissementCultureScientifiqueOutilPedagogiqueService.save().subscribe(etablissementCultureScientifiqueOutilPedagogique=>{
          
       this.etablissementCultureScientifiqueOutilPedagogiques.push({...etablissementCultureScientifiqueOutilPedagogique});
       this.createEtablissementCultureScientifiqueOutilPedagogiqueDialog = false;
       this.selectedEtablissementCultureScientifiqueOutilPedagogique = new EtablissementCultureScientifiqueOutilPedagogiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEtablissementCultureScientifiqueOutilPedagogiqueDialog  = false;
}

// getters and setters 

get etablissementCultureScientifiqueOutilPedagogiques(): Array<EtablissementCultureScientifiqueOutilPedagogiqueVo> {
    return this.etablissementCultureScientifiqueOutilPedagogiqueService.etablissementCultureScientifiqueOutilPedagogiques;
       }
set etablissementCultureScientifiqueOutilPedagogiques(value: Array<EtablissementCultureScientifiqueOutilPedagogiqueVo>) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.etablissementCultureScientifiqueOutilPedagogiques = value;
       } 

 get selectedEtablissementCultureScientifiqueOutilPedagogique():EtablissementCultureScientifiqueOutilPedagogiqueVo {
           return this.etablissementCultureScientifiqueOutilPedagogiqueService.selectedEtablissementCultureScientifiqueOutilPedagogique;
       }
    set selectedEtablissementCultureScientifiqueOutilPedagogique(value: EtablissementCultureScientifiqueOutilPedagogiqueVo) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.selectedEtablissementCultureScientifiqueOutilPedagogique = value;
       }
  
   get createEtablissementCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.etablissementCultureScientifiqueOutilPedagogiqueService.createEtablissementCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createEtablissementCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.etablissementCultureScientifiqueOutilPedagogiqueService.createEtablissementCultureScientifiqueOutilPedagogiqueDialog= value;
       }


}