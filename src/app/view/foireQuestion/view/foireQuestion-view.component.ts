import {Component, OnInit} from '@angular/core';
import {FoireQuestionService} from '../../../controller/service/FoireQuestion.service';
import {FoireQuestionVo} from '../../../controller/model/FoireQuestion.model';
import {CategorieFoireQuestionVo} from '../../../controller/model/CategorieFoireQuestion.model';

@Component({
  selector: 'app-foireQuestion-view',
  templateUrl: './foireQuestion-view.component.html',
  styleUrls: ['./foireQuestion-view.component.css']
})
export class FoireQuestionViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private foireQuestionService: FoireQuestionService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewFoireQuestionDialog = false;
    } 



   // getters and setters
    get viewFoireQuestionDialog():boolean {
        return this.foireQuestionService.viewFoireQuestionDialog;
        }
    set viewFoireQuestionDialog(value: boolean) {
        this.foireQuestionService.viewFoireQuestionDialog= value;
        }
    
    get selectedFoireQuestion():FoireQuestionVo {
           return this.foireQuestionService.selectedFoireQuestion;
       }
    set selectedFoireQuestion(value: FoireQuestionVo) {
        this.foireQuestionService.selectedFoireQuestion = value;
       }





}