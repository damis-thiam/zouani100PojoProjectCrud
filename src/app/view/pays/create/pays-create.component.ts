import {Component, OnInit} from '@angular/core';
import {PaysService} from '../../../controller/service/Pays.service';
import {PaysVo} from '../../../controller/model/Pays.model';
      import {ContinentVo} from '../../../controller/model/Continent.model';

@Component({
  selector: 'app-pays-create',
  templateUrl: './pays-create.component.html',
  styleUrls: ['./pays-create.component.css']
})
export class PaysCreateComponent implements OnInit {

constructor(private paysService: PaysService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.paysService.save().subscribe(pays=>{
          
       this.payss.push({...pays});
       this.createPaysDialog = false;
       this.selectedPays = new PaysVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createPaysDialog  = false;
}

// getters and setters 

get payss(): Array<PaysVo> {
    return this.paysService.payss;
       }
set payss(value: Array<PaysVo>) {
        this.paysService.payss = value;
       } 

 get selectedPays():PaysVo {
           return this.paysService.selectedPays;
       }
    set selectedPays(value: PaysVo) {
        this.paysService.selectedPays = value;
       }
  
   get createPaysDialog():boolean {
           return this.paysService.createPaysDialog;
       }
    set createPaysDialog(value: boolean) {
        this.paysService.createPaysDialog= value;
       }


}