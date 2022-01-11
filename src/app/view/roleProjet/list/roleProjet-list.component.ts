import {Component, OnInit} from '@angular/core';
import {RoleProjetService} from '../../../controller/service/RoleProjet.service';
import {RoleProjetVo} from '../../../controller/model/RoleProjet.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-roleProjet-list',
  templateUrl: './roleProjet-list.component.html',
  styleUrls: ['./roleProjet-list.component.css']
})

export class RoleProjetListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private roleProjetService: RoleProjetService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadRoleProjets();
    } 
    
    // methods 
    public async loadRoleProjets(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("RoleProjet", "list");
        isPermistted ? this.roleProjetService.findAll().subscribe(roleProjets => this.roleProjets = roleProjets,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.roleProjetService.findByCriteria(this.searchRoleProjet).subscribe(roleProjets=>{
            
            this.roleProjets = roleProjets;
           // this.searchRoleProjet = new RoleProjetVo();
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
    
    public async editRoleProjet(roleProjet:RoleProjetVo){
        const isPermistted = await this.roleService.isPermitted("RoleProjet", "edit");
         if(isPermistted){
         this.selectedRoleProjet = roleProjet;
         this.editRoleProjetDialog = true;
         this.roleProjetService.editRoleProjet$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewRoleProjet(roleProjet:RoleProjetVo){
        const isPermistted = await this.roleService.isPermitted("RoleProjet", "view");
        if(isPermistted){
       this.selectedRoleProjet = roleProjet;
        this.viewRoleProjetDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateRoleProjet(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedRoleProjet = new RoleProjetVo();
        this.createRoleProjetDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteRoleProjet(roleProjet:RoleProjetVo){
       const isPermistted = await this.roleService.isPermitted("RoleProjet", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the RoleProjet ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.roleProjetService.delete(roleProjet).subscribe(status=>{
                          if(status > 0){
                          const position = this.roleProjets.indexOf(roleProjet);
                          position > -1 ? this.roleProjets.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'RoleProjet Deleted',
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

    get roleProjets(): Array<RoleProjetVo> {
           return this.roleProjetService.roleProjets;
       }
    set roleProjets(value: Array<RoleProjetVo>) {
        this.roleProjetService.roleProjets = value;
       }

    get roleProjetSelections(): Array<RoleProjetVo> {
           return this.roleProjetService.roleProjetSelections;
       }
    set roleProjetSelections(value: Array<RoleProjetVo>) {
        this.roleProjetService.roleProjetSelections = value;
       }
   
     


    get selectedRoleProjet():RoleProjetVo {
           return this.roleProjetService.selectedRoleProjet;
       }
    set selectedRoleProjet(value: RoleProjetVo) {
        this.roleProjetService.selectedRoleProjet = value;
       }
    
    get createRoleProjetDialog():boolean {
           return this.roleProjetService.createRoleProjetDialog;
       }
    set createRoleProjetDialog(value: boolean) {
        this.roleProjetService.createRoleProjetDialog= value;
       }
    
    get editRoleProjetDialog():boolean {
           return this.roleProjetService.editRoleProjetDialog;
       }
    set editRoleProjetDialog(value: boolean) {
        this.roleProjetService.editRoleProjetDialog= value;
       }
    get viewRoleProjetDialog():boolean {
           return this.roleProjetService.viewRoleProjetDialog;
       }
    set viewRoleProjetDialog(value: boolean) {
        this.roleProjetService.viewRoleProjetDialog = value;
       }
       
     get searchRoleProjet(): RoleProjetVo {
        return this.roleProjetService.searchRoleProjet;
       }
    set searchRoleProjet(value: RoleProjetVo) {
        this.roleProjetService.searchRoleProjet = value;
       }



}