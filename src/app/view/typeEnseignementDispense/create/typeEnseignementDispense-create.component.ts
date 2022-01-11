import {Component, OnInit} from '@angular/core';
import {TypeEnseignementDispenseService} from '../../../controller/service/TypeEnseignementDispense.service';
import {TypeEnseignementDispenseVo} from '../../../controller/model/TypeEnseignementDispense.model';

@Component({
  selector: 'app-typeEnseignementDispense-create',
  templateUrl: './typeEnseignementDispense-create.component.html',
  styleUrls: ['./typeEnseignementDispense-create.component.css']
})
export class TypeEnseignementDispenseCreateComponent implements OnInit {

constructor(private typeEnseignementDispenseService: TypeEnseignementDispenseService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.typeEnseignementDispenseService.save().subscribe(typeEnseignementDispense=>{
          
       this.typeEnseignementDispenses.push({...typeEnseignementDispense});
       this.createTypeEnseignementDispenseDialog = false;
       this.selectedTypeEnseignementDispense = new TypeEnseignementDispenseVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createTypeEnseignementDispenseDialog  = false;
}

// getters and setters 

get typeEnseignementDispenses(): Array<TypeEnseignementDispenseVo> {
    return this.typeEnseignementDispenseService.typeEnseignementDispenses;
       }
set typeEnseignementDispenses(value: Array<TypeEnseignementDispenseVo>) {
        this.typeEnseignementDispenseService.typeEnseignementDispenses = value;
       } 

 get selectedTypeEnseignementDispense():TypeEnseignementDispenseVo {
           return this.typeEnseignementDispenseService.selectedTypeEnseignementDispense;
       }
    set selectedTypeEnseignementDispense(value: TypeEnseignementDispenseVo) {
        this.typeEnseignementDispenseService.selectedTypeEnseignementDispense = value;
       }
  
   get createTypeEnseignementDispenseDialog():boolean {
           return this.typeEnseignementDispenseService.createTypeEnseignementDispenseDialog;
       }
    set createTypeEnseignementDispenseDialog(value: boolean) {
        this.typeEnseignementDispenseService.createTypeEnseignementDispenseDialog= value;
       }


}