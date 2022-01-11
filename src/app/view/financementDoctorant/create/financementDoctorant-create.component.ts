import {Component, OnInit} from '@angular/core';
import {FinancementDoctorantService} from '../../../controller/service/FinancementDoctorant.service';
import {FinancementDoctorantVo} from '../../../controller/model/FinancementDoctorant.model';

@Component({
  selector: 'app-financementDoctorant-create',
  templateUrl: './financementDoctorant-create.component.html',
  styleUrls: ['./financementDoctorant-create.component.css']
})
export class FinancementDoctorantCreateComponent implements OnInit {

constructor(private financementDoctorantService: FinancementDoctorantService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.financementDoctorantService.save().subscribe(financementDoctorant=>{
          
       this.financementDoctorants.push({...financementDoctorant});
       this.createFinancementDoctorantDialog = false;
       this.selectedFinancementDoctorant = new FinancementDoctorantVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createFinancementDoctorantDialog  = false;
}

// getters and setters 

get financementDoctorants(): Array<FinancementDoctorantVo> {
    return this.financementDoctorantService.financementDoctorants;
       }
set financementDoctorants(value: Array<FinancementDoctorantVo>) {
        this.financementDoctorantService.financementDoctorants = value;
       } 

 get selectedFinancementDoctorant():FinancementDoctorantVo {
           return this.financementDoctorantService.selectedFinancementDoctorant;
       }
    set selectedFinancementDoctorant(value: FinancementDoctorantVo) {
        this.financementDoctorantService.selectedFinancementDoctorant = value;
       }
  
   get createFinancementDoctorantDialog():boolean {
           return this.financementDoctorantService.createFinancementDoctorantDialog;
       }
    set createFinancementDoctorantDialog(value: boolean) {
        this.financementDoctorantService.createFinancementDoctorantDialog= value;
       }


}