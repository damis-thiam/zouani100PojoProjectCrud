import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueEvenementColloqueScientifiquesService} from '../../../controller/service/DisciplineScientifiqueEvenementColloqueScientifiques.service';
import {DisciplineScientifiqueEvenementColloqueScientifiquesVo} from '../../../controller/model/DisciplineScientifiqueEvenementColloqueScientifiques.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-disciplineScientifiqueEvenementColloqueScientifiques-list',
  templateUrl: './disciplineScientifiqueEvenementColloqueScientifiques-list.component.html',
  styleUrls: ['./disciplineScientifiqueEvenementColloqueScientifiques-list.component.css']
})

export class DisciplineScientifiqueEvenementColloqueScientifiquesListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private disciplineScientifiqueEvenementColloqueScientifiquesService: DisciplineScientifiqueEvenementColloqueScientifiquesService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDisciplineScientifiqueEvenementColloqueScientifiquess();
    } 
    
    // methods 
    public async loadDisciplineScientifiqueEvenementColloqueScientifiquess(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEvenementColloqueScientifiques", "list");
        isPermistted ? this.disciplineScientifiqueEvenementColloqueScientifiquesService.findAll().subscribe(disciplineScientifiqueEvenementColloqueScientifiquess => this.disciplineScientifiqueEvenementColloqueScientifiquess = disciplineScientifiqueEvenementColloqueScientifiquess,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.findByCriteria(this.searchDisciplineScientifiqueEvenementColloqueScientifiques).subscribe(disciplineScientifiqueEvenementColloqueScientifiquess=>{
            
            this.disciplineScientifiqueEvenementColloqueScientifiquess = disciplineScientifiqueEvenementColloqueScientifiquess;
           // this.searchDisciplineScientifiqueEvenementColloqueScientifiques = new DisciplineScientifiqueEvenementColloqueScientifiquesVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'communauteSavoir', header: 'communauteSavoir'},
                {field: 'disciplineScientifique', header: 'disciplineScientifique'},
        ];
    }
    
    public async editDisciplineScientifiqueEvenementColloqueScientifiques(disciplineScientifiqueEvenementColloqueScientifiques:DisciplineScientifiqueEvenementColloqueScientifiquesVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEvenementColloqueScientifiques", "edit");
         if(isPermistted){
         this.selectedDisciplineScientifiqueEvenementColloqueScientifiques = disciplineScientifiqueEvenementColloqueScientifiques;
         this.editDisciplineScientifiqueEvenementColloqueScientifiquesDialog = true;
         this.disciplineScientifiqueEvenementColloqueScientifiquesService.editDisciplineScientifiqueEvenementColloqueScientifiques$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDisciplineScientifiqueEvenementColloqueScientifiques(disciplineScientifiqueEvenementColloqueScientifiques:DisciplineScientifiqueEvenementColloqueScientifiquesVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEvenementColloqueScientifiques", "view");
        if(isPermistted){
       this.selectedDisciplineScientifiqueEvenementColloqueScientifiques = disciplineScientifiqueEvenementColloqueScientifiques;
        this.viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDisciplineScientifiqueEvenementColloqueScientifiques(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDisciplineScientifiqueEvenementColloqueScientifiques = new DisciplineScientifiqueEvenementColloqueScientifiquesVo();
        this.createDisciplineScientifiqueEvenementColloqueScientifiquesDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDisciplineScientifiqueEvenementColloqueScientifiques(disciplineScientifiqueEvenementColloqueScientifiques:DisciplineScientifiqueEvenementColloqueScientifiquesVo){
       const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEvenementColloqueScientifiques", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DisciplineScientifiqueEvenementColloqueScientifiques ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.disciplineScientifiqueEvenementColloqueScientifiquesService.delete(disciplineScientifiqueEvenementColloqueScientifiques).subscribe(status=>{
                          if(status > 0){
                          const position = this.disciplineScientifiqueEvenementColloqueScientifiquess.indexOf(disciplineScientifiqueEvenementColloqueScientifiques);
                          position > -1 ? this.disciplineScientifiqueEvenementColloqueScientifiquess.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DisciplineScientifiqueEvenementColloqueScientifiques Deleted',
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

    get disciplineScientifiqueEvenementColloqueScientifiquess(): Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo> {
           return this.disciplineScientifiqueEvenementColloqueScientifiquesService.disciplineScientifiqueEvenementColloqueScientifiquess;
       }
    set disciplineScientifiqueEvenementColloqueScientifiquess(value: Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.disciplineScientifiqueEvenementColloqueScientifiquess = value;
       }

    get disciplineScientifiqueEvenementColloqueScientifiquesSelections(): Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo> {
           return this.disciplineScientifiqueEvenementColloqueScientifiquesService.disciplineScientifiqueEvenementColloqueScientifiquesSelections;
       }
    set disciplineScientifiqueEvenementColloqueScientifiquesSelections(value: Array<DisciplineScientifiqueEvenementColloqueScientifiquesVo>) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.disciplineScientifiqueEvenementColloqueScientifiquesSelections = value;
       }
   
     


    get selectedDisciplineScientifiqueEvenementColloqueScientifiques():DisciplineScientifiqueEvenementColloqueScientifiquesVo {
           return this.disciplineScientifiqueEvenementColloqueScientifiquesService.selectedDisciplineScientifiqueEvenementColloqueScientifiques;
       }
    set selectedDisciplineScientifiqueEvenementColloqueScientifiques(value: DisciplineScientifiqueEvenementColloqueScientifiquesVo) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.selectedDisciplineScientifiqueEvenementColloqueScientifiques = value;
       }
    
    get createDisciplineScientifiqueEvenementColloqueScientifiquesDialog():boolean {
           return this.disciplineScientifiqueEvenementColloqueScientifiquesService.createDisciplineScientifiqueEvenementColloqueScientifiquesDialog;
       }
    set createDisciplineScientifiqueEvenementColloqueScientifiquesDialog(value: boolean) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.createDisciplineScientifiqueEvenementColloqueScientifiquesDialog= value;
       }
    
    get editDisciplineScientifiqueEvenementColloqueScientifiquesDialog():boolean {
           return this.disciplineScientifiqueEvenementColloqueScientifiquesService.editDisciplineScientifiqueEvenementColloqueScientifiquesDialog;
       }
    set editDisciplineScientifiqueEvenementColloqueScientifiquesDialog(value: boolean) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.editDisciplineScientifiqueEvenementColloqueScientifiquesDialog= value;
       }
    get viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog():boolean {
           return this.disciplineScientifiqueEvenementColloqueScientifiquesService.viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog;
       }
    set viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog(value: boolean) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.viewDisciplineScientifiqueEvenementColloqueScientifiquesDialog = value;
       }
       
     get searchDisciplineScientifiqueEvenementColloqueScientifiques(): DisciplineScientifiqueEvenementColloqueScientifiquesVo {
        return this.disciplineScientifiqueEvenementColloqueScientifiquesService.searchDisciplineScientifiqueEvenementColloqueScientifiques;
       }
    set searchDisciplineScientifiqueEvenementColloqueScientifiques(value: DisciplineScientifiqueEvenementColloqueScientifiquesVo) {
        this.disciplineScientifiqueEvenementColloqueScientifiquesService.searchDisciplineScientifiqueEvenementColloqueScientifiques = value;
       }



}