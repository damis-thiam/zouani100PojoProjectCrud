import {Component, OnInit} from '@angular/core';
import {EvaluationRechercheUniversitaireService} from '../../../controller/service/EvaluationRechercheUniversitaire.service';
import {EvaluationRechercheUniversitaireVo} from '../../../controller/model/EvaluationRechercheUniversitaire.model';
import {RoleEvaluationRechercheUniversitaireVo} from '../../../controller/model/RoleEvaluationRechercheUniversitaire.model';
import {TypeExpertVo} from '../../../controller/model/TypeExpert.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-evaluationRechercheUniversitaire-list',
  templateUrl: './evaluationRechercheUniversitaire-list.component.html',
  styleUrls: ['./evaluationRechercheUniversitaire-list.component.css']
})

export class EvaluationRechercheUniversitaireListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private evaluationRechercheUniversitaireService: EvaluationRechercheUniversitaireService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEvaluationRechercheUniversitaires();
    } 
    
    // methods 
    public async loadEvaluationRechercheUniversitaires(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EvaluationRechercheUniversitaire", "list");
        isPermistted ? this.evaluationRechercheUniversitaireService.findAll().subscribe(evaluationRechercheUniversitaires => this.evaluationRechercheUniversitaires = evaluationRechercheUniversitaires,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.evaluationRechercheUniversitaireService.findByCriteria(this.searchEvaluationRechercheUniversitaire).subscribe(evaluationRechercheUniversitaires=>{
            
            this.evaluationRechercheUniversitaires = evaluationRechercheUniversitaires;
           // this.searchEvaluationRechercheUniversitaire = new EvaluationRechercheUniversitaireVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'annee', header: 'annee'},
                {field: 'typeExpert', header: 'typeExpert'},
                {field: 'role', header: 'role'},
                {field: 'paysCommanditaire', header: 'paysCommanditaire'},
                {field: 'commanditaire', header: 'commanditaire'},
                {field: 'nombreJourConsacrePourCetteAnnee', header: 'nombreJourConsacrePourCetteAnnee'},
                {field: 'communauteSavoirEvaluationRechercheUniversitaires', header: 'communauteSavoirEvaluationRechercheUniversitaires'},
                {field: 'disciplineScientifiqueEvaluationRechercheUniversitaires', header: 'disciplineScientifiqueEvaluationRechercheUniversitaires'},
                {field: 'commentaire', header: 'commentaire'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editEvaluationRechercheUniversitaire(evaluationRechercheUniversitaire:EvaluationRechercheUniversitaireVo){
        const isPermistted = await this.roleService.isPermitted("EvaluationRechercheUniversitaire", "edit");
         if(isPermistted){
         this.selectedEvaluationRechercheUniversitaire = evaluationRechercheUniversitaire;
         this.editEvaluationRechercheUniversitaireDialog = true;
         this.evaluationRechercheUniversitaireService.editEvaluationRechercheUniversitaire$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEvaluationRechercheUniversitaire(evaluationRechercheUniversitaire:EvaluationRechercheUniversitaireVo){
        const isPermistted = await this.roleService.isPermitted("EvaluationRechercheUniversitaire", "view");
        if(isPermistted){
       this.selectedEvaluationRechercheUniversitaire = evaluationRechercheUniversitaire;
        this.viewEvaluationRechercheUniversitaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEvaluationRechercheUniversitaire(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEvaluationRechercheUniversitaire = new EvaluationRechercheUniversitaireVo();
        this.createEvaluationRechercheUniversitaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEvaluationRechercheUniversitaire(evaluationRechercheUniversitaire:EvaluationRechercheUniversitaireVo){
       const isPermistted = await this.roleService.isPermitted("EvaluationRechercheUniversitaire", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EvaluationRechercheUniversitaire ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.evaluationRechercheUniversitaireService.delete(evaluationRechercheUniversitaire).subscribe(status=>{
                          if(status > 0){
                          const position = this.evaluationRechercheUniversitaires.indexOf(evaluationRechercheUniversitaire);
                          position > -1 ? this.evaluationRechercheUniversitaires.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EvaluationRechercheUniversitaire Deleted',
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

    get evaluationRechercheUniversitaires(): Array<EvaluationRechercheUniversitaireVo> {
           return this.evaluationRechercheUniversitaireService.evaluationRechercheUniversitaires;
       }
    set evaluationRechercheUniversitaires(value: Array<EvaluationRechercheUniversitaireVo>) {
        this.evaluationRechercheUniversitaireService.evaluationRechercheUniversitaires = value;
       }

    get evaluationRechercheUniversitaireSelections(): Array<EvaluationRechercheUniversitaireVo> {
           return this.evaluationRechercheUniversitaireService.evaluationRechercheUniversitaireSelections;
       }
    set evaluationRechercheUniversitaireSelections(value: Array<EvaluationRechercheUniversitaireVo>) {
        this.evaluationRechercheUniversitaireService.evaluationRechercheUniversitaireSelections = value;
       }
   
     


    get selectedEvaluationRechercheUniversitaire():EvaluationRechercheUniversitaireVo {
           return this.evaluationRechercheUniversitaireService.selectedEvaluationRechercheUniversitaire;
       }
    set selectedEvaluationRechercheUniversitaire(value: EvaluationRechercheUniversitaireVo) {
        this.evaluationRechercheUniversitaireService.selectedEvaluationRechercheUniversitaire = value;
       }
    
    get createEvaluationRechercheUniversitaireDialog():boolean {
           return this.evaluationRechercheUniversitaireService.createEvaluationRechercheUniversitaireDialog;
       }
    set createEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.evaluationRechercheUniversitaireService.createEvaluationRechercheUniversitaireDialog= value;
       }
    
    get editEvaluationRechercheUniversitaireDialog():boolean {
           return this.evaluationRechercheUniversitaireService.editEvaluationRechercheUniversitaireDialog;
       }
    set editEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.evaluationRechercheUniversitaireService.editEvaluationRechercheUniversitaireDialog= value;
       }
    get viewEvaluationRechercheUniversitaireDialog():boolean {
           return this.evaluationRechercheUniversitaireService.viewEvaluationRechercheUniversitaireDialog;
       }
    set viewEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.evaluationRechercheUniversitaireService.viewEvaluationRechercheUniversitaireDialog = value;
       }
       
     get searchEvaluationRechercheUniversitaire(): EvaluationRechercheUniversitaireVo {
        return this.evaluationRechercheUniversitaireService.searchEvaluationRechercheUniversitaire;
       }
    set searchEvaluationRechercheUniversitaire(value: EvaluationRechercheUniversitaireVo) {
        this.evaluationRechercheUniversitaireService.searchEvaluationRechercheUniversitaire = value;
       }



}