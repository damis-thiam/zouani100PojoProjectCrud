import {Component, OnInit} from '@angular/core';
import {TypeEntiteAdministrativeService} from '../../../controller/service/TypeEntiteAdministrative.service';
import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';

@Component({
  selector: 'app-typeEntiteAdministrative-create',
  templateUrl: './typeEntiteAdministrative-create.component.html',
  styleUrls: ['./typeEntiteAdministrative-create.component.css']
})
export class TypeEntiteAdministrativeCreateComponent implements OnInit {

constructor(private typeEntiteAdministrativeService: TypeEntiteAdministrativeService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.typeEntiteAdministrativeService.save().subscribe(typeEntiteAdministrative=>{
          
       this.typeEntiteAdministratives.push({...typeEntiteAdministrative});
       this.createTypeEntiteAdministrativeDialog = false;
       this.selectedTypeEntiteAdministrative = new TypeEntiteAdministrativeVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createTypeEntiteAdministrativeDialog  = false;
}

// getters and setters 

get typeEntiteAdministratives(): Array<TypeEntiteAdministrativeVo> {
    return this.typeEntiteAdministrativeService.typeEntiteAdministratives;
       }
set typeEntiteAdministratives(value: Array<TypeEntiteAdministrativeVo>) {
        this.typeEntiteAdministrativeService.typeEntiteAdministratives = value;
       } 

 get selectedTypeEntiteAdministrative():TypeEntiteAdministrativeVo {
           return this.typeEntiteAdministrativeService.selectedTypeEntiteAdministrative;
       }
    set selectedTypeEntiteAdministrative(value: TypeEntiteAdministrativeVo) {
        this.typeEntiteAdministrativeService.selectedTypeEntiteAdministrative = value;
       }
  
   get createTypeEntiteAdministrativeDialog():boolean {
           return this.typeEntiteAdministrativeService.createTypeEntiteAdministrativeDialog;
       }
    set createTypeEntiteAdministrativeDialog(value: boolean) {
        this.typeEntiteAdministrativeService.createTypeEntiteAdministrativeDialog= value;
       }


}