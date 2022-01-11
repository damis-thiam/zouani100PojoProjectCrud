import {Component, OnInit} from '@angular/core';
import {PaysTypeOutilCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/PaysTypeOutilCultureScientifiqueOutilPedagogique.service';
import {PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/PaysTypeOutilCultureScientifiqueOutilPedagogique.model';
      import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysTypeOutilCultureScientifiqueOutilPedagogique-create',
  templateUrl: './paysTypeOutilCultureScientifiqueOutilPedagogique-create.component.html',
  styleUrls: ['./paysTypeOutilCultureScientifiqueOutilPedagogique-create.component.css']
})
export class PaysTypeOutilCultureScientifiqueOutilPedagogiqueCreateComponent implements OnInit {

constructor(private paysTypeOutilCultureScientifiqueOutilPedagogiqueService: PaysTypeOutilCultureScientifiqueOutilPedagogiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.save().subscribe(paysTypeOutilCultureScientifiqueOutilPedagogique=>{
          
       this.paysTypeOutilCultureScientifiqueOutilPedagogiques.push({...paysTypeOutilCultureScientifiqueOutilPedagogique});
       this.createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog = false;
       this.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = new PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog  = false;
}

// getters and setters 

get paysTypeOutilCultureScientifiqueOutilPedagogiques(): Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo> {
    return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.paysTypeOutilCultureScientifiqueOutilPedagogiques;
       }
set paysTypeOutilCultureScientifiqueOutilPedagogiques(value: Array<PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.paysTypeOutilCultureScientifiqueOutilPedagogiques = value;
       } 

 get selectedPaysTypeOutilCultureScientifiqueOutilPedagogique():PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo {
           return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set selectedPaysTypeOutilCultureScientifiqueOutilPedagogique(value: PaysTypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.selectedPaysTypeOutilCultureScientifiqueOutilPedagogique = value;
       }
  
   get createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.paysTypeOutilCultureScientifiqueOutilPedagogiqueService.createPaysTypeOutilCultureScientifiqueOutilPedagogiqueDialog= value;
       }


}