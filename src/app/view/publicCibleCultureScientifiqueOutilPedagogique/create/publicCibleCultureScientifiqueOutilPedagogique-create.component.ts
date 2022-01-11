import {Component, OnInit} from '@angular/core';
import {PublicCibleCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/PublicCibleCultureScientifiqueOutilPedagogique.service';
import {PublicCibleCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/PublicCibleCultureScientifiqueOutilPedagogique.model';
      import {PublicCibleVo} from '../../../controller/model/PublicCible.model';
      import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-publicCibleCultureScientifiqueOutilPedagogique-create',
  templateUrl: './publicCibleCultureScientifiqueOutilPedagogique-create.component.html',
  styleUrls: ['./publicCibleCultureScientifiqueOutilPedagogique-create.component.css']
})
export class PublicCibleCultureScientifiqueOutilPedagogiqueCreateComponent implements OnInit {

constructor(private publicCibleCultureScientifiqueOutilPedagogiqueService: PublicCibleCultureScientifiqueOutilPedagogiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.publicCibleCultureScientifiqueOutilPedagogiqueService.save().subscribe(publicCibleCultureScientifiqueOutilPedagogique=>{
          
       this.publicCibleCultureScientifiqueOutilPedagogiques.push({...publicCibleCultureScientifiqueOutilPedagogique});
       this.createPublicCibleCultureScientifiqueOutilPedagogiqueDialog = false;
       this.selectedPublicCibleCultureScientifiqueOutilPedagogique = new PublicCibleCultureScientifiqueOutilPedagogiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createPublicCibleCultureScientifiqueOutilPedagogiqueDialog  = false;
}

// getters and setters 

get publicCibleCultureScientifiqueOutilPedagogiques(): Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo> {
    return this.publicCibleCultureScientifiqueOutilPedagogiqueService.publicCibleCultureScientifiqueOutilPedagogiques;
       }
set publicCibleCultureScientifiqueOutilPedagogiques(value: Array<PublicCibleCultureScientifiqueOutilPedagogiqueVo>) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.publicCibleCultureScientifiqueOutilPedagogiques = value;
       } 

 get selectedPublicCibleCultureScientifiqueOutilPedagogique():PublicCibleCultureScientifiqueOutilPedagogiqueVo {
           return this.publicCibleCultureScientifiqueOutilPedagogiqueService.selectedPublicCibleCultureScientifiqueOutilPedagogique;
       }
    set selectedPublicCibleCultureScientifiqueOutilPedagogique(value: PublicCibleCultureScientifiqueOutilPedagogiqueVo) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.selectedPublicCibleCultureScientifiqueOutilPedagogique = value;
       }
  
   get createPublicCibleCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.publicCibleCultureScientifiqueOutilPedagogiqueService.createPublicCibleCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createPublicCibleCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.publicCibleCultureScientifiqueOutilPedagogiqueService.createPublicCibleCultureScientifiqueOutilPedagogiqueDialog= value;
       }


}