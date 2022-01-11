import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueEncadrementEtudiantService} from '../../../controller/service/DisciplineScientifiqueEncadrementEtudiant.service';
import {DisciplineScientifiqueEncadrementEtudiantVo} from '../../../controller/model/DisciplineScientifiqueEncadrementEtudiant.model';
import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-disciplineScientifiqueEncadrementEtudiant-list',
  templateUrl: './disciplineScientifiqueEncadrementEtudiant-list.component.html',
  styleUrls: ['./disciplineScientifiqueEncadrementEtudiant-list.component.css']
})

export class DisciplineScientifiqueEncadrementEtudiantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private disciplineScientifiqueEncadrementEtudiantService: DisciplineScientifiqueEncadrementEtudiantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDisciplineScientifiqueEncadrementEtudiants();
    } 
    
    // methods 
    public async loadDisciplineScientifiqueEncadrementEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEncadrementEtudiant", "list");
        isPermistted ? this.disciplineScientifiqueEncadrementEtudiantService.findAll().subscribe(disciplineScientifiqueEncadrementEtudiants => this.disciplineScientifiqueEncadrementEtudiants = disciplineScientifiqueEncadrementEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.disciplineScientifiqueEncadrementEtudiantService.findByCriteria(this.searchDisciplineScientifiqueEncadrementEtudiant).subscribe(disciplineScientifiqueEncadrementEtudiants=>{
            
            this.disciplineScientifiqueEncadrementEtudiants = disciplineScientifiqueEncadrementEtudiants;
           // this.searchDisciplineScientifiqueEncadrementEtudiant = new DisciplineScientifiqueEncadrementEtudiantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'disciplineScientifique', header: 'disciplineScientifique'},
                {field: 'encadrementEtudiant', header: 'encadrementEtudiant'},
        ];
    }
    
    public async editDisciplineScientifiqueEncadrementEtudiant(disciplineScientifiqueEncadrementEtudiant:DisciplineScientifiqueEncadrementEtudiantVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEncadrementEtudiant", "edit");
         if(isPermistted){
         this.selectedDisciplineScientifiqueEncadrementEtudiant = disciplineScientifiqueEncadrementEtudiant;
         this.editDisciplineScientifiqueEncadrementEtudiantDialog = true;
         this.disciplineScientifiqueEncadrementEtudiantService.editDisciplineScientifiqueEncadrementEtudiant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDisciplineScientifiqueEncadrementEtudiant(disciplineScientifiqueEncadrementEtudiant:DisciplineScientifiqueEncadrementEtudiantVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEncadrementEtudiant", "view");
        if(isPermistted){
       this.selectedDisciplineScientifiqueEncadrementEtudiant = disciplineScientifiqueEncadrementEtudiant;
        this.viewDisciplineScientifiqueEncadrementEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDisciplineScientifiqueEncadrementEtudiant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDisciplineScientifiqueEncadrementEtudiant = new DisciplineScientifiqueEncadrementEtudiantVo();
        this.createDisciplineScientifiqueEncadrementEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDisciplineScientifiqueEncadrementEtudiant(disciplineScientifiqueEncadrementEtudiant:DisciplineScientifiqueEncadrementEtudiantVo){
       const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEncadrementEtudiant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DisciplineScientifiqueEncadrementEtudiant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.disciplineScientifiqueEncadrementEtudiantService.delete(disciplineScientifiqueEncadrementEtudiant).subscribe(status=>{
                          if(status > 0){
                          const position = this.disciplineScientifiqueEncadrementEtudiants.indexOf(disciplineScientifiqueEncadrementEtudiant);
                          position > -1 ? this.disciplineScientifiqueEncadrementEtudiants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DisciplineScientifiqueEncadrementEtudiant Deleted',
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

    get disciplineScientifiqueEncadrementEtudiants(): Array<DisciplineScientifiqueEncadrementEtudiantVo> {
           return this.disciplineScientifiqueEncadrementEtudiantService.disciplineScientifiqueEncadrementEtudiants;
       }
    set disciplineScientifiqueEncadrementEtudiants(value: Array<DisciplineScientifiqueEncadrementEtudiantVo>) {
        this.disciplineScientifiqueEncadrementEtudiantService.disciplineScientifiqueEncadrementEtudiants = value;
       }

    get disciplineScientifiqueEncadrementEtudiantSelections(): Array<DisciplineScientifiqueEncadrementEtudiantVo> {
           return this.disciplineScientifiqueEncadrementEtudiantService.disciplineScientifiqueEncadrementEtudiantSelections;
       }
    set disciplineScientifiqueEncadrementEtudiantSelections(value: Array<DisciplineScientifiqueEncadrementEtudiantVo>) {
        this.disciplineScientifiqueEncadrementEtudiantService.disciplineScientifiqueEncadrementEtudiantSelections = value;
       }
   
     


    get selectedDisciplineScientifiqueEncadrementEtudiant():DisciplineScientifiqueEncadrementEtudiantVo {
           return this.disciplineScientifiqueEncadrementEtudiantService.selectedDisciplineScientifiqueEncadrementEtudiant;
       }
    set selectedDisciplineScientifiqueEncadrementEtudiant(value: DisciplineScientifiqueEncadrementEtudiantVo) {
        this.disciplineScientifiqueEncadrementEtudiantService.selectedDisciplineScientifiqueEncadrementEtudiant = value;
       }
    
    get createDisciplineScientifiqueEncadrementEtudiantDialog():boolean {
           return this.disciplineScientifiqueEncadrementEtudiantService.createDisciplineScientifiqueEncadrementEtudiantDialog;
       }
    set createDisciplineScientifiqueEncadrementEtudiantDialog(value: boolean) {
        this.disciplineScientifiqueEncadrementEtudiantService.createDisciplineScientifiqueEncadrementEtudiantDialog= value;
       }
    
    get editDisciplineScientifiqueEncadrementEtudiantDialog():boolean {
           return this.disciplineScientifiqueEncadrementEtudiantService.editDisciplineScientifiqueEncadrementEtudiantDialog;
       }
    set editDisciplineScientifiqueEncadrementEtudiantDialog(value: boolean) {
        this.disciplineScientifiqueEncadrementEtudiantService.editDisciplineScientifiqueEncadrementEtudiantDialog= value;
       }
    get viewDisciplineScientifiqueEncadrementEtudiantDialog():boolean {
           return this.disciplineScientifiqueEncadrementEtudiantService.viewDisciplineScientifiqueEncadrementEtudiantDialog;
       }
    set viewDisciplineScientifiqueEncadrementEtudiantDialog(value: boolean) {
        this.disciplineScientifiqueEncadrementEtudiantService.viewDisciplineScientifiqueEncadrementEtudiantDialog = value;
       }
       
     get searchDisciplineScientifiqueEncadrementEtudiant(): DisciplineScientifiqueEncadrementEtudiantVo {
        return this.disciplineScientifiqueEncadrementEtudiantService.searchDisciplineScientifiqueEncadrementEtudiant;
       }
    set searchDisciplineScientifiqueEncadrementEtudiant(value: DisciplineScientifiqueEncadrementEtudiantVo) {
        this.disciplineScientifiqueEncadrementEtudiantService.searchDisciplineScientifiqueEncadrementEtudiant = value;
       }



}