import {Component, OnInit} from '@angular/core';
import {OrganismeService} from '../../../controller/service/Organisme.service';
import {OrganismeVo} from '../../../controller/model/Organisme.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-organisme-list',
  templateUrl: './organisme-list.component.html',
  styleUrls: ['./organisme-list.component.css']
})

export class OrganismeListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private organismeService: OrganismeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadOrganismes();
    } 
    
    // methods 
    public async loadOrganismes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Organisme", "list");
        isPermistted ? this.organismeService.findAll().subscribe(organismes => this.organismes = organismes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.organismeService.findByCriteria(this.searchOrganisme).subscribe(organismes=>{
            
            this.organismes = organismes;
           // this.searchOrganisme = new OrganismeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'intitule', header: 'intitule'},
                {field: 'code', header: 'code'},
                {field: 'description', header: 'description'},
        ];
    }
    
    public async editOrganisme(organisme:OrganismeVo){
        const isPermistted = await this.roleService.isPermitted("Organisme", "edit");
         if(isPermistted){
         this.selectedOrganisme = organisme;
         this.editOrganismeDialog = true;
         this.organismeService.editOrganisme$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewOrganisme(organisme:OrganismeVo){
        const isPermistted = await this.roleService.isPermitted("Organisme", "view");
        if(isPermistted){
       this.selectedOrganisme = organisme;
        this.viewOrganismeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateOrganisme(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedOrganisme = new OrganismeVo();
        this.createOrganismeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteOrganisme(organisme:OrganismeVo){
       const isPermistted = await this.roleService.isPermitted("Organisme", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Organisme ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.organismeService.delete(organisme).subscribe(status=>{
                          if(status > 0){
                          const position = this.organismes.indexOf(organisme);
                          position > -1 ? this.organismes.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Organisme Deleted',
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

    get organismes(): Array<OrganismeVo> {
           return this.organismeService.organismes;
       }
    set organismes(value: Array<OrganismeVo>) {
        this.organismeService.organismes = value;
       }

    get organismeSelections(): Array<OrganismeVo> {
           return this.organismeService.organismeSelections;
       }
    set organismeSelections(value: Array<OrganismeVo>) {
        this.organismeService.organismeSelections = value;
       }
   
     


    get selectedOrganisme():OrganismeVo {
           return this.organismeService.selectedOrganisme;
       }
    set selectedOrganisme(value: OrganismeVo) {
        this.organismeService.selectedOrganisme = value;
       }
    
    get createOrganismeDialog():boolean {
           return this.organismeService.createOrganismeDialog;
       }
    set createOrganismeDialog(value: boolean) {
        this.organismeService.createOrganismeDialog= value;
       }
    
    get editOrganismeDialog():boolean {
           return this.organismeService.editOrganismeDialog;
       }
    set editOrganismeDialog(value: boolean) {
        this.organismeService.editOrganismeDialog= value;
       }
    get viewOrganismeDialog():boolean {
           return this.organismeService.viewOrganismeDialog;
       }
    set viewOrganismeDialog(value: boolean) {
        this.organismeService.viewOrganismeDialog = value;
       }
       
     get searchOrganisme(): OrganismeVo {
        return this.organismeService.searchOrganisme;
       }
    set searchOrganisme(value: OrganismeVo) {
        this.organismeService.searchOrganisme = value;
       }



}