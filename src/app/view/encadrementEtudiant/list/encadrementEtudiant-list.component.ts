import {Component, OnInit} from '@angular/core';
import {EncadrementEtudiantService} from '../../../controller/service/EncadrementEtudiant.service';
import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
import {EvaluationEncadrementVo} from '../../../controller/model/EvaluationEncadrement.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {EtudiantVo} from '../../../controller/model/Etudiant.model';
import {ResponsabiliteEncadrementEtudiantVo} from '../../../controller/model/ResponsabiliteEncadrementEtudiant.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {EtablissementPartenaireVo} from '../../../controller/model/EtablissementPartenaire.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-encadrementEtudiant-list',
  templateUrl: './encadrementEtudiant-list.component.html',
  styleUrls: ['./encadrementEtudiant-list.component.css']
})

export class EncadrementEtudiantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private encadrementEtudiantService: EncadrementEtudiantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEncadrementEtudiants();
    } 
    
    // methods 
    public async loadEncadrementEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EncadrementEtudiant", "list");
        isPermistted ? this.encadrementEtudiantService.findAll().subscribe(encadrementEtudiants => this.encadrementEtudiants = encadrementEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.encadrementEtudiantService.findByCriteria(this.searchEncadrementEtudiant).subscribe(encadrementEtudiants=>{
            
            this.encadrementEtudiants = encadrementEtudiants;
           // this.searchEncadrementEtudiant = new EncadrementEtudiantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'annee', header: 'annee'},
                {field: 'tempsEstimePourCetteAnnne', header: 'tempsEstimePourCetteAnnne'},
                {field: 'sujetEtude', header: 'sujetEtude'},
                {field: 'communauteSavoirEncadrements', header: 'communauteSavoirEncadrements'},
                {field: 'disciplineScientifiqueEncadrementEtudiant', header: 'disciplineScientifiqueEncadrementEtudiant'},
                {field: 'etudiant', header: 'etudiant'},
                {field: 'responsabiliteEncadrementEtudiant', header: 'responsabiliteEncadrementEtudiant'},
                {field: 'paysInscription', header: 'paysInscription'},
                {field: 'etablissementPartenaire', header: 'etablissementPartenaire'},
                {field: 'etablissementInscription', header: 'etablissementInscription'},
                {field: 'codirectionInternationale', header: 'codirectionInternationale'},
                {field: 'evaluationEncadrement', header: 'evaluationEncadrement'},
                {field: 'cursus', header: 'cursus'},
                {field: 'projetActiviteRecherche', header: 'projetActiviteRecherche'},
        ];
    }
    
    public async editEncadrementEtudiant(encadrementEtudiant:EncadrementEtudiantVo){
        const isPermistted = await this.roleService.isPermitted("EncadrementEtudiant", "edit");
         if(isPermistted){
         this.selectedEncadrementEtudiant = encadrementEtudiant;
         this.editEncadrementEtudiantDialog = true;
         this.encadrementEtudiantService.editEncadrementEtudiant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEncadrementEtudiant(encadrementEtudiant:EncadrementEtudiantVo){
        const isPermistted = await this.roleService.isPermitted("EncadrementEtudiant", "view");
        if(isPermistted){
       this.selectedEncadrementEtudiant = encadrementEtudiant;
        this.viewEncadrementEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEncadrementEtudiant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEncadrementEtudiant = new EncadrementEtudiantVo();
        this.createEncadrementEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEncadrementEtudiant(encadrementEtudiant:EncadrementEtudiantVo){
       const isPermistted = await this.roleService.isPermitted("EncadrementEtudiant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EncadrementEtudiant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.encadrementEtudiantService.delete(encadrementEtudiant).subscribe(status=>{
                          if(status > 0){
                          const position = this.encadrementEtudiants.indexOf(encadrementEtudiant);
                          position > -1 ? this.encadrementEtudiants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EncadrementEtudiant Deleted',
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

    get encadrementEtudiants(): Array<EncadrementEtudiantVo> {
           return this.encadrementEtudiantService.encadrementEtudiants;
       }
    set encadrementEtudiants(value: Array<EncadrementEtudiantVo>) {
        this.encadrementEtudiantService.encadrementEtudiants = value;
       }

    get encadrementEtudiantSelections(): Array<EncadrementEtudiantVo> {
           return this.encadrementEtudiantService.encadrementEtudiantSelections;
       }
    set encadrementEtudiantSelections(value: Array<EncadrementEtudiantVo>) {
        this.encadrementEtudiantService.encadrementEtudiantSelections = value;
       }
   
     


    get selectedEncadrementEtudiant():EncadrementEtudiantVo {
           return this.encadrementEtudiantService.selectedEncadrementEtudiant;
       }
    set selectedEncadrementEtudiant(value: EncadrementEtudiantVo) {
        this.encadrementEtudiantService.selectedEncadrementEtudiant = value;
       }
    
    get createEncadrementEtudiantDialog():boolean {
           return this.encadrementEtudiantService.createEncadrementEtudiantDialog;
       }
    set createEncadrementEtudiantDialog(value: boolean) {
        this.encadrementEtudiantService.createEncadrementEtudiantDialog= value;
       }
    
    get editEncadrementEtudiantDialog():boolean {
           return this.encadrementEtudiantService.editEncadrementEtudiantDialog;
       }
    set editEncadrementEtudiantDialog(value: boolean) {
        this.encadrementEtudiantService.editEncadrementEtudiantDialog= value;
       }
    get viewEncadrementEtudiantDialog():boolean {
           return this.encadrementEtudiantService.viewEncadrementEtudiantDialog;
       }
    set viewEncadrementEtudiantDialog(value: boolean) {
        this.encadrementEtudiantService.viewEncadrementEtudiantDialog = value;
       }
       
     get searchEncadrementEtudiant(): EncadrementEtudiantVo {
        return this.encadrementEtudiantService.searchEncadrementEtudiant;
       }
    set searchEncadrementEtudiant(value: EncadrementEtudiantVo) {
        this.encadrementEtudiantService.searchEncadrementEtudiant = value;
       }



}