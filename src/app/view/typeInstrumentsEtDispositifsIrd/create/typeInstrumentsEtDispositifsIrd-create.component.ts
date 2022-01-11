import {Component, OnInit} from '@angular/core';
import {TypeInstrumentsEtDispositifsIrdService} from '../../../controller/service/TypeInstrumentsEtDispositifsIrd.service';
import {TypeInstrumentsEtDispositifsIrdVo} from '../../../controller/model/TypeInstrumentsEtDispositifsIrd.model';

@Component({
  selector: 'app-typeInstrumentsEtDispositifsIrd-create',
  templateUrl: './typeInstrumentsEtDispositifsIrd-create.component.html',
  styleUrls: ['./typeInstrumentsEtDispositifsIrd-create.component.css']
})
export class TypeInstrumentsEtDispositifsIrdCreateComponent implements OnInit {

constructor(private typeInstrumentsEtDispositifsIrdService: TypeInstrumentsEtDispositifsIrdService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.typeInstrumentsEtDispositifsIrdService.save().subscribe(typeInstrumentsEtDispositifsIrd=>{
          
       this.typeInstrumentsEtDispositifsIrds.push({...typeInstrumentsEtDispositifsIrd});
       this.createTypeInstrumentsEtDispositifsIrdDialog = false;
       this.selectedTypeInstrumentsEtDispositifsIrd = new TypeInstrumentsEtDispositifsIrdVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createTypeInstrumentsEtDispositifsIrdDialog  = false;
}

// getters and setters 

get typeInstrumentsEtDispositifsIrds(): Array<TypeInstrumentsEtDispositifsIrdVo> {
    return this.typeInstrumentsEtDispositifsIrdService.typeInstrumentsEtDispositifsIrds;
       }
set typeInstrumentsEtDispositifsIrds(value: Array<TypeInstrumentsEtDispositifsIrdVo>) {
        this.typeInstrumentsEtDispositifsIrdService.typeInstrumentsEtDispositifsIrds = value;
       } 

 get selectedTypeInstrumentsEtDispositifsIrd():TypeInstrumentsEtDispositifsIrdVo {
           return this.typeInstrumentsEtDispositifsIrdService.selectedTypeInstrumentsEtDispositifsIrd;
       }
    set selectedTypeInstrumentsEtDispositifsIrd(value: TypeInstrumentsEtDispositifsIrdVo) {
        this.typeInstrumentsEtDispositifsIrdService.selectedTypeInstrumentsEtDispositifsIrd = value;
       }
  
   get createTypeInstrumentsEtDispositifsIrdDialog():boolean {
           return this.typeInstrumentsEtDispositifsIrdService.createTypeInstrumentsEtDispositifsIrdDialog;
       }
    set createTypeInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.typeInstrumentsEtDispositifsIrdService.createTypeInstrumentsEtDispositifsIrdDialog= value;
       }


}