import {Component, OnInit} from '@angular/core';
import {TypeParticipationService} from '../../../controller/service/TypeParticipation.service';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';

@Component({
  selector: 'app-typeParticipation-create',
  templateUrl: './typeParticipation-create.component.html',
  styleUrls: ['./typeParticipation-create.component.css']
})
export class TypeParticipationCreateComponent implements OnInit {

constructor(private typeParticipationService: TypeParticipationService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.typeParticipationService.save().subscribe(typeParticipation=>{
          
       this.typeParticipations.push({...typeParticipation});
       this.createTypeParticipationDialog = false;
       this.selectedTypeParticipation = new TypeParticipationVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createTypeParticipationDialog  = false;
}

// getters and setters 

get typeParticipations(): Array<TypeParticipationVo> {
    return this.typeParticipationService.typeParticipations;
       }
set typeParticipations(value: Array<TypeParticipationVo>) {
        this.typeParticipationService.typeParticipations = value;
       } 

 get selectedTypeParticipation():TypeParticipationVo {
           return this.typeParticipationService.selectedTypeParticipation;
       }
    set selectedTypeParticipation(value: TypeParticipationVo) {
        this.typeParticipationService.selectedTypeParticipation = value;
       }
  
   get createTypeParticipationDialog():boolean {
           return this.typeParticipationService.createTypeParticipationDialog;
       }
    set createTypeParticipationDialog(value: boolean) {
        this.typeParticipationService.createTypeParticipationDialog= value;
       }


}