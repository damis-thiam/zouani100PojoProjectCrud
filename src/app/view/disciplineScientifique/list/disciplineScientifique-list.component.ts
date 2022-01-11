import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueService} from '../../../controller/service/DisciplineScientifique.service';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-disciplineScientifique-list',
  templateUrl: './disciplineScientifique-list.component.html',
  styleUrls: ['./disciplineScientifique-list.component.css']
})

export class DisciplineScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private disciplineScientifiqueService: DisciplineScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDisciplineScientifiques();
    } 
    
    // methods 
    public async loadDisciplineScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifique", "list");
        isPermistted ? this.disciplineScientifiqueService.findAll().subscribe(disciplineScientifiques => this.disciplineScientifiques = disciplineScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.disciplineScientifiqueService.findByCriteria(this.searchDisciplineScientifique).subscribe(disciplineScientifiques=>{
            
            this.disciplineScientifiques = disciplineScientifiques;
           // this.searchDisciplineScientifique = new DisciplineScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editDisciplineScientifique(disciplineScientifique:DisciplineScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifique", "edit");
         if(isPermistted){
         this.selectedDisciplineScientifique = disciplineScientifique;
         this.editDisciplineScientifiqueDialog = true;
         this.disciplineScientifiqueService.editDisciplineScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDisciplineScientifique(disciplineScientifique:DisciplineScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifique", "view");
        if(isPermistted){
       this.selectedDisciplineScientifique = disciplineScientifique;
        this.viewDisciplineScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDisciplineScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDisciplineScientifique = new DisciplineScientifiqueVo();
        this.createDisciplineScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDisciplineScientifique(disciplineScientifique:DisciplineScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("DisciplineScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DisciplineScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.disciplineScientifiqueService.delete(disciplineScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.disciplineScientifiques.indexOf(disciplineScientifique);
                          position > -1 ? this.disciplineScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DisciplineScientifique Deleted',
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

    get disciplineScientifiques(): Array<DisciplineScientifiqueVo> {
           return this.disciplineScientifiqueService.disciplineScientifiques;
       }
    set disciplineScientifiques(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueService.disciplineScientifiques = value;
       }

    get disciplineScientifiqueSelections(): Array<DisciplineScientifiqueVo> {
           return this.disciplineScientifiqueService.disciplineScientifiqueSelections;
       }
    set disciplineScientifiqueSelections(value: Array<DisciplineScientifiqueVo>) {
        this.disciplineScientifiqueService.disciplineScientifiqueSelections = value;
       }
   
     


    get selectedDisciplineScientifique():DisciplineScientifiqueVo {
           return this.disciplineScientifiqueService.selectedDisciplineScientifique;
       }
    set selectedDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.selectedDisciplineScientifique = value;
       }
    
    get createDisciplineScientifiqueDialog():boolean {
           return this.disciplineScientifiqueService.createDisciplineScientifiqueDialog;
       }
    set createDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.createDisciplineScientifiqueDialog= value;
       }
    
    get editDisciplineScientifiqueDialog():boolean {
           return this.disciplineScientifiqueService.editDisciplineScientifiqueDialog;
       }
    set editDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.editDisciplineScientifiqueDialog= value;
       }
    get viewDisciplineScientifiqueDialog():boolean {
           return this.disciplineScientifiqueService.viewDisciplineScientifiqueDialog;
       }
    set viewDisciplineScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueService.viewDisciplineScientifiqueDialog = value;
       }
       
     get searchDisciplineScientifique(): DisciplineScientifiqueVo {
        return this.disciplineScientifiqueService.searchDisciplineScientifique;
       }
    set searchDisciplineScientifique(value: DisciplineScientifiqueVo) {
        this.disciplineScientifiqueService.searchDisciplineScientifique = value;
       }



}