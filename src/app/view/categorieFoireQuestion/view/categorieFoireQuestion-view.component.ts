import {Component, OnInit} from '@angular/core';
import {CategorieFoireQuestionService} from '../../../controller/service/CategorieFoireQuestion.service';
import {CategorieFoireQuestionVo} from '../../../controller/model/CategorieFoireQuestion.model';

@Component({
  selector: 'app-categorieFoireQuestion-view',
  templateUrl: './categorieFoireQuestion-view.component.html',
  styleUrls: ['./categorieFoireQuestion-view.component.css']
})
export class CategorieFoireQuestionViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private categorieFoireQuestionService: CategorieFoireQuestionService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewCategorieFoireQuestionDialog = false;
    } 



   // getters and setters
    get viewCategorieFoireQuestionDialog():boolean {
        return this.categorieFoireQuestionService.viewCategorieFoireQuestionDialog;
        }
    set viewCategorieFoireQuestionDialog(value: boolean) {
        this.categorieFoireQuestionService.viewCategorieFoireQuestionDialog= value;
        }
    
    get selectedCategorieFoireQuestion():CategorieFoireQuestionVo {
           return this.categorieFoireQuestionService.selectedCategorieFoireQuestion;
       }
    set selectedCategorieFoireQuestion(value: CategorieFoireQuestionVo) {
        this.categorieFoireQuestionService.selectedCategorieFoireQuestion = value;
       }





}