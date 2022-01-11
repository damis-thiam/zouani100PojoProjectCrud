import {Component, OnInit} from '@angular/core';
import {GradeService} from '../../../controller/service/Grade.service';
import {GradeVo} from '../../../controller/model/Grade.model';

@Component({
  selector: 'app-grade-view',
  templateUrl: './grade-view.component.html',
  styleUrls: ['./grade-view.component.css']
})
export class GradeViewComponent implements OnInit {

  ngOnInit(): void {
  }

    constructor(private gradeService: GradeService) { }

   
   // methods 
    public hideViewDialog() {
    this.viewGradeDialog = false;
    } 



   // getters and setters
    get viewGradeDialog():boolean {
        return this.gradeService.viewGradeDialog;
        }
    set viewGradeDialog(value: boolean) {
        this.gradeService.viewGradeDialog= value;
        }
    
    get selectedGrade():GradeVo {
           return this.gradeService.selectedGrade;
       }
    set selectedGrade(value: GradeVo) {
        this.gradeService.selectedGrade = value;
       }





}