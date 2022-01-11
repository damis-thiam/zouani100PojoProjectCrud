import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueConseilEtComiteScientifiqueService} from '../../../controller/service/DisciplineScientifiqueConseilEtComiteScientifique.service';
import {DisciplineScientifiqueConseilEtComiteScientifiqueVo} from '../../../controller/model/DisciplineScientifiqueConseilEtComiteScientifique.model';
import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-disciplineScientifiqueConseilEtComiteScientifique-list',
  templateUrl: './disciplineScientifiqueConseilEtComiteScientifique-list.component.html',
  styleUrls: ['./disciplineScientifiqueConseilEtComiteScientifique-list.component.css']
})

export class DisciplineScientifiqueConseilEtComiteScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private disciplineScientifiqueConseilEtComiteScientifiqueService: DisciplineScientifiqueConseilEtComiteScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDisciplineScientifiqueConseilEtComiteScientifiques();
    } 
    
    // methods 
    public async loadDisciplineScientifiqueConseilEtComiteScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueConseilEtComiteScientifique", "list");
        isPermistted ? this.disciplineScientifiqueConseilEtComiteScientifiqueService.findAll().subscribe(disciplineScientifiqueConseilEtComiteScientifiques => this.disciplineScientifiqueConseilEtComiteScientifiques = disciplineScientifiqueConseilEtComiteScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.findByCriteria(this.searchDisciplineScientifiqueConseilEtComiteScientifique).subscribe(disciplineScientifiqueConseilEtComiteScientifiques=>{
            
            this.disciplineScientifiqueConseilEtComiteScientifiques = disciplineScientifiqueConseilEtComiteScientifiques;
           // this.searchDisciplineScientifiqueConseilEtComiteScientifique = new DisciplineScientifiqueConseilEtComiteScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'disciplineScientifique', header: 'disciplineScientifique'},
                {field: 'conseilEtComiteScientifique', header: 'conseilEtComiteScientifique'},
        ];
    }
    
    public async editDisciplineScientifiqueConseilEtComiteScientifique(disciplineScientifiqueConseilEtComiteScientifique:DisciplineScientifiqueConseilEtComiteScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueConseilEtComiteScientifique", "edit");
         if(isPermistted){
         this.selectedDisciplineScientifiqueConseilEtComiteScientifique = disciplineScientifiqueConseilEtComiteScientifique;
         this.editDisciplineScientifiqueConseilEtComiteScientifiqueDialog = true;
         this.disciplineScientifiqueConseilEtComiteScientifiqueService.editDisciplineScientifiqueConseilEtComiteScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDisciplineScientifiqueConseilEtComiteScientifique(disciplineScientifiqueConseilEtComiteScientifique:DisciplineScientifiqueConseilEtComiteScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueConseilEtComiteScientifique", "view");
        if(isPermistted){
       this.selectedDisciplineScientifiqueConseilEtComiteScientifique = disciplineScientifiqueConseilEtComiteScientifique;
        this.viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDisciplineScientifiqueConseilEtComiteScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDisciplineScientifiqueConseilEtComiteScientifique = new DisciplineScientifiqueConseilEtComiteScientifiqueVo();
        this.createDisciplineScientifiqueConseilEtComiteScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDisciplineScientifiqueConseilEtComiteScientifique(disciplineScientifiqueConseilEtComiteScientifique:DisciplineScientifiqueConseilEtComiteScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueConseilEtComiteScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DisciplineScientifiqueConseilEtComiteScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.disciplineScientifiqueConseilEtComiteScientifiqueService.delete(disciplineScientifiqueConseilEtComiteScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.disciplineScientifiqueConseilEtComiteScientifiques.indexOf(disciplineScientifiqueConseilEtComiteScientifique);
                          position > -1 ? this.disciplineScientifiqueConseilEtComiteScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DisciplineScientifiqueConseilEtComiteScientifique Deleted',
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

    get disciplineScientifiqueConseilEtComiteScientifiques(): Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo> {
           return this.disciplineScientifiqueConseilEtComiteScientifiqueService.disciplineScientifiqueConseilEtComiteScientifiques;
       }
    set disciplineScientifiqueConseilEtComiteScientifiques(value: Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.disciplineScientifiqueConseilEtComiteScientifiques = value;
       }

    get disciplineScientifiqueConseilEtComiteScientifiqueSelections(): Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo> {
           return this.disciplineScientifiqueConseilEtComiteScientifiqueService.disciplineScientifiqueConseilEtComiteScientifiqueSelections;
       }
    set disciplineScientifiqueConseilEtComiteScientifiqueSelections(value: Array<DisciplineScientifiqueConseilEtComiteScientifiqueVo>) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.disciplineScientifiqueConseilEtComiteScientifiqueSelections = value;
       }
   
     


    get selectedDisciplineScientifiqueConseilEtComiteScientifique():DisciplineScientifiqueConseilEtComiteScientifiqueVo {
           return this.disciplineScientifiqueConseilEtComiteScientifiqueService.selectedDisciplineScientifiqueConseilEtComiteScientifique;
       }
    set selectedDisciplineScientifiqueConseilEtComiteScientifique(value: DisciplineScientifiqueConseilEtComiteScientifiqueVo) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.selectedDisciplineScientifiqueConseilEtComiteScientifique = value;
       }
    
    get createDisciplineScientifiqueConseilEtComiteScientifiqueDialog():boolean {
           return this.disciplineScientifiqueConseilEtComiteScientifiqueService.createDisciplineScientifiqueConseilEtComiteScientifiqueDialog;
       }
    set createDisciplineScientifiqueConseilEtComiteScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.createDisciplineScientifiqueConseilEtComiteScientifiqueDialog= value;
       }
    
    get editDisciplineScientifiqueConseilEtComiteScientifiqueDialog():boolean {
           return this.disciplineScientifiqueConseilEtComiteScientifiqueService.editDisciplineScientifiqueConseilEtComiteScientifiqueDialog;
       }
    set editDisciplineScientifiqueConseilEtComiteScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.editDisciplineScientifiqueConseilEtComiteScientifiqueDialog= value;
       }
    get viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog():boolean {
           return this.disciplineScientifiqueConseilEtComiteScientifiqueService.viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog;
       }
    set viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog(value: boolean) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.viewDisciplineScientifiqueConseilEtComiteScientifiqueDialog = value;
       }
       
     get searchDisciplineScientifiqueConseilEtComiteScientifique(): DisciplineScientifiqueConseilEtComiteScientifiqueVo {
        return this.disciplineScientifiqueConseilEtComiteScientifiqueService.searchDisciplineScientifiqueConseilEtComiteScientifique;
       }
    set searchDisciplineScientifiqueConseilEtComiteScientifique(value: DisciplineScientifiqueConseilEtComiteScientifiqueVo) {
        this.disciplineScientifiqueConseilEtComiteScientifiqueService.searchDisciplineScientifiqueConseilEtComiteScientifique = value;
       }



}