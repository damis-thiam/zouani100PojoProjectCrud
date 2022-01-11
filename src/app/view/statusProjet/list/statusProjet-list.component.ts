import {Component, OnInit} from '@angular/core';
import {StatusProjetService} from '../../../controller/service/StatusProjet.service';
import {StatusProjetVo} from '../../../controller/model/StatusProjet.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-statusProjet-list',
  templateUrl: './statusProjet-list.component.html',
  styleUrls: ['./statusProjet-list.component.css']
})

export class StatusProjetListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private statusProjetService: StatusProjetService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadStatusProjets();
    } 
    
    // methods 
    public async loadStatusProjets(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("StatusProjet", "list");
        isPermistted ? this.statusProjetService.findAll().subscribe(statusProjets => this.statusProjets = statusProjets,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.statusProjetService.findByCriteria(this.searchStatusProjet).subscribe(statusProjets=>{
            
            this.statusProjets = statusProjets;
           // this.searchStatusProjet = new StatusProjetVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editStatusProjet(statusProjet:StatusProjetVo){
        const isPermistted = await this.roleService.isPermitted("StatusProjet", "edit");
         if(isPermistted){
         this.selectedStatusProjet = statusProjet;
         this.editStatusProjetDialog = true;
         this.statusProjetService.editStatusProjet$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewStatusProjet(statusProjet:StatusProjetVo){
        const isPermistted = await this.roleService.isPermitted("StatusProjet", "view");
        if(isPermistted){
       this.selectedStatusProjet = statusProjet;
        this.viewStatusProjetDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateStatusProjet(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedStatusProjet = new StatusProjetVo();
        this.createStatusProjetDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteStatusProjet(statusProjet:StatusProjetVo){
       const isPermistted = await this.roleService.isPermitted("StatusProjet", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the StatusProjet ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.statusProjetService.delete(statusProjet).subscribe(status=>{
                          if(status > 0){
                          const position = this.statusProjets.indexOf(statusProjet);
                          position > -1 ? this.statusProjets.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'StatusProjet Deleted',
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

    get statusProjets(): Array<StatusProjetVo> {
           return this.statusProjetService.statusProjets;
       }
    set statusProjets(value: Array<StatusProjetVo>) {
        this.statusProjetService.statusProjets = value;
       }

    get statusProjetSelections(): Array<StatusProjetVo> {
           return this.statusProjetService.statusProjetSelections;
       }
    set statusProjetSelections(value: Array<StatusProjetVo>) {
        this.statusProjetService.statusProjetSelections = value;
       }
   
     


    get selectedStatusProjet():StatusProjetVo {
           return this.statusProjetService.selectedStatusProjet;
       }
    set selectedStatusProjet(value: StatusProjetVo) {
        this.statusProjetService.selectedStatusProjet = value;
       }
    
    get createStatusProjetDialog():boolean {
           return this.statusProjetService.createStatusProjetDialog;
       }
    set createStatusProjetDialog(value: boolean) {
        this.statusProjetService.createStatusProjetDialog= value;
       }
    
    get editStatusProjetDialog():boolean {
           return this.statusProjetService.editStatusProjetDialog;
       }
    set editStatusProjetDialog(value: boolean) {
        this.statusProjetService.editStatusProjetDialog= value;
       }
    get viewStatusProjetDialog():boolean {
           return this.statusProjetService.viewStatusProjetDialog;
       }
    set viewStatusProjetDialog(value: boolean) {
        this.statusProjetService.viewStatusProjetDialog = value;
       }
       
     get searchStatusProjet(): StatusProjetVo {
        return this.statusProjetService.searchStatusProjet;
       }
    set searchStatusProjet(value: StatusProjetVo) {
        this.statusProjetService.searchStatusProjet = value;
       }



}