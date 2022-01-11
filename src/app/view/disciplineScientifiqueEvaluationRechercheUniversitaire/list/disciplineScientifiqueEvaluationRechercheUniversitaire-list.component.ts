import {Component, OnInit} from '@angular/core';
import {DisciplineScientifiqueEvaluationRechercheUniversitaireService} from '../../../controller/service/DisciplineScientifiqueEvaluationRechercheUniversitaire.service';
import {DisciplineScientifiqueEvaluationRechercheUniversitaireVo} from '../../../controller/model/DisciplineScientifiqueEvaluationRechercheUniversitaire.model';
import {DisciplineScientifiqueVo} from '../../../controller/model/DisciplineScientifique.model';
import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-disciplineScientifiqueEvaluationRechercheUniversitaire-list',
  templateUrl: './disciplineScientifiqueEvaluationRechercheUniversitaire-list.component.html',
  styleUrls: ['./disciplineScientifiqueEvaluationRechercheUniversitaire-list.component.css']
})

export class DisciplineScientifiqueEvaluationRechercheUniversitaireListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private disciplineScientifiqueEvaluationRechercheUniversitaireService: DisciplineScientifiqueEvaluationRechercheUniversitaireService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDisciplineScientifiqueEvaluationRechercheUniversitaires();
    } 
    
    // methods 
    public async loadDisciplineScientifiqueEvaluationRechercheUniversitaires(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEvaluationRechercheUniversitaire", "list");
        isPermistted ? this.disciplineScientifiqueEvaluationRechercheUniversitaireService.findAll().subscribe(disciplineScientifiqueEvaluationRechercheUniversitaires => this.disciplineScientifiqueEvaluationRechercheUniversitaires = disciplineScientifiqueEvaluationRechercheUniversitaires,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.findByCriteria(this.searchDisciplineScientifiqueEvaluationRechercheUniversitaire).subscribe(disciplineScientifiqueEvaluationRechercheUniversitaires=>{
            
            this.disciplineScientifiqueEvaluationRechercheUniversitaires = disciplineScientifiqueEvaluationRechercheUniversitaires;
           // this.searchDisciplineScientifiqueEvaluationRechercheUniversitaire = new DisciplineScientifiqueEvaluationRechercheUniversitaireVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'disciplineScientifique', header: 'disciplineScientifique'},
                {field: 'evaluationRechercheUniversitaire', header: 'evaluationRechercheUniversitaire'},
        ];
    }
    
    public async editDisciplineScientifiqueEvaluationRechercheUniversitaire(disciplineScientifiqueEvaluationRechercheUniversitaire:DisciplineScientifiqueEvaluationRechercheUniversitaireVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEvaluationRechercheUniversitaire", "edit");
         if(isPermistted){
         this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = disciplineScientifiqueEvaluationRechercheUniversitaire;
         this.editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = true;
         this.disciplineScientifiqueEvaluationRechercheUniversitaireService.editDisciplineScientifiqueEvaluationRechercheUniversitaire$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDisciplineScientifiqueEvaluationRechercheUniversitaire(disciplineScientifiqueEvaluationRechercheUniversitaire:DisciplineScientifiqueEvaluationRechercheUniversitaireVo){
        const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEvaluationRechercheUniversitaire", "view");
        if(isPermistted){
       this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = disciplineScientifiqueEvaluationRechercheUniversitaire;
        this.viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDisciplineScientifiqueEvaluationRechercheUniversitaire(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = new DisciplineScientifiqueEvaluationRechercheUniversitaireVo();
        this.createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDisciplineScientifiqueEvaluationRechercheUniversitaire(disciplineScientifiqueEvaluationRechercheUniversitaire:DisciplineScientifiqueEvaluationRechercheUniversitaireVo){
       const isPermistted = await this.roleService.isPermitted("DisciplineScientifiqueEvaluationRechercheUniversitaire", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the DisciplineScientifiqueEvaluationRechercheUniversitaire ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.disciplineScientifiqueEvaluationRechercheUniversitaireService.delete(disciplineScientifiqueEvaluationRechercheUniversitaire).subscribe(status=>{
                          if(status > 0){
                          const position = this.disciplineScientifiqueEvaluationRechercheUniversitaires.indexOf(disciplineScientifiqueEvaluationRechercheUniversitaire);
                          position > -1 ? this.disciplineScientifiqueEvaluationRechercheUniversitaires.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'DisciplineScientifiqueEvaluationRechercheUniversitaire Deleted',
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

    get disciplineScientifiqueEvaluationRechercheUniversitaires(): Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo> {
           return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.disciplineScientifiqueEvaluationRechercheUniversitaires;
       }
    set disciplineScientifiqueEvaluationRechercheUniversitaires(value: Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.disciplineScientifiqueEvaluationRechercheUniversitaires = value;
       }

    get disciplineScientifiqueEvaluationRechercheUniversitaireSelections(): Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo> {
           return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.disciplineScientifiqueEvaluationRechercheUniversitaireSelections;
       }
    set disciplineScientifiqueEvaluationRechercheUniversitaireSelections(value: Array<DisciplineScientifiqueEvaluationRechercheUniversitaireVo>) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.disciplineScientifiqueEvaluationRechercheUniversitaireSelections = value;
       }
   
     


    get selectedDisciplineScientifiqueEvaluationRechercheUniversitaire():DisciplineScientifiqueEvaluationRechercheUniversitaireVo {
           return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire;
       }
    set selectedDisciplineScientifiqueEvaluationRechercheUniversitaire(value: DisciplineScientifiqueEvaluationRechercheUniversitaireVo) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.selectedDisciplineScientifiqueEvaluationRechercheUniversitaire = value;
       }
    
    get createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog():boolean {
           return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog;
       }
    set createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.createDisciplineScientifiqueEvaluationRechercheUniversitaireDialog= value;
       }
    
    get editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog():boolean {
           return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog;
       }
    set editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.editDisciplineScientifiqueEvaluationRechercheUniversitaireDialog= value;
       }
    get viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog():boolean {
           return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog;
       }
    set viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.viewDisciplineScientifiqueEvaluationRechercheUniversitaireDialog = value;
       }
       
     get searchDisciplineScientifiqueEvaluationRechercheUniversitaire(): DisciplineScientifiqueEvaluationRechercheUniversitaireVo {
        return this.disciplineScientifiqueEvaluationRechercheUniversitaireService.searchDisciplineScientifiqueEvaluationRechercheUniversitaire;
       }
    set searchDisciplineScientifiqueEvaluationRechercheUniversitaire(value: DisciplineScientifiqueEvaluationRechercheUniversitaireVo) {
        this.disciplineScientifiqueEvaluationRechercheUniversitaireService.searchDisciplineScientifiqueEvaluationRechercheUniversitaire = value;
       }



}