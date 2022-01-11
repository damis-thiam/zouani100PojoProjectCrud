import {Component, OnInit} from '@angular/core';
import {CommissionScientifiqueService} from '../../../controller/service/CommissionScientifique.service';
import {CommissionScientifiqueVo} from '../../../controller/model/CommissionScientifique.model';

@Component({
  selector: 'app-commissionScientifique-create',
  templateUrl: './commissionScientifique-create.component.html',
  styleUrls: ['./commissionScientifique-create.component.css']
})
export class CommissionScientifiqueCreateComponent implements OnInit {

constructor(private commissionScientifiqueService: CommissionScientifiqueService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.commissionScientifiqueService.save().subscribe(commissionScientifique=>{
          
       this.commissionScientifiques.push({...commissionScientifique});
       this.createCommissionScientifiqueDialog = false;
       this.selectedCommissionScientifique = new CommissionScientifiqueVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createCommissionScientifiqueDialog  = false;
}

// getters and setters 

get commissionScientifiques(): Array<CommissionScientifiqueVo> {
    return this.commissionScientifiqueService.commissionScientifiques;
       }
set commissionScientifiques(value: Array<CommissionScientifiqueVo>) {
        this.commissionScientifiqueService.commissionScientifiques = value;
       } 

 get selectedCommissionScientifique():CommissionScientifiqueVo {
           return this.commissionScientifiqueService.selectedCommissionScientifique;
       }
    set selectedCommissionScientifique(value: CommissionScientifiqueVo) {
        this.commissionScientifiqueService.selectedCommissionScientifique = value;
       }
  
   get createCommissionScientifiqueDialog():boolean {
           return this.commissionScientifiqueService.createCommissionScientifiqueDialog;
       }
    set createCommissionScientifiqueDialog(value: boolean) {
        this.commissionScientifiqueService.createCommissionScientifiqueDialog= value;
       }


}