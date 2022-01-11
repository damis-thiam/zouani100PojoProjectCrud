import {Component, OnInit} from '@angular/core';
import {FormationContinueService} from '../../../controller/service/FormationContinue.service';
import {FormationContinueVo} from '../../../controller/model/FormationContinue.model';
import {OutilFormationContinueVo} from '../../../controller/model/OutilFormationContinue.model';
import {ModaliteFormationContinueVo} from '../../../controller/model/ModaliteFormationContinue.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-formationContinue-list',
  templateUrl: './formationContinue-list.component.html',
  styleUrls: ['./formationContinue-list.component.css']
})

export class FormationContinueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private formationContinueService: FormationContinueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadFormationContinues();
    } 
    
    // methods 
    public async loadFormationContinues(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("FormationContinue", "list");
        isPermistted ? this.formationContinueService.findAll().subscribe(formationContinues => this.formationContinues = formationContinues,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.formationContinueService.findByCriteria(this.searchFormationContinue).subscribe(formationContinues=>{
            
            this.formationContinues = formationContinues;
           // this.searchFormationContinue = new FormationContinueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'annee', header: 'annee'},
                {field: 'tempsEstimePourCetteAnnne', header: 'tempsEstimePourCetteAnnne'},
                {field: 'intituleExact', header: 'intituleExact'},
                {field: 'objetGlobalDeFormationContinues', header: 'objetGlobalDeFormationContinues'},
                {field: 'publiquePrinciplaeConcernerFormationContinues', header: 'publiquePrinciplaeConcernerFormationContinues'},
                {field: 'nombreHeuresDispenseesDansAnnee', header: 'nombreHeuresDispenseesDansAnnee'},
                {field: 'modaliteFormationContinue', header: 'modaliteFormationContinue'},
                {field: 'outilFormationContinue', header: 'outilFormationContinue'},
                {field: 'paysFormationContinues', header: 'paysFormationContinues'},
                {field: 'paysCommanditaire', header: 'paysCommanditaire'},
                {field: 'etablissementCommanditaire', header: 'etablissementCommanditaire'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editFormationContinue(formationContinue:FormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("FormationContinue", "edit");
         if(isPermistted){
         this.selectedFormationContinue = formationContinue;
         this.editFormationContinueDialog = true;
         this.formationContinueService.editFormationContinue$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewFormationContinue(formationContinue:FormationContinueVo){
        const isPermistted = await this.roleService.isPermitted("FormationContinue", "view");
        if(isPermistted){
       this.selectedFormationContinue = formationContinue;
        this.viewFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateFormationContinue(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedFormationContinue = new FormationContinueVo();
        this.createFormationContinueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteFormationContinue(formationContinue:FormationContinueVo){
       const isPermistted = await this.roleService.isPermitted("FormationContinue", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the FormationContinue ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.formationContinueService.delete(formationContinue).subscribe(status=>{
                          if(status > 0){
                          const position = this.formationContinues.indexOf(formationContinue);
                          position > -1 ? this.formationContinues.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'FormationContinue Deleted',
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

    get formationContinues(): Array<FormationContinueVo> {
           return this.formationContinueService.formationContinues;
       }
    set formationContinues(value: Array<FormationContinueVo>) {
        this.formationContinueService.formationContinues = value;
       }

    get formationContinueSelections(): Array<FormationContinueVo> {
           return this.formationContinueService.formationContinueSelections;
       }
    set formationContinueSelections(value: Array<FormationContinueVo>) {
        this.formationContinueService.formationContinueSelections = value;
       }
   
     


    get selectedFormationContinue():FormationContinueVo {
           return this.formationContinueService.selectedFormationContinue;
       }
    set selectedFormationContinue(value: FormationContinueVo) {
        this.formationContinueService.selectedFormationContinue = value;
       }
    
    get createFormationContinueDialog():boolean {
           return this.formationContinueService.createFormationContinueDialog;
       }
    set createFormationContinueDialog(value: boolean) {
        this.formationContinueService.createFormationContinueDialog= value;
       }
    
    get editFormationContinueDialog():boolean {
           return this.formationContinueService.editFormationContinueDialog;
       }
    set editFormationContinueDialog(value: boolean) {
        this.formationContinueService.editFormationContinueDialog= value;
       }
    get viewFormationContinueDialog():boolean {
           return this.formationContinueService.viewFormationContinueDialog;
       }
    set viewFormationContinueDialog(value: boolean) {
        this.formationContinueService.viewFormationContinueDialog = value;
       }
       
     get searchFormationContinue(): FormationContinueVo {
        return this.formationContinueService.searchFormationContinue;
       }
    set searchFormationContinue(value: FormationContinueVo) {
        this.formationContinueService.searchFormationContinue = value;
       }



}