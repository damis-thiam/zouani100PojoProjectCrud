import {Component, OnInit} from '@angular/core';
import {ExpertiseScientifiqueService} from '../../../controller/service/ExpertiseScientifique.service';
import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
import {TypeExpertiseVo} from '../../../controller/model/TypeExpertise.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-expertiseScientifique-list',
  templateUrl: './expertiseScientifique-list.component.html',
  styleUrls: ['./expertiseScientifique-list.component.css']
})

export class ExpertiseScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private expertiseScientifiqueService: ExpertiseScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadExpertiseScientifiques();
    } 
    
    // methods 
    public async loadExpertiseScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ExpertiseScientifique", "list");
        isPermistted ? this.expertiseScientifiqueService.findAll().subscribe(expertiseScientifiques => this.expertiseScientifiques = expertiseScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.expertiseScientifiqueService.findByCriteria(this.searchExpertiseScientifique).subscribe(expertiseScientifiques=>{
            
            this.expertiseScientifiques = expertiseScientifiques;
           // this.searchExpertiseScientifique = new ExpertiseScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'annee', header: 'annee'},
                {field: 'intitule', header: 'intitule'},
                {field: 'typeExpertise', header: 'typeExpertise'},
                {field: 'nombreJourConsacrePourCetteAnnee', header: 'nombreJourConsacrePourCetteAnnee'},
                {field: 'periodeRemiseRapportMois', header: 'periodeRemiseRapportMois'},
                {field: 'periodeRemiseRapportAnnee', header: 'periodeRemiseRapportAnnee'},
                {field: 'pays', header: 'pays'},
                {field: 'etablisementPartenaire', header: 'etablisementPartenaire'},
                {field: 'communauteSavoirExpertiseScientifiques', header: 'communauteSavoirExpertiseScientifiques'},
                {field: 'disciplineScientifiqueExpertiseScientifiques', header: 'disciplineScientifiqueExpertiseScientifiques'},
                {field: 'commentairesEventuels', header: 'commentairesEventuels'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editExpertiseScientifique(expertiseScientifique:ExpertiseScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("ExpertiseScientifique", "edit");
         if(isPermistted){
         this.selectedExpertiseScientifique = expertiseScientifique;
         this.editExpertiseScientifiqueDialog = true;
         this.expertiseScientifiqueService.editExpertiseScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewExpertiseScientifique(expertiseScientifique:ExpertiseScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("ExpertiseScientifique", "view");
        if(isPermistted){
       this.selectedExpertiseScientifique = expertiseScientifique;
        this.viewExpertiseScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateExpertiseScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedExpertiseScientifique = new ExpertiseScientifiqueVo();
        this.createExpertiseScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteExpertiseScientifique(expertiseScientifique:ExpertiseScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("ExpertiseScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ExpertiseScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.expertiseScientifiqueService.delete(expertiseScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.expertiseScientifiques.indexOf(expertiseScientifique);
                          position > -1 ? this.expertiseScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ExpertiseScientifique Deleted',
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

    get expertiseScientifiques(): Array<ExpertiseScientifiqueVo> {
           return this.expertiseScientifiqueService.expertiseScientifiques;
       }
    set expertiseScientifiques(value: Array<ExpertiseScientifiqueVo>) {
        this.expertiseScientifiqueService.expertiseScientifiques = value;
       }

    get expertiseScientifiqueSelections(): Array<ExpertiseScientifiqueVo> {
           return this.expertiseScientifiqueService.expertiseScientifiqueSelections;
       }
    set expertiseScientifiqueSelections(value: Array<ExpertiseScientifiqueVo>) {
        this.expertiseScientifiqueService.expertiseScientifiqueSelections = value;
       }
   
     


    get selectedExpertiseScientifique():ExpertiseScientifiqueVo {
           return this.expertiseScientifiqueService.selectedExpertiseScientifique;
       }
    set selectedExpertiseScientifique(value: ExpertiseScientifiqueVo) {
        this.expertiseScientifiqueService.selectedExpertiseScientifique = value;
       }
    
    get createExpertiseScientifiqueDialog():boolean {
           return this.expertiseScientifiqueService.createExpertiseScientifiqueDialog;
       }
    set createExpertiseScientifiqueDialog(value: boolean) {
        this.expertiseScientifiqueService.createExpertiseScientifiqueDialog= value;
       }
    
    get editExpertiseScientifiqueDialog():boolean {
           return this.expertiseScientifiqueService.editExpertiseScientifiqueDialog;
       }
    set editExpertiseScientifiqueDialog(value: boolean) {
        this.expertiseScientifiqueService.editExpertiseScientifiqueDialog= value;
       }
    get viewExpertiseScientifiqueDialog():boolean {
           return this.expertiseScientifiqueService.viewExpertiseScientifiqueDialog;
       }
    set viewExpertiseScientifiqueDialog(value: boolean) {
        this.expertiseScientifiqueService.viewExpertiseScientifiqueDialog = value;
       }
       
     get searchExpertiseScientifique(): ExpertiseScientifiqueVo {
        return this.expertiseScientifiqueService.searchExpertiseScientifique;
       }
    set searchExpertiseScientifique(value: ExpertiseScientifiqueVo) {
        this.expertiseScientifiqueService.searchExpertiseScientifique = value;
       }



}