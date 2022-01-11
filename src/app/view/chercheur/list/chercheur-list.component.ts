import {Component, OnInit} from '@angular/core';
import {ChercheurService} from '../../../controller/service/Chercheur.service';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';
import {EntiteAdministrativeVo} from '../../../controller/model/EntiteAdministrative.model';
import {DepartementScientifiqueVo} from '../../../controller/model/DepartementScientifique.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {GradeVo} from '../../../controller/model/Grade.model';
import {CorpsVo} from '../../../controller/model/Corps.model';
import {CommissionScientifiqueVo} from '../../../controller/model/CommissionScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-chercheur-list',
  templateUrl: './chercheur-list.component.html',
  styleUrls: ['./chercheur-list.component.css']
})

export class ChercheurListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private chercheurService: ChercheurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadChercheurs();
    } 
    
    // methods 
    public async loadChercheurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Chercheur", "list");
        isPermistted ? this.chercheurService.findAll().subscribe(chercheurs => this.chercheurs = chercheurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.chercheurService.findByCriteria(this.searchChercheur).subscribe(chercheurs=>{
            
            this.chercheurs = chercheurs;
           // this.searchChercheur = new ChercheurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'numeroMatricule', header: 'numeroMatricule'},
                {field: 'email', header: 'email'},
                {field: 'nom', header: 'nom'},
                {field: 'prenom', header: 'prenom'},
                {field: 'typeAffectationStructurelle', header: 'typeAffectationStructurelle'},
                {field: 'affectationStructurelle', header: 'affectationStructurelle'},
                {field: 'affectationGeographiquePays', header: 'affectationGeographiquePays'},
                {field: 'affectationGeographiqueVille', header: 'affectationGeographiqueVille'},
                {field: 'departementScientifiqueRattachementOuAffectation', header: 'departementScientifiqueRattachementOuAffectation'},
                {field: 'commissionScientifiqueRattachement', header: 'commissionScientifiqueRattachement'},
                {field: 'grade', header: 'grade'},
                {field: 'corps', header: 'corps'},
                {field: 'sexe', header: 'sexe'},
                {field: 'domaineScientifiqueChercheurs', header: 'domaineScientifiqueChercheurs'},
                {field: 'enjeuxIrdChercheurs', header: 'enjeuxIrdChercheurs'},
                {field: 'zoneActiviteInteractionRecherches', header: 'zoneActiviteInteractionRecherches'},
                {field: 'communauteSavoirChercheurs', header: 'communauteSavoirChercheurs'},
                {field: 'instrumentsEtDispositifsIrdChercheurs', header: 'instrumentsEtDispositifsIrdChercheurs'},
                {field: 'natureImplication', header: 'natureImplication'},
                {field: 'identifiantAuteurExperts', header: 'identifiantAuteurExperts'},
                {field: 'resume', header: 'resume'},
                {field: 'distinctions', header: 'distinctions'},
                {field: 'formationEnManagement', header: 'formationEnManagement'},
        ];
    }
    
    public async editChercheur(chercheur:ChercheurVo){
        const isPermistted = await this.roleService.isPermitted("Chercheur", "edit");
         if(isPermistted){
         this.selectedChercheur = chercheur;
         this.editChercheurDialog = true;
         this.chercheurService.editChercheur$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewChercheur(chercheur:ChercheurVo){
        const isPermistted = await this.roleService.isPermitted("Chercheur", "view");
        if(isPermistted){
       this.selectedChercheur = chercheur;
        this.viewChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateChercheur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedChercheur = new ChercheurVo();
        this.createChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteChercheur(chercheur:ChercheurVo){
       const isPermistted = await this.roleService.isPermitted("Chercheur", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Chercheur ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.chercheurService.delete(chercheur).subscribe(status=>{
                          if(status > 0){
                          const position = this.chercheurs.indexOf(chercheur);
                          position > -1 ? this.chercheurs.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Chercheur Deleted',
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

    get chercheurs(): Array<ChercheurVo> {
           return this.chercheurService.chercheurs;
       }
    set chercheurs(value: Array<ChercheurVo>) {
        this.chercheurService.chercheurs = value;
       }

    get chercheurSelections(): Array<ChercheurVo> {
           return this.chercheurService.chercheurSelections;
       }
    set chercheurSelections(value: Array<ChercheurVo>) {
        this.chercheurService.chercheurSelections = value;
       }
   
     


    get selectedChercheur():ChercheurVo {
           return this.chercheurService.selectedChercheur;
       }
    set selectedChercheur(value: ChercheurVo) {
        this.chercheurService.selectedChercheur = value;
       }
    
    get createChercheurDialog():boolean {
           return this.chercheurService.createChercheurDialog;
       }
    set createChercheurDialog(value: boolean) {
        this.chercheurService.createChercheurDialog= value;
       }
    
    get editChercheurDialog():boolean {
           return this.chercheurService.editChercheurDialog;
       }
    set editChercheurDialog(value: boolean) {
        this.chercheurService.editChercheurDialog= value;
       }
    get viewChercheurDialog():boolean {
           return this.chercheurService.viewChercheurDialog;
       }
    set viewChercheurDialog(value: boolean) {
        this.chercheurService.viewChercheurDialog = value;
       }
       
     get searchChercheur(): ChercheurVo {
        return this.chercheurService.searchChercheur;
       }
    set searchChercheur(value: ChercheurVo) {
        this.chercheurService.searchChercheur = value;
       }



}