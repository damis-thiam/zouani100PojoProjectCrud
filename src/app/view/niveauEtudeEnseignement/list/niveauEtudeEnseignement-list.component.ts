import {Component, OnInit} from '@angular/core';
import {NiveauEtudeEnseignementService} from '../../../controller/service/NiveauEtudeEnseignement.service';
import {NiveauEtudeEnseignementVo} from '../../../controller/model/NiveauEtudeEnseignement.model';
import {EnseignementVo} from '../../../controller/model/Enseignement.model';
import {NiveauEtudeVo} from '../../../controller/model/NiveauEtude.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-niveauEtudeEnseignement-list',
  templateUrl: './niveauEtudeEnseignement-list.component.html',
  styleUrls: ['./niveauEtudeEnseignement-list.component.css']
})

export class NiveauEtudeEnseignementListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private niveauEtudeEnseignementService: NiveauEtudeEnseignementService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadNiveauEtudeEnseignements();
    } 
    
    // methods 
    public async loadNiveauEtudeEnseignements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("NiveauEtudeEnseignement", "list");
        isPermistted ? this.niveauEtudeEnseignementService.findAll().subscribe(niveauEtudeEnseignements => this.niveauEtudeEnseignements = niveauEtudeEnseignements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.niveauEtudeEnseignementService.findByCriteria(this.searchNiveauEtudeEnseignement).subscribe(niveauEtudeEnseignements=>{
            
            this.niveauEtudeEnseignements = niveauEtudeEnseignements;
           // this.searchNiveauEtudeEnseignement = new NiveauEtudeEnseignementVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'niveauEtude', header: 'niveauEtude'},
                {field: 'enseignement', header: 'enseignement'},
        ];
    }
    
    public async editNiveauEtudeEnseignement(niveauEtudeEnseignement:NiveauEtudeEnseignementVo){
        const isPermistted = await this.roleService.isPermitted("NiveauEtudeEnseignement", "edit");
         if(isPermistted){
         this.selectedNiveauEtudeEnseignement = niveauEtudeEnseignement;
         this.editNiveauEtudeEnseignementDialog = true;
         this.niveauEtudeEnseignementService.editNiveauEtudeEnseignement$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewNiveauEtudeEnseignement(niveauEtudeEnseignement:NiveauEtudeEnseignementVo){
        const isPermistted = await this.roleService.isPermitted("NiveauEtudeEnseignement", "view");
        if(isPermistted){
       this.selectedNiveauEtudeEnseignement = niveauEtudeEnseignement;
        this.viewNiveauEtudeEnseignementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateNiveauEtudeEnseignement(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedNiveauEtudeEnseignement = new NiveauEtudeEnseignementVo();
        this.createNiveauEtudeEnseignementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteNiveauEtudeEnseignement(niveauEtudeEnseignement:NiveauEtudeEnseignementVo){
       const isPermistted = await this.roleService.isPermitted("NiveauEtudeEnseignement", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the NiveauEtudeEnseignement ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.niveauEtudeEnseignementService.delete(niveauEtudeEnseignement).subscribe(status=>{
                          if(status > 0){
                          const position = this.niveauEtudeEnseignements.indexOf(niveauEtudeEnseignement);
                          position > -1 ? this.niveauEtudeEnseignements.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'NiveauEtudeEnseignement Deleted',
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

    get niveauEtudeEnseignements(): Array<NiveauEtudeEnseignementVo> {
           return this.niveauEtudeEnseignementService.niveauEtudeEnseignements;
       }
    set niveauEtudeEnseignements(value: Array<NiveauEtudeEnseignementVo>) {
        this.niveauEtudeEnseignementService.niveauEtudeEnseignements = value;
       }

    get niveauEtudeEnseignementSelections(): Array<NiveauEtudeEnseignementVo> {
           return this.niveauEtudeEnseignementService.niveauEtudeEnseignementSelections;
       }
    set niveauEtudeEnseignementSelections(value: Array<NiveauEtudeEnseignementVo>) {
        this.niveauEtudeEnseignementService.niveauEtudeEnseignementSelections = value;
       }
   
     


    get selectedNiveauEtudeEnseignement():NiveauEtudeEnseignementVo {
           return this.niveauEtudeEnseignementService.selectedNiveauEtudeEnseignement;
       }
    set selectedNiveauEtudeEnseignement(value: NiveauEtudeEnseignementVo) {
        this.niveauEtudeEnseignementService.selectedNiveauEtudeEnseignement = value;
       }
    
    get createNiveauEtudeEnseignementDialog():boolean {
           return this.niveauEtudeEnseignementService.createNiveauEtudeEnseignementDialog;
       }
    set createNiveauEtudeEnseignementDialog(value: boolean) {
        this.niveauEtudeEnseignementService.createNiveauEtudeEnseignementDialog= value;
       }
    
    get editNiveauEtudeEnseignementDialog():boolean {
           return this.niveauEtudeEnseignementService.editNiveauEtudeEnseignementDialog;
       }
    set editNiveauEtudeEnseignementDialog(value: boolean) {
        this.niveauEtudeEnseignementService.editNiveauEtudeEnseignementDialog= value;
       }
    get viewNiveauEtudeEnseignementDialog():boolean {
           return this.niveauEtudeEnseignementService.viewNiveauEtudeEnseignementDialog;
       }
    set viewNiveauEtudeEnseignementDialog(value: boolean) {
        this.niveauEtudeEnseignementService.viewNiveauEtudeEnseignementDialog = value;
       }
       
     get searchNiveauEtudeEnseignement(): NiveauEtudeEnseignementVo {
        return this.niveauEtudeEnseignementService.searchNiveauEtudeEnseignement;
       }
    set searchNiveauEtudeEnseignement(value: NiveauEtudeEnseignementVo) {
        this.niveauEtudeEnseignementService.searchNiveauEtudeEnseignement = value;
       }



}