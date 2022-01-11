import {Component, OnInit} from '@angular/core';
import {TypeInstanceService} from '../../../controller/service/TypeInstance.service';
import {TypeInstanceVo} from '../../../controller/model/TypeInstance.model';

@Component({
  selector: 'app-typeInstance-create',
  templateUrl: './typeInstance-create.component.html',
  styleUrls: ['./typeInstance-create.component.css']
})
export class TypeInstanceCreateComponent implements OnInit {

constructor(private typeInstanceService: TypeInstanceService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.typeInstanceService.save().subscribe(typeInstance=>{
          
       this.typeInstances.push({...typeInstance});
       this.createTypeInstanceDialog = false;
       this.selectedTypeInstance = new TypeInstanceVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createTypeInstanceDialog  = false;
}

// getters and setters 

get typeInstances(): Array<TypeInstanceVo> {
    return this.typeInstanceService.typeInstances;
       }
set typeInstances(value: Array<TypeInstanceVo>) {
        this.typeInstanceService.typeInstances = value;
       } 

 get selectedTypeInstance():TypeInstanceVo {
           return this.typeInstanceService.selectedTypeInstance;
       }
    set selectedTypeInstance(value: TypeInstanceVo) {
        this.typeInstanceService.selectedTypeInstance = value;
       }
  
   get createTypeInstanceDialog():boolean {
           return this.typeInstanceService.createTypeInstanceDialog;
       }
    set createTypeInstanceDialog(value: boolean) {
        this.typeInstanceService.createTypeInstanceDialog= value;
       }


}