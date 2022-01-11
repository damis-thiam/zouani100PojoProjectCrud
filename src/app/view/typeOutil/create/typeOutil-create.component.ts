import {Component, OnInit} from '@angular/core';
import {TypeOutilService} from '../../../controller/service/TypeOutil.service';
import {TypeOutilVo} from '../../../controller/model/TypeOutil.model';

@Component({
  selector: 'app-typeOutil-create',
  templateUrl: './typeOutil-create.component.html',
  styleUrls: ['./typeOutil-create.component.css']
})
export class TypeOutilCreateComponent implements OnInit {

constructor(private typeOutilService: TypeOutilService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.typeOutilService.save().subscribe(typeOutil=>{
          
       this.typeOutils.push({...typeOutil});
       this.createTypeOutilDialog = false;
       this.selectedTypeOutil = new TypeOutilVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createTypeOutilDialog  = false;
}

// getters and setters 

get typeOutils(): Array<TypeOutilVo> {
    return this.typeOutilService.typeOutils;
       }
set typeOutils(value: Array<TypeOutilVo>) {
        this.typeOutilService.typeOutils = value;
       } 

 get selectedTypeOutil():TypeOutilVo {
           return this.typeOutilService.selectedTypeOutil;
       }
    set selectedTypeOutil(value: TypeOutilVo) {
        this.typeOutilService.selectedTypeOutil = value;
       }
  
   get createTypeOutilDialog():boolean {
           return this.typeOutilService.createTypeOutilDialog;
       }
    set createTypeOutilDialog(value: boolean) {
        this.typeOutilService.createTypeOutilDialog= value;
       }


}