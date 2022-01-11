import {Component, OnInit} from '@angular/core';
import {ProjetActiviteRechercheService} from '../../../controller/service/ProjetActiviteRecherche.service';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {RoleProjetVo} from '../../../controller/model/RoleProjet.model';
import {StatusProjetVo} from '../../../controller/model/StatusProjet.model';
import {FournisseurAppelProjetRechercheVo} from '../../../controller/model/FournisseurAppelProjetRecherche.model';
import {EtablissementProjetVo} from '../../../controller/model/EtablissementProjet.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-projetActiviteRecherche-list',
  templateUrl: './projetActiviteRecherche-list.component.html',
  styleUrls: ['./projetActiviteRecherche-list.component.css']
})

export class ProjetActiviteRechercheListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private projetActiviteRechercheService: ProjetActiviteRechercheService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadProjetActiviteRecherches();
    } 
    
    // methods 
    public async loadProjetActiviteRecherches(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ProjetActiviteRecherche", "list");
        isPermistted ? this.projetActiviteRechercheService.findAll().subscribe(projetActiviteRecherches => this.projetActiviteRecherches = projetActiviteRecherches,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.projetActiviteRechercheService.findByCriteria(this.searchProjetActiviteRecherche).subscribe(projetActiviteRecherches=>{
            
            this.projetActiviteRecherches = projetActiviteRecherches;
           // this.searchProjetActiviteRecherche = new ProjetActiviteRechercheVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'annee', header: 'annee'},
                {field: 'tempsEstimePourCetteAnnne', header: 'tempsEstimePourCetteAnnne'},
                {field: 'statusProjet', header: 'statusProjet'},
                {field: 'roleJoue', header: 'roleJoue'},
                {field: 'etablissementProjet', header: 'etablissementProjet'},
                {field: 'lanceurAppelProjetRecherche', header: 'lanceurAppelProjetRecherche'},
                {field: 'bailleurAppelProjetRecherche', header: 'bailleurAppelProjetRecherche'},
                {field: 'IntituleSujetReponse', header: 'IntituleSujetReponse'},
                {field: 'paysBailleurAppelProjetRecherche', header: 'paysBailleurAppelProjetRecherche'},
                {field: 'paysPrincipaleInterventionProjetRecherches', header: 'paysPrincipaleInterventionProjetRecherches'},
                {field: 'dureeFinancementPrevuEnMois', header: 'dureeFinancementPrevuEnMois'},
                {field: 'montantFinancementPrevu', header: 'montantFinancementPrevu'},
                {field: 'dureeFinancementAccordeEnMois', header: 'dureeFinancementAccordeEnMois'},
                {field: 'montantFinancementAccorde', header: 'montantFinancementAccorde'},
                {field: 'institutionCoContractants', header: 'institutionCoContractants'},
                {field: 'communauteSavoirProjetActiviteRecherches', header: 'communauteSavoirProjetActiviteRecherches'},
                {field: 'instrumentsEtDispositifsIrdProjetActiviteRecherches', header: 'instrumentsEtDispositifsIrdProjetActiviteRecherches'},
                {field: 'bourses', header: 'bourses'},
                {field: 'encadrementEtudiants', header: 'encadrementEtudiants'},
                {field: 'directionEncadrementDoctorants', header: 'directionEncadrementDoctorants'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editProjetActiviteRecherche(projetActiviteRecherche:ProjetActiviteRechercheVo){
        const isPermistted = await this.roleService.isPermitted("ProjetActiviteRecherche", "edit");
         if(isPermistted){
         this.selectedProjetActiviteRecherche = projetActiviteRecherche;
         this.editProjetActiviteRechercheDialog = true;
         this.projetActiviteRechercheService.editProjetActiviteRecherche$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewProjetActiviteRecherche(projetActiviteRecherche:ProjetActiviteRechercheVo){
        const isPermistted = await this.roleService.isPermitted("ProjetActiviteRecherche", "view");
        if(isPermistted){
       this.selectedProjetActiviteRecherche = projetActiviteRecherche;
        this.viewProjetActiviteRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateProjetActiviteRecherche(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedProjetActiviteRecherche = new ProjetActiviteRechercheVo();
        this.createProjetActiviteRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteProjetActiviteRecherche(projetActiviteRecherche:ProjetActiviteRechercheVo){
       const isPermistted = await this.roleService.isPermitted("ProjetActiviteRecherche", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ProjetActiviteRecherche ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.projetActiviteRechercheService.delete(projetActiviteRecherche).subscribe(status=>{
                          if(status > 0){
                          const position = this.projetActiviteRecherches.indexOf(projetActiviteRecherche);
                          position > -1 ? this.projetActiviteRecherches.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ProjetActiviteRecherche Deleted',
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

    get projetActiviteRecherches(): Array<ProjetActiviteRechercheVo> {
           return this.projetActiviteRechercheService.projetActiviteRecherches;
       }
    set projetActiviteRecherches(value: Array<ProjetActiviteRechercheVo>) {
        this.projetActiviteRechercheService.projetActiviteRecherches = value;
       }

    get projetActiviteRechercheSelections(): Array<ProjetActiviteRechercheVo> {
           return this.projetActiviteRechercheService.projetActiviteRechercheSelections;
       }
    set projetActiviteRechercheSelections(value: Array<ProjetActiviteRechercheVo>) {
        this.projetActiviteRechercheService.projetActiviteRechercheSelections = value;
       }
   
     


    get selectedProjetActiviteRecherche():ProjetActiviteRechercheVo {
           return this.projetActiviteRechercheService.selectedProjetActiviteRecherche;
       }
    set selectedProjetActiviteRecherche(value: ProjetActiviteRechercheVo) {
        this.projetActiviteRechercheService.selectedProjetActiviteRecherche = value;
       }
    
    get createProjetActiviteRechercheDialog():boolean {
           return this.projetActiviteRechercheService.createProjetActiviteRechercheDialog;
       }
    set createProjetActiviteRechercheDialog(value: boolean) {
        this.projetActiviteRechercheService.createProjetActiviteRechercheDialog= value;
       }
    
    get editProjetActiviteRechercheDialog():boolean {
           return this.projetActiviteRechercheService.editProjetActiviteRechercheDialog;
       }
    set editProjetActiviteRechercheDialog(value: boolean) {
        this.projetActiviteRechercheService.editProjetActiviteRechercheDialog= value;
       }
    get viewProjetActiviteRechercheDialog():boolean {
           return this.projetActiviteRechercheService.viewProjetActiviteRechercheDialog;
       }
    set viewProjetActiviteRechercheDialog(value: boolean) {
        this.projetActiviteRechercheService.viewProjetActiviteRechercheDialog = value;
       }
       
     get searchProjetActiviteRecherche(): ProjetActiviteRechercheVo {
        return this.projetActiviteRechercheService.searchProjetActiviteRecherche;
       }
    set searchProjetActiviteRecherche(value: ProjetActiviteRechercheVo) {
        this.projetActiviteRechercheService.searchProjetActiviteRecherche = value;
       }



}