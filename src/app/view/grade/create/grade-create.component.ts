import {Component, OnInit} from '@angular/core';
import {GradeService} from '../../../controller/service/Grade.service';
import {GradeVo} from '../../../controller/model/Grade.model';

@Component({
  selector: 'app-grade-create',
  templateUrl: './grade-create.component.html',
  styleUrls: ['./grade-create.component.css']
})
export class GradeCreateComponent implements OnInit {

constructor(private gradeService: GradeService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.gradeService.save().subscribe(grade=>{
          
       this.grades.push({...grade});
       this.createGradeDialog = false;
       this.selectedGrade = new GradeVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createGradeDialog  = false;
}

// getters and setters 

get grades(): Array<GradeVo> {
    return this.gradeService.grades;
       }
set grades(value: Array<GradeVo>) {
        this.gradeService.grades = value;
       } 

 get selectedGrade():GradeVo {
           return this.gradeService.selectedGrade;
       }
    set selectedGrade(value: GradeVo) {
        this.gradeService.selectedGrade = value;
       }
  
   get createGradeDialog():boolean {
           return this.gradeService.createGradeDialog;
       }
    set createGradeDialog(value: boolean) {
        this.gradeService.createGradeDialog= value;
       }


}