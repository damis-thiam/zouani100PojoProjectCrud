import {Component, OnInit} from '@angular/core';
import {TypeExpertiseService} from '../../../controller/service/TypeExpertise.service';
import {TypeExpertiseVo} from '../../../controller/model/TypeExpertise.model';

@Component({
  selector: 'app-typeExpertise-create',
  templateUrl: './typeExpertise-create.component.html',
  styleUrls: ['./typeExpertise-create.component.css']
})
export class TypeExpertiseCreateComponent implements OnInit {

constructor(private typeExpertiseService: TypeExpertiseService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.typeExpertiseService.save().subscribe(typeExpertise=>{
          
       this.typeExpertises.push({...typeExpertise});
       this.createTypeExpertiseDialog = false;
       this.selectedTypeExpertise = new TypeExpertiseVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createTypeExpertiseDialog  = false;
}

// getters and setters 

get typeExpertises(): Array<TypeExpertiseVo> {
    return this.typeExpertiseService.typeExpertises;
       }
set typeExpertises(value: Array<TypeExpertiseVo>) {
        this.typeExpertiseService.typeExpertises = value;
       } 

 get selectedTypeExpertise():TypeExpertiseVo {
           return this.typeExpertiseService.selectedTypeExpertise;
       }
    set selectedTypeExpertise(value: TypeExpertiseVo) {
        this.typeExpertiseService.selectedTypeExpertise = value;
       }
  
   get createTypeExpertiseDialog():boolean {
           return this.typeExpertiseService.createTypeExpertiseDialog;
       }
    set createTypeExpertiseDialog(value: boolean) {
        this.typeExpertiseService.createTypeExpertiseDialog= value;
       }


}