import {Component, OnInit} from '@angular/core';
import {EtablissementService} from '../../../controller/service/Etablissement.service';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-etablissement-list',
  templateUrl: './etablissement-list.component.html',
  styleUrls: ['./etablissement-list.component.css']
})

export class EtablissementListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private etablissementService: EtablissementService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEtablissements();
    } 
    
    // methods 
    public async loadEtablissements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Etablissement", "list");
        isPermistted ? this.etablissementService.findAll().subscribe(etablissements => this.etablissements = etablissements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.etablissementService.findByCriteria(this.searchEtablissement).subscribe(etablissements=>{
            
            this.etablissements = etablissements;
           // this.searchEtablissement = new EtablissementVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
                {field: 'description', header: 'description'},
        ];
    }
    
    public async editEtablissement(etablissement:EtablissementVo){
        const isPermistted = await this.roleService.isPermitted("Etablissement", "edit");
         if(isPermistted){
         this.selectedEtablissement = etablissement;
         this.editEtablissementDialog = true;
         this.etablissementService.editEtablissement$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEtablissement(etablissement:EtablissementVo){
        const isPermistted = await this.roleService.isPermitted("Etablissement", "view");
        if(isPermistted){
       this.selectedEtablissement = etablissement;
        this.viewEtablissementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEtablissement(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEtablissement = new EtablissementVo();
        this.createEtablissementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEtablissement(etablissement:EtablissementVo){
       const isPermistted = await this.roleService.isPermitted("Etablissement", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Etablissement ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.etablissementService.delete(etablissement).subscribe(status=>{
                          if(status > 0){
                          const position = this.etablissements.indexOf(etablissement);
                          position > -1 ? this.etablissements.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Etablissement Deleted',
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

    get etablissements(): Array<EtablissementVo> {
           return this.etablissementService.etablissements;
       }
    set etablissements(value: Array<EtablissementVo>) {
        this.etablissementService.etablissements = value;
       }

    get etablissementSelections(): Array<EtablissementVo> {
           return this.etablissementService.etablissementSelections;
       }
    set etablissementSelections(value: Array<EtablissementVo>) {
        this.etablissementService.etablissementSelections = value;
       }
   
     


    get selectedEtablissement():EtablissementVo {
           return this.etablissementService.selectedEtablissement;
       }
    set selectedEtablissement(value: EtablissementVo) {
        this.etablissementService.selectedEtablissement = value;
       }
    
    get createEtablissementDialog():boolean {
           return this.etablissementService.createEtablissementDialog;
       }
    set createEtablissementDialog(value: boolean) {
        this.etablissementService.createEtablissementDialog= value;
       }
    
    get editEtablissementDialog():boolean {
           return this.etablissementService.editEtablissementDialog;
       }
    set editEtablissementDialog(value: boolean) {
        this.etablissementService.editEtablissementDialog= value;
       }
    get viewEtablissementDialog():boolean {
           return this.etablissementService.viewEtablissementDialog;
       }
    set viewEtablissementDialog(value: boolean) {
        this.etablissementService.viewEtablissementDialog = value;
       }
       
     get searchEtablissement(): EtablissementVo {
        return this.etablissementService.searchEtablissement;
       }
    set searchEtablissement(value: EtablissementVo) {
        this.etablissementService.searchEtablissement = value;
       }



}