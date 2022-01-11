import {Component, OnInit} from '@angular/core';
import {TypeOutilCultureScientifiqueOutilPedagogiqueService} from '../../../controller/service/TypeOutilCultureScientifiqueOutilPedagogique.service';
import {TypeOutilCultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/TypeOutilCultureScientifiqueOutilPedagogique.model';
      import {TypeOutilVo} from '../../../controller/model/TypeOutil.model';
      import {CultureScientifiqueOutilPedagogiqueVo} from '../../../controller/model/CultureScientifiqueOutilPedagogique.model';

@Component({
  selector: 'app-typeOutilCultureScientifiqueOutilPedagogique-create',
  templateUrl: './typeOutilCultureScientifiqueOutilPedagogique-create.component.html',
  styleUrls: ['./typeOutilCultureScientifiqueOutilPedagogique-create.component.css']
})
export class TypeOutilCultureScientifiqueOutilPedagogiqueCreateComponent implements OnInit {

constructor(private typeOutilCultureScientifiqueOutilPedagogiqueService: TypeOutilCultureScientifiqueOutilPedagogiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.typeOutilCultureScientifiqueOutilPedagogiqueService.save().subscribe(typeOutilCultureScientifiqueOutilPedagogique=>{
          
       this.typeOutilCultureScientifiqueOutilPedagogiques.push({...typeOutilCultureScientifiqueOutilPedagogique});
       this.createTypeOutilCultureScientifiqueOutilPedagogiqueDialog = false;
       this.selectedTypeOutilCultureScientifiqueOutilPedagogique = new TypeOutilCultureScientifiqueOutilPedagogiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createTypeOutilCultureScientifiqueOutilPedagogiqueDialog  = false;
}

// getters and setters 

get typeOutilCultureScientifiqueOutilPedagogiques(): Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo> {
    return this.typeOutilCultureScientifiqueOutilPedagogiqueService.typeOutilCultureScientifiqueOutilPedagogiques;
       }
set typeOutilCultureScientifiqueOutilPedagogiques(value: Array<TypeOutilCultureScientifiqueOutilPedagogiqueVo>) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.typeOutilCultureScientifiqueOutilPedagogiques = value;
       } 

 get selectedTypeOutilCultureScientifiqueOutilPedagogique():TypeOutilCultureScientifiqueOutilPedagogiqueVo {
           return this.typeOutilCultureScientifiqueOutilPedagogiqueService.selectedTypeOutilCultureScientifiqueOutilPedagogique;
       }
    set selectedTypeOutilCultureScientifiqueOutilPedagogique(value: TypeOutilCultureScientifiqueOutilPedagogiqueVo) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.selectedTypeOutilCultureScientifiqueOutilPedagogique = value;
       }
  
   get createTypeOutilCultureScientifiqueOutilPedagogiqueDialog():boolean {
           return this.typeOutilCultureScientifiqueOutilPedagogiqueService.createTypeOutilCultureScientifiqueOutilPedagogiqueDialog;
       }
    set createTypeOutilCultureScientifiqueOutilPedagogiqueDialog(value: boolean) {
        this.typeOutilCultureScientifiqueOutilPedagogiqueService.createTypeOutilCultureScientifiqueOutilPedagogiqueDialog= value;
       }


}