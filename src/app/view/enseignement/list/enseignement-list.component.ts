import {Component, OnInit} from '@angular/core';
import {EnseignementService} from '../../../controller/service/Enseignement.service';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {TypeEnseignementDispenseVo} from '../../../controller/model/TypeEnseignementDispense.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-enseignement-list',
  templateUrl: './enseignement-list.component.html',
  styleUrls: ['./enseignement-list.component.css']
})

export class EnseignementListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private enseignementService: EnseignementService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEnseignements();
    } 
    
    // methods 
    public async loadEnseignements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Enseignement", "list");
        isPermistted ? this.enseignementService.findAll().subscribe(enseignements => this.enseignements = enseignements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.enseignementService.findByCriteria(this.searchEnseignement).subscribe(enseignements=>{
            
            this.enseignements = enseignements;
           // this.searchEnseignement = new EnseignementVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'annee', header: 'annee'},
                {field: 'tempsEstimePourCetteAnnne', header: 'tempsEstimePourCetteAnnne'},
                {field: 'typeEnseignementDispense', header: 'typeEnseignementDispense'},
                {field: 'niveauEtudeEnseignements', header: 'niveauEtudeEnseignements'},
                {field: 'nombreHeureDispenseesDansAnnee', header: 'nombreHeureDispenseesDansAnnee'},
                {field: 'modaliteEtudeEnseignements', header: 'modaliteEtudeEnseignements'},
                {field: 'paysEtablissementEnseignement', header: 'paysEtablissementEnseignement'},
                {field: 'etablissementEnseignements', header: 'etablissementEnseignements'},
                {field: 'natureEnseignements', header: 'natureEnseignements'},
                {field: 'denominationEnseignement', header: 'denominationEnseignement'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editEnseignement(enseignement:EnseignementVo){
        const isPermistted = await this.roleService.isPermitted("Enseignement", "edit");
         if(isPermistted){
         this.selectedEnseignement = enseignement;
         this.editEnseignementDialog = true;
         this.enseignementService.editEnseignement$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEnseignement(enseignement:EnseignementVo){
        const isPermistted = await this.roleService.isPermitted("Enseignement", "view");
        if(isPermistted){
       this.selectedEnseignement = enseignement;
        this.viewEnseignementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEnseignement(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEnseignement = new EnseignementVo();
        this.createEnseignementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEnseignement(enseignement:EnseignementVo){
       const isPermistted = await this.roleService.isPermitted("Enseignement", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Enseignement ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.enseignementService.delete(enseignement).subscribe(status=>{
                          if(status > 0){
                          const position = this.enseignements.indexOf(enseignement);
                          position > -1 ? this.enseignements.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Enseignement Deleted',
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

    get enseignements(): Array<EnseignementVo> {
           return this.enseignementService.enseignements;
       }
    set enseignements(value: Array<EnseignementVo>) {
        this.enseignementService.enseignements = value;
       }

    get enseignementSelections(): Array<EnseignementVo> {
           return this.enseignementService.enseignementSelections;
       }
    set enseignementSelections(value: Array<EnseignementVo>) {
        this.enseignementService.enseignementSelections = value;
       }
   
     


    get selectedEnseignement():EnseignementVo {
           return this.enseignementService.selectedEnseignement;
       }
    set selectedEnseignement(value: EnseignementVo) {
        this.enseignementService.selectedEnseignement = value;
       }
    
    get createEnseignementDialog():boolean {
           return this.enseignementService.createEnseignementDialog;
       }
    set createEnseignementDialog(value: boolean) {
        this.enseignementService.createEnseignementDialog= value;
       }
    
    get editEnseignementDialog():boolean {
           return this.enseignementService.editEnseignementDialog;
       }
    set editEnseignementDialog(value: boolean) {
        this.enseignementService.editEnseignementDialog= value;
       }
    get viewEnseignementDialog():boolean {
           return this.enseignementService.viewEnseignementDialog;
       }
    set viewEnseignementDialog(value: boolean) {
        this.enseignementService.viewEnseignementDialog = value;
       }
       
     get searchEnseignement(): EnseignementVo {
        return this.enseignementService.searchEnseignement;
       }
    set searchEnseignement(value: EnseignementVo) {
        this.enseignementService.searchEnseignement = value;
       }



}