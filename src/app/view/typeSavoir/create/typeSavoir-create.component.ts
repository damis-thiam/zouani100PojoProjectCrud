import {Component, OnInit} from '@angular/core';
import {TypeSavoirService} from '../../../controller/service/TypeSavoir.service';
import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';

@Component({
  selector: 'app-typeSavoir-create',
  templateUrl: './typeSavoir-create.component.html',
  styleUrls: ['./typeSavoir-create.component.css']
})
export class TypeSavoirCreateComponent implements OnInit {

constructor(private typeSavoirService: TypeSavoirService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.typeSavoirService.save().subscribe(typeSavoir=>{
          
       this.typeSavoirs.push({...typeSavoir});
       this.createTypeSavoirDialog = false;
       this.selectedTypeSavoir = new TypeSavoirVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createTypeSavoirDialog  = false;
}

// getters and setters 

get typeSavoirs(): Array<TypeSavoirVo> {
    return this.typeSavoirService.typeSavoirs;
       }
set typeSavoirs(value: Array<TypeSavoirVo>) {
        this.typeSavoirService.typeSavoirs = value;
       } 

 get selectedTypeSavoir():TypeSavoirVo {
           return this.typeSavoirService.selectedTypeSavoir;
       }
    set selectedTypeSavoir(value: TypeSavoirVo) {
        this.typeSavoirService.selectedTypeSavoir = value;
       }
  
   get createTypeSavoirDialog():boolean {
           return this.typeSavoirService.createTypeSavoirDialog;
       }
    set createTypeSavoirDialog(value: boolean) {
        this.typeSavoirService.createTypeSavoirDialog= value;
       }


}