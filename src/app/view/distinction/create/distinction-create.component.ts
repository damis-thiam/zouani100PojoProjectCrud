import {Component, OnInit} from '@angular/core';
import {DistinctionService} from '../../../controller/service/Distinction.service';
import {DistinctionVo} from '../../../controller/model/Distinction.model';
      import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';
      import {OrganismeVo} from '../../../controller/model/Organisme.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-distinction-create',
  templateUrl: './distinction-create.component.html',
  styleUrls: ['./distinction-create.component.css']
})
export class DistinctionCreateComponent implements OnInit {

constructor(private distinctionService: DistinctionService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.distinctionService.save().subscribe(distinction=>{
          
       this.distinctions.push({...distinction});
       this.createDistinctionDialog = false;
       this.selectedDistinction = new DistinctionVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDistinctionDialog  = false;
}

// getters and setters 

get distinctions(): Array<DistinctionVo> {
    return this.distinctionService.distinctions;
       }
set distinctions(value: Array<DistinctionVo>) {
        this.distinctionService.distinctions = value;
       } 

 get selectedDistinction():DistinctionVo {
           return this.distinctionService.selectedDistinction;
       }
    set selectedDistinction(value: DistinctionVo) {
        this.distinctionService.selectedDistinction = value;
       }
  
   get createDistinctionDialog():boolean {
           return this.distinctionService.createDistinctionDialog;
       }
    set createDistinctionDialog(value: boolean) {
        this.distinctionService.createDistinctionDialog= value;
       }


}