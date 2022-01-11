import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirEvaluationRechercheUniversitaireService} from '../../../controller/service/CommunauteSavoirEvaluationRechercheUniversitaire.service';
import {CommunauteSavoirEvaluationRechercheUniversitaireVo} from '../../../controller/model/CommunauteSavoirEvaluationRechercheUniversitaire.model';
import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-communauteSavoirEvaluationRechercheUniversitaire-list',
  templateUrl: './communauteSavoirEvaluationRechercheUniversitaire-list.component.html',
  styleUrls: ['./communauteSavoirEvaluationRechercheUniversitaire-list.component.css']
})

export class CommunauteSavoirEvaluationRechercheUniversitaireListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private communauteSavoirEvaluationRechercheUniversitaireService: CommunauteSavoirEvaluationRechercheUniversitaireService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCommunauteSavoirEvaluationRechercheUniversitaires();
    } 
    
    // methods 
    public async loadCommunauteSavoirEvaluationRechercheUniversitaires(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEvaluationRechercheUniversitaire", "list");
        isPermistted ? this.communauteSavoirEvaluationRechercheUniversitaireService.findAll().subscribe(communauteSavoirEvaluationRechercheUniversitaires => this.communauteSavoirEvaluationRechercheUniversitaires = communauteSavoirEvaluationRechercheUniversitaires,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.communauteSavoirEvaluationRechercheUniversitaireService.findByCriteria(this.searchCommunauteSavoirEvaluationRechercheUniversitaire).subscribe(communauteSavoirEvaluationRechercheUniversitaires=>{
            
            this.communauteSavoirEvaluationRechercheUniversitaires = communauteSavoirEvaluationRechercheUniversitaires;
           // this.searchCommunauteSavoirEvaluationRechercheUniversitaire = new CommunauteSavoirEvaluationRechercheUniversitaireVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'evaluationRechercheUniversitaire', header: 'evaluationRechercheUniversitaire'},
                {field: 'communauteSavoir', header: 'communauteSavoir'},
        ];
    }
    
    public async editCommunauteSavoirEvaluationRechercheUniversitaire(communauteSavoirEvaluationRechercheUniversitaire:CommunauteSavoirEvaluationRechercheUniversitaireVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEvaluationRechercheUniversitaire", "edit");
         if(isPermistted){
         this.selectedCommunauteSavoirEvaluationRechercheUniversitaire = communauteSavoirEvaluationRechercheUniversitaire;
         this.editCommunauteSavoirEvaluationRechercheUniversitaireDialog = true;
         this.communauteSavoirEvaluationRechercheUniversitaireService.editCommunauteSavoirEvaluationRechercheUniversitaire$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCommunauteSavoirEvaluationRechercheUniversitaire(communauteSavoirEvaluationRechercheUniversitaire:CommunauteSavoirEvaluationRechercheUniversitaireVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEvaluationRechercheUniversitaire", "view");
        if(isPermistted){
       this.selectedCommunauteSavoirEvaluationRechercheUniversitaire = communauteSavoirEvaluationRechercheUniversitaire;
        this.viewCommunauteSavoirEvaluationRechercheUniversitaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCommunauteSavoirEvaluationRechercheUniversitaire(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCommunauteSavoirEvaluationRechercheUniversitaire = new CommunauteSavoirEvaluationRechercheUniversitaireVo();
        this.createCommunauteSavoirEvaluationRechercheUniversitaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCommunauteSavoirEvaluationRechercheUniversitaire(communauteSavoirEvaluationRechercheUniversitaire:CommunauteSavoirEvaluationRechercheUniversitaireVo){
       const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEvaluationRechercheUniversitaire", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CommunauteSavoirEvaluationRechercheUniversitaire ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.communauteSavoirEvaluationRechercheUniversitaireService.delete(communauteSavoirEvaluationRechercheUniversitaire).subscribe(status=>{
                          if(status > 0){
                          const position = this.communauteSavoirEvaluationRechercheUniversitaires.indexOf(communauteSavoirEvaluationRechercheUniversitaire);
                          position > -1 ? this.communauteSavoirEvaluationRechercheUniversitaires.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CommunauteSavoirEvaluationRechercheUniversitaire Deleted',
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

    get communauteSavoirEvaluationRechercheUniversitaires(): Array<CommunauteSavoirEvaluationRechercheUniversitaireVo> {
           return this.communauteSavoirEvaluationRechercheUniversitaireService.communauteSavoirEvaluationRechercheUniversitaires;
       }
    set communauteSavoirEvaluationRechercheUniversitaires(value: Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.communauteSavoirEvaluationRechercheUniversitaires = value;
       }

    get communauteSavoirEvaluationRechercheUniversitaireSelections(): Array<CommunauteSavoirEvaluationRechercheUniversitaireVo> {
           return this.communauteSavoirEvaluationRechercheUniversitaireService.communauteSavoirEvaluationRechercheUniversitaireSelections;
       }
    set communauteSavoirEvaluationRechercheUniversitaireSelections(value: Array<CommunauteSavoirEvaluationRechercheUniversitaireVo>) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.communauteSavoirEvaluationRechercheUniversitaireSelections = value;
       }
   
     


    get selectedCommunauteSavoirEvaluationRechercheUniversitaire():CommunauteSavoirEvaluationRechercheUniversitaireVo {
           return this.communauteSavoirEvaluationRechercheUniversitaireService.selectedCommunauteSavoirEvaluationRechercheUniversitaire;
       }
    set selectedCommunauteSavoirEvaluationRechercheUniversitaire(value: CommunauteSavoirEvaluationRechercheUniversitaireVo) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.selectedCommunauteSavoirEvaluationRechercheUniversitaire = value;
       }
    
    get createCommunauteSavoirEvaluationRechercheUniversitaireDialog():boolean {
           return this.communauteSavoirEvaluationRechercheUniversitaireService.createCommunauteSavoirEvaluationRechercheUniversitaireDialog;
       }
    set createCommunauteSavoirEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.createCommunauteSavoirEvaluationRechercheUniversitaireDialog= value;
       }
    
    get editCommunauteSavoirEvaluationRechercheUniversitaireDialog():boolean {
           return this.communauteSavoirEvaluationRechercheUniversitaireService.editCommunauteSavoirEvaluationRechercheUniversitaireDialog;
       }
    set editCommunauteSavoirEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.editCommunauteSavoirEvaluationRechercheUniversitaireDialog= value;
       }
    get viewCommunauteSavoirEvaluationRechercheUniversitaireDialog():boolean {
           return this.communauteSavoirEvaluationRechercheUniversitaireService.viewCommunauteSavoirEvaluationRechercheUniversitaireDialog;
       }
    set viewCommunauteSavoirEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.viewCommunauteSavoirEvaluationRechercheUniversitaireDialog = value;
       }
       
     get searchCommunauteSavoirEvaluationRechercheUniversitaire(): CommunauteSavoirEvaluationRechercheUniversitaireVo {
        return this.communauteSavoirEvaluationRechercheUniversitaireService.searchCommunauteSavoirEvaluationRechercheUniversitaire;
       }
    set searchCommunauteSavoirEvaluationRechercheUniversitaire(value: CommunauteSavoirEvaluationRechercheUniversitaireVo) {
        this.communauteSavoirEvaluationRechercheUniversitaireService.searchCommunauteSavoirEvaluationRechercheUniversitaire = value;
       }



}