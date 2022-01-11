import {Component, OnInit} from '@angular/core';
import {EvaluationEncadrementService} from '../../../controller/service/EvaluationEncadrement.service';
import {EvaluationEncadrementVo} from '../../../controller/model/EvaluationEncadrement.model';

@Component({
  selector: 'app-evaluationEncadrement-create',
  templateUrl: './evaluationEncadrement-create.component.html',
  styleUrls: ['./evaluationEncadrement-create.component.css']
})
export class EvaluationEncadrementCreateComponent implements OnInit {

constructor(private evaluationEncadrementService: EvaluationEncadrementService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.evaluationEncadrementService.save().subscribe(evaluationEncadrement=>{
          
       this.evaluationEncadrements.push({...evaluationEncadrement});
       this.createEvaluationEncadrementDialog = false;
       this.selectedEvaluationEncadrement = new EvaluationEncadrementVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createEvaluationEncadrementDialog  = false;
}

// getters and setters 

get evaluationEncadrements(): Array<EvaluationEncadrementVo> {
    return this.evaluationEncadrementService.evaluationEncadrements;
       }
set evaluationEncadrements(value: Array<EvaluationEncadrementVo>) {
        this.evaluationEncadrementService.evaluationEncadrements = value;
       } 

 get selectedEvaluationEncadrement():EvaluationEncadrementVo {
           return this.evaluationEncadrementService.selectedEvaluationEncadrement;
       }
    set selectedEvaluationEncadrement(value: EvaluationEncadrementVo) {
        this.evaluationEncadrementService.selectedEvaluationEncadrement = value;
       }
  
   get createEvaluationEncadrementDialog():boolean {
           return this.evaluationEncadrementService.createEvaluationEncadrementDialog;
       }
    set createEvaluationEncadrementDialog(value: boolean) {
        this.evaluationEncadrementService.createEvaluationEncadrementDialog= value;
       }


}