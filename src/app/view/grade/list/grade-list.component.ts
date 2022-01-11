import {Component, OnInit} from '@angular/core';
import {GradeService} from '../../../controller/service/Grade.service';
import {GradeVo} from '../../../controller/model/Grade.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.css']
})

export class GradeListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private gradeService: GradeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadGrades();
    } 
    
    // methods 
    public async loadGrades(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Grade", "list");
        isPermistted ? this.gradeService.findAll().subscribe(grades => this.grades = grades,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.gradeService.findByCriteria(this.searchGrade).subscribe(grades=>{
            
            this.grades = grades;
           // this.searchGrade = new GradeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
                {field: 'description', header: 'description'},
        ];
    }
    
    public async editGrade(grade:GradeVo){
        const isPermistted = await this.roleService.isPermitted("Grade", "edit");
         if(isPermistted){
         this.selectedGrade = grade;
         this.editGradeDialog = true;
         this.gradeService.editGrade$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewGrade(grade:GradeVo){
        const isPermistted = await this.roleService.isPermitted("Grade", "view");
        if(isPermistted){
       this.selectedGrade = grade;
        this.viewGradeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateGrade(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedGrade = new GradeVo();
        this.createGradeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteGrade(grade:GradeVo){
       const isPermistted = await this.roleService.isPermitted("Grade", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Grade ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.gradeService.delete(grade).subscribe(status=>{
                          if(status > 0){
                          const position = this.grades.indexOf(grade);
                          position > -1 ? this.grades.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Grade Deleted',
                        life: 3000
                    });
                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
              });
             }
        

     
    }


    // getters and setters

    get grades(): Array<GradeVo> {
           return this.gradeService.grades;
       }
    set grades(value: Array<GradeVo>) {
        this.gradeService.grades = value;
       }

    get gradeSelections(): Array<GradeVo> {
           return this.gradeService.gradeSelections;
       }
    set gradeSelections(value: Array<GradeVo>) {
        this.gradeService.gradeSelections = value;
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
    
    get editGradeDialog():boolean {
           return this.gradeService.editGradeDialog;
       }
    set editGradeDialog(value: boolean) {
        this.gradeService.editGradeDialog= value;
       }
    get viewGradeDialog():boolean {
           return this.gradeService.viewGradeDialog;
       }
    set viewGradeDialog(value: boolean) {
        this.gradeService.viewGradeDialog = value;
       }
       
     get searchGrade(): GradeVo {
        return this.gradeService.searchGrade;
       }
    set searchGrade(value: GradeVo) {
        this.gradeService.searchGrade = value;
       }



}