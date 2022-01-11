import {Component, OnInit} from '@angular/core';
import {RoleEvaluationRechercheUniversitaireService} from '../../../controller/service/RoleEvaluationRechercheUniversitaire.service';
import {RoleEvaluationRechercheUniversitaireVo} from '../../../controller/model/RoleEvaluationRechercheUniversitaire.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-roleEvaluationRechercheUniversitaire-list',
  templateUrl: './roleEvaluationRechercheUniversitaire-list.component.html',
  styleUrls: ['./roleEvaluationRechercheUniversitaire-list.component.css']
})

export class RoleEvaluationRechercheUniversitaireListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private roleEvaluationRechercheUniversitaireService: RoleEvaluationRechercheUniversitaireService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadRoleEvaluationRechercheUniversitaires();
    } 
    
    // methods 
    public async loadRoleEvaluationRechercheUniversitaires(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("RoleEvaluationRechercheUniversitaire", "list");
        isPermistted ? this.roleEvaluationRechercheUniversitaireService.findAll().subscribe(roleEvaluationRechercheUniversitaires => this.roleEvaluationRechercheUniversitaires = roleEvaluationRechercheUniversitaires,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.roleEvaluationRechercheUniversitaireService.findByCriteria(this.searchRoleEvaluationRechercheUniversitaire).subscribe(roleEvaluationRechercheUniversitaires=>{
            
            this.roleEvaluationRechercheUniversitaires = roleEvaluationRechercheUniversitaires;
           // this.searchRoleEvaluationRechercheUniversitaire = new RoleEvaluationRechercheUniversitaireVo();
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
    
    public async editRoleEvaluationRechercheUniversitaire(roleEvaluationRechercheUniversitaire:RoleEvaluationRechercheUniversitaireVo){
        const isPermistted = await this.roleService.isPermitted("RoleEvaluationRechercheUniversitaire", "edit");
         if(isPermistted){
         this.selectedRoleEvaluationRechercheUniversitaire = roleEvaluationRechercheUniversitaire;
         this.editRoleEvaluationRechercheUniversitaireDialog = true;
         this.roleEvaluationRechercheUniversitaireService.editRoleEvaluationRechercheUniversitaire$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewRoleEvaluationRechercheUniversitaire(roleEvaluationRechercheUniversitaire:RoleEvaluationRechercheUniversitaireVo){
        const isPermistted = await this.roleService.isPermitted("RoleEvaluationRechercheUniversitaire", "view");
        if(isPermistted){
       this.selectedRoleEvaluationRechercheUniversitaire = roleEvaluationRechercheUniversitaire;
        this.viewRoleEvaluationRechercheUniversitaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateRoleEvaluationRechercheUniversitaire(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedRoleEvaluationRechercheUniversitaire = new RoleEvaluationRechercheUniversitaireVo();
        this.createRoleEvaluationRechercheUniversitaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteRoleEvaluationRechercheUniversitaire(roleEvaluationRechercheUniversitaire:RoleEvaluationRechercheUniversitaireVo){
       const isPermistted = await this.roleService.isPermitted("RoleEvaluationRechercheUniversitaire", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the RoleEvaluationRechercheUniversitaire ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.roleEvaluationRechercheUniversitaireService.delete(roleEvaluationRechercheUniversitaire).subscribe(status=>{
                          if(status > 0){
                          const position = this.roleEvaluationRechercheUniversitaires.indexOf(roleEvaluationRechercheUniversitaire);
                          position > -1 ? this.roleEvaluationRechercheUniversitaires.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'RoleEvaluationRechercheUniversitaire Deleted',
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

    get roleEvaluationRechercheUniversitaires(): Array<RoleEvaluationRechercheUniversitaireVo> {
           return this.roleEvaluationRechercheUniversitaireService.roleEvaluationRechercheUniversitaires;
       }
    set roleEvaluationRechercheUniversitaires(value: Array<RoleEvaluationRechercheUniversitaireVo>) {
        this.roleEvaluationRechercheUniversitaireService.roleEvaluationRechercheUniversitaires = value;
       }

    get roleEvaluationRechercheUniversitaireSelections(): Array<RoleEvaluationRechercheUniversitaireVo> {
           return this.roleEvaluationRechercheUniversitaireService.roleEvaluationRechercheUniversitaireSelections;
       }
    set roleEvaluationRechercheUniversitaireSelections(value: Array<RoleEvaluationRechercheUniversitaireVo>) {
        this.roleEvaluationRechercheUniversitaireService.roleEvaluationRechercheUniversitaireSelections = value;
       }
   
     


    get selectedRoleEvaluationRechercheUniversitaire():RoleEvaluationRechercheUniversitaireVo {
           return this.roleEvaluationRechercheUniversitaireService.selectedRoleEvaluationRechercheUniversitaire;
       }
    set selectedRoleEvaluationRechercheUniversitaire(value: RoleEvaluationRechercheUniversitaireVo) {
        this.roleEvaluationRechercheUniversitaireService.selectedRoleEvaluationRechercheUniversitaire = value;
       }
    
    get createRoleEvaluationRechercheUniversitaireDialog():boolean {
           return this.roleEvaluationRechercheUniversitaireService.createRoleEvaluationRechercheUniversitaireDialog;
       }
    set createRoleEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.roleEvaluationRechercheUniversitaireService.createRoleEvaluationRechercheUniversitaireDialog= value;
       }
    
    get editRoleEvaluationRechercheUniversitaireDialog():boolean {
           return this.roleEvaluationRechercheUniversitaireService.editRoleEvaluationRechercheUniversitaireDialog;
       }
    set editRoleEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.roleEvaluationRechercheUniversitaireService.editRoleEvaluationRechercheUniversitaireDialog= value;
       }
    get viewRoleEvaluationRechercheUniversitaireDialog():boolean {
           return this.roleEvaluationRechercheUniversitaireService.viewRoleEvaluationRechercheUniversitaireDialog;
       }
    set viewRoleEvaluationRechercheUniversitaireDialog(value: boolean) {
        this.roleEvaluationRechercheUniversitaireService.viewRoleEvaluationRechercheUniversitaireDialog = value;
       }
       
     get searchRoleEvaluationRechercheUniversitaire(): RoleEvaluationRechercheUniversitaireVo {
        return this.roleEvaluationRechercheUniversitaireService.searchRoleEvaluationRechercheUniversitaire;
       }
    set searchRoleEvaluationRechercheUniversitaire(value: RoleEvaluationRechercheUniversitaireVo) {
        this.roleEvaluationRechercheUniversitaireService.searchRoleEvaluationRechercheUniversitaire = value;
       }



}