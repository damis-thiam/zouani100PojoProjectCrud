import {Component, OnInit} from '@angular/core';
import {EtablissementProjetService} from '../../../controller/service/EtablissementProjet.service';
import {EtablissementProjetVo} from '../../../controller/model/EtablissementProjet.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-etablissementProjet-list',
  templateUrl: './etablissementProjet-list.component.html',
  styleUrls: ['./etablissementProjet-list.component.css']
})

export class EtablissementProjetListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private etablissementProjetService: EtablissementProjetService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEtablissementProjets();
    } 
    
    // methods 
    public async loadEtablissementProjets(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EtablissementProjet", "list");
        isPermistted ? this.etablissementProjetService.findAll().subscribe(etablissementProjets => this.etablissementProjets = etablissementProjets,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.etablissementProjetService.findByCriteria(this.searchEtablissementProjet).subscribe(etablissementProjets=>{
            
            this.etablissementProjets = etablissementProjets;
           // this.searchEtablissementProjet = new EtablissementProjetVo();
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
    
    public async editEtablissementProjet(etablissementProjet:EtablissementProjetVo){
        const isPermistted = await this.roleService.isPermitted("EtablissementProjet", "edit");
         if(isPermistted){
         this.selectedEtablissementProjet = etablissementProjet;
         this.editEtablissementProjetDialog = true;
         this.etablissementProjetService.editEtablissementProjet$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEtablissementProjet(etablissementProjet:EtablissementProjetVo){
        const isPermistted = await this.roleService.isPermitted("EtablissementProjet", "view");
        if(isPermistted){
       this.selectedEtablissementProjet = etablissementProjet;
        this.viewEtablissementProjetDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEtablissementProjet(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEtablissementProjet = new EtablissementProjetVo();
        this.createEtablissementProjetDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEtablissementProjet(etablissementProjet:EtablissementProjetVo){
       const isPermistted = await this.roleService.isPermitted("EtablissementProjet", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EtablissementProjet ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.etablissementProjetService.delete(etablissementProjet).subscribe(status=>{
                          if(status > 0){
                          const position = this.etablissementProjets.indexOf(etablissementProjet);
                          position > -1 ? this.etablissementProjets.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EtablissementProjet Deleted',
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

    get etablissementProjets(): Array<EtablissementProjetVo> {
           return this.etablissementProjetService.etablissementProjets;
       }
    set etablissementProjets(value: Array<EtablissementProjetVo>) {
        this.etablissementProjetService.etablissementProjets = value;
       }

    get etablissementProjetSelections(): Array<EtablissementProjetVo> {
           return this.etablissementProjetService.etablissementProjetSelections;
       }
    set etablissementProjetSelections(value: Array<EtablissementProjetVo>) {
        this.etablissementProjetService.etablissementProjetSelections = value;
       }
   
     


    get selectedEtablissementProjet():EtablissementProjetVo {
           return this.etablissementProjetService.selectedEtablissementProjet;
       }
    set selectedEtablissementProjet(value: EtablissementProjetVo) {
        this.etablissementProjetService.selectedEtablissementProjet = value;
       }
    
    get createEtablissementProjetDialog():boolean {
           return this.etablissementProjetService.createEtablissementProjetDialog;
       }
    set createEtablissementProjetDialog(value: boolean) {
        this.etablissementProjetService.createEtablissementProjetDialog= value;
       }
    
    get editEtablissementProjetDialog():boolean {
           return this.etablissementProjetService.editEtablissementProjetDialog;
       }
    set editEtablissementProjetDialog(value: boolean) {
        this.etablissementProjetService.editEtablissementProjetDialog= value;
       }
    get viewEtablissementProjetDialog():boolean {
           return this.etablissementProjetService.viewEtablissementProjetDialog;
       }
    set viewEtablissementProjetDialog(value: boolean) {
        this.etablissementProjetService.viewEtablissementProjetDialog = value;
       }
       
     get searchEtablissementProjet(): EtablissementProjetVo {
        return this.etablissementProjetService.searchEtablissementProjet;
       }
    set searchEtablissementProjet(value: EtablissementProjetVo) {
        this.etablissementProjetService.searchEtablissementProjet = value;
       }



}