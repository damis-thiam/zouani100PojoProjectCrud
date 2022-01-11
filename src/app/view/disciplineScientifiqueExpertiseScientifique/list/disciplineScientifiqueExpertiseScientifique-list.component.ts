import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueExpertiseScientifiqueService} from '../../../controller/service/DisciplineScientifiqueExpertiseScientifique.service';
import {DisciplineScientifiqueExpertiseScientifiqueVo} from '../../../controller/model/DisciplineScientifiqueExpertiseScientifique.model';
import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-disciplineScientifiqueExpertiseScientifique-list',
  templateUrl: './disciplineScientifiqueExpertiseScientifique-list.component.html',
  styleUrls: ['./disciplineScientifiqueExpertiseScientifique-list.component.css']
})

export class DisciplineScientifiqueExpertiseScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private disciplineScientifiqueExpertiseScientifiqueService: DisciplineScientifiqueExpertiseScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDisciplineScientifiqueExpertiseScientifiques();
    } 
    
    // methods 
    public async loadDisciplineScientifiqueExpertiseScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueExpertiseScientifique", "list");
        isPermistted ? this.disciplineScientifiqueExpertiseScientifiqueService.findAll().subscribe(disciplineScientifiqueExpertiseScientifiques => this.disciplineScientifiqueExpertiseScientifiques = disciplineScientifiqueExpertiseScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.disciplineScientifiqueExpertiseScientifiqueService.findByCriteria(this.searchDisciplineScientifiqueExpertiseScientifique).subscribe(disciplineScientifiqueExpertiseScientifiques=>{
            
            this.disciplineScientifiqueExpertiseScientifiques = disciplineScientifiqueExpertiseScientifiques;
           // this.searchDisciplineScientifiqueExpertiseScientifique = new DisciplineScientifiqueExpertiseScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'disciplineScientifique', header: 'disciplineScientifique'},
                {field: 'experiseScientifique', header: 'experiseScientifique'},
        ];
    }
    
    public async editDisciplineScientifiqueExpertiseScientifique(disciplineScientifiqueExpertiseScientifique:DisciplineScientifiqueExpertiseScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueExpertiseScientifique", "edit");
         if(isPermistted){
         this.selectedDisciplineScientifiqueExpertiseScientifique = disciplineScientifiqueExpertiseScientifique;
         this.editDisciplineScientifiqueExpertiseScientifiqueDialog = true;
         this.disciplineScientifiqueExpertiseScientifiqueService.editDisciplineScientifiqueExpertiseScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDisciplineScientifiqueExpertiseScientifique(disciplineScientifiqueExpertiseScientifique:DisciplineScientifiqueExpertiseScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueExpertiseScientifique", "view");
        if(isPermistted){
       this.selectedDisciplineScientifiqueExpertiseScientifique = disciplineScientifiqueExpertiseScientifique;
        this.viewDisciplineScientifiqueExpertiseScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDisciplineScientifiqueExpertiseScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDisciplineScientifiqueExpertiseScientifique = new DisciplineScientifiqueExpertiseScientifiqueVo();
        this.createDisciplineScientifiqueExpertiseScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDisciplineScientifiqueExpertiseScientifique(disciplineScientifiqueExpertiseScientifique:DisciplineScientifiqueExpertiseScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueExpertiseScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DisciplineScientifiqueExpertiseScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.disciplineScientifiqueExpertiseScientifiqueService.delete(disciplineScientifiqueExpertiseScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.disciplineScientifiqueExpertiseScientifiques.indexOf(disciplineScientifiqueExpertiseScientifique);
                          position > -1 ? this.disciplineScientifiqueExpertiseScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DisciplineScientifiqueExpertiseScientifique Deleted',
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

    get disciplineScientifiqueExpertiseScientifiques(): Array<DisciplineScientifiqueExpertiseScientifiqueVo> {
           return this.disciplineScientifiqueExpertiseScientifiqueService.disciplineScientifiqueExpertiseScientifiques;
       }
    set disciplineScientifiqueExpertiseScientifiques(value: Array<DisciplineScientifiqueExpertiseScientifiqueVo>) {
        this.disciplineScientifiqueExpertiseScientifiqueService.disciplineScientifiqueExpertiseScientifiques = value;
       }

    get disciplineScientifiqueExpertiseScientifiqueSelections(): Array<DisciplineScientifiqueExpertiseScientifiqueVo> {
           return this.disciplineScientifiqueExpertiseScientifiqueService.disciplineScientifiqueExpertiseScientifiqueSelections;
       }
    set disciplineScientifiqueExpertiseScientifiqueSelections(value: Array<DisciplineScientifiqueExpertiseScientifiqueVo>) {
        this.disciplineScientifiqueExpertiseScientifiqueService.disciplineScientifiqueExpertiseScientifiqueSelections = value;
       }
   
     


    get selectedDisciplineScientifiqueExpertiseScientifique():DisciplineScientifiqueExpertiseScientifiqueVo {
           return this.disciplineScientifiqueExpertiseScientifiqueService.selectedDisciplineScientifiqueExpertiseScientifique;
       }
    set selectedDisciplineScientifiqueExpertiseScientifique(value: DisciplineScientifiqueExpertiseScientifiqueVo) {
        this.disciplineScientifiqueExpertiseScientifiqueService.selectedDisciplineScientifiqueExpertiseScientifique = value;
       }
    
    get createDisciplineScientifiqueExpertiseScientifiqueDialog():boolean {
           return this.disciplineScientifiqueExpertiseScientifiqueService.createDisciplineScientifiqueExpertiseScientifiqueDialog;
       }
    set createDisciplineScientifiqueExpertiseScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueExpertiseScientifiqueService.createDisciplineScientifiqueExpertiseScientifiqueDialog= value;
       }
    
    get editDisciplineScientifiqueExpertiseScientifiqueDialog():boolean {
           return this.disciplineScientifiqueExpertiseScientifiqueService.editDisciplineScientifiqueExpertiseScientifiqueDialog;
       }
    set editDisciplineScientifiqueExpertiseScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueExpertiseScientifiqueService.editDisciplineScientifiqueExpertiseScientifiqueDialog= value;
       }
    get viewDisciplineScientifiqueExpertiseScientifiqueDialog():boolean {
           return this.disciplineScientifiqueExpertiseScientifiqueService.viewDisciplineScientifiqueExpertiseScientifiqueDialog;
       }
    set viewDisciplineScientifiqueExpertiseScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueExpertiseScientifiqueService.viewDisciplineScientifiqueExpertiseScientifiqueDialog = value;
       }
       
     get searchDisciplineScientifiqueExpertiseScientifique(): DisciplineScientifiqueExpertiseScientifiqueVo {
        return this.disciplineScientifiqueExpertiseScientifiqueService.searchDisciplineScientifiqueExpertiseScientifique;
       }
    set searchDisciplineScientifiqueExpertiseScientifique(value: DisciplineScientifiqueExpertiseScientifiqueVo) {
        this.disciplineScientifiqueExpertiseScientifiqueService.searchDisciplineScientifiqueExpertiseScientifique = value;
       }



}