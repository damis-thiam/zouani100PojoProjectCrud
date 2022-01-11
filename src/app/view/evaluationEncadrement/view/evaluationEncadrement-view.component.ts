import {Component, OnInit} from '@angular/core';
import {EvaluationEncadrementService} from '../../../controller/service/EvaluationEncadrement.service';
import {EvaluationEncadrementVo} from '../../../controller/model/EvaluationEncadrement.model';

@Component({
  selector: 'app-evaluationEncadrement-view',
  templateUrl: './evaluationEncadrement-view.component.html',
  styleUrls: ['./evaluationEncadrement-view.component.css']
})
export class EvaluationEncadrementViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private evaluationEncadrementService: EvaluationEncadrementService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewEvaluationEncadrementDialog = false;
    } 



   // getters and setters
    get viewEvaluationEncadrementDialog():boolean {
        return this.evaluationEncadrementService.viewEvaluationEncadrementDialog;
        }
    set viewEvaluationEncadrementDialog(value: boolean) {
        this.evaluationEncadrementService.viewEvaluationEncadrementDialog= value;
        }
    
    get selectedEvaluationEncadrement():EvaluationEncadrementVo {
           return this.evaluationEncadrementService.selectedEvaluationEncadrement;
       }
    set selectedEvaluationEncadrement(value: EvaluationEncadrementVo) {
        this.evaluationEncadrementService.selectedEvaluationEncadrement = value;
       }





}