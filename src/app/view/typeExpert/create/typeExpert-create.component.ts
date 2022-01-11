import {Component, OnInit} from '@angular/core';
import {TypeExpertService} from '../../../controller/service/TypeExpert.service';
import {TypeExpertVo} from '../../../controller/model/TypeExpert.model';

@Component({
  selector: 'app-typeExpert-create',
  templateUrl: './typeExpert-create.component.html',
  styleUrls: ['./typeExpert-create.component.css']
})
export class TypeExpertCreateComponent implements OnInit {

constructor(private typeExpertService: TypeExpertService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.typeExpertService.save().subscribe(typeExpert=>{
          
       this.typeExperts.push({...typeExpert});
       this.createTypeExpertDialog = false;
       this.selectedTypeExpert = new TypeExpertVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createTypeExpertDialog  = false;
}

// getters and setters 

get typeExperts(): Array<TypeExpertVo> {
    return this.typeExpertService.typeExperts;
       }
set typeExperts(value: Array<TypeExpertVo>) {
        this.typeExpertService.typeExperts = value;
       } 

 get selectedTypeExpert():TypeExpertVo {
           return this.typeExpertService.selectedTypeExpert;
       }
    set selectedTypeExpert(value: TypeExpertVo) {
        this.typeExpertService.selectedTypeExpert = value;
       }
  
   get createTypeExpertDialog():boolean {
           return this.typeExpertService.createTypeExpertDialog;
       }
    set createTypeExpertDialog(value: boolean) {
        this.typeExpertService.createTypeExpertDialog= value;
       }


}