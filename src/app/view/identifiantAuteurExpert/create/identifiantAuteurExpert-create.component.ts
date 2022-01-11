import {Component, OnInit} from '@angular/core';
import {IdentifiantAuteurExpertService} from '../../../controller/service/IdentifiantAuteurExpert.service';
import {IdentifiantAuteurExpertVo} from '../../../controller/model/IdentifiantAuteurExpert.model';
      import {IdentifiantRechercheVo} from '../../../controller/model/IdentifiantRecherche.model';
      import {ChercheurVo} from '../../../controller/model/Chercheur.model';

@Component({
  selector: 'app-identifiantAuteurExpert-create',
  templateUrl: './identifiantAuteurExpert-create.component.html',
  styleUrls: ['./identifiantAuteurExpert-create.component.css']
})
export class IdentifiantAuteurExpertCreateComponent implements OnInit {

constructor(private identifiantAuteurExpertService: IdentifiantAuteurExpertService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.identifiantAuteurExpertService.save().subscribe(identifiantAuteurExpert=>{
          
       this.identifiantAuteurExperts.push({...identifiantAuteurExpert});
       this.createIdentifiantAuteurExpertDialog = false;
       this.selectedIdentifiantAuteurExpert = new IdentifiantAuteurExpertVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createIdentifiantAuteurExpertDialog  = false;
}

// getters and setters 

get identifiantAuteurExperts(): Array<IdentifiantAuteurExpertVo> {
    return this.identifiantAuteurExpertService.identifiantAuteurExperts;
       }
set identifiantAuteurExperts(value: Array<IdentifiantAuteurExpertVo>) {
        this.identifiantAuteurExpertService.identifiantAuteurExperts = value;
       } 

 get selectedIdentifiantAuteurExpert():IdentifiantAuteurExpertVo {
           return this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert;
       }
    set selectedIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert = value;
       }
  
   get createIdentifiantAuteurExpertDialog():boolean {
           return this.identifiantAuteurExpertService.createIdentifiantAuteurExpertDialog;
       }
    set createIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.createIdentifiantAuteurExpertDialog= value;
       }


}