import {Component, OnInit} from '@angular/core';
import {InstitutionService} from '../../../controller/service/Institution.service';
import {InstitutionVo} from '../../../controller/model/Institution.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.css']
})

export class InstitutionListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private institutionService: InstitutionService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadInstitutions();
    } 
    
    // methods 
    public async loadInstitutions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Institution", "list");
        isPermistted ? this.institutionService.findAll().subscribe(institutions => this.institutions = institutions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.institutionService.findByCriteria(this.searchInstitution).subscribe(institutions=>{
            
            this.institutions = institutions;
           // this.searchInstitution = new InstitutionVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editInstitution(institution:InstitutionVo){
        const isPermistted = await this.roleService.isPermitted("Institution", "edit");
         if(isPermistted){
         this.selectedInstitution = institution;
         this.editInstitutionDialog = true;
         this.institutionService.editInstitution$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewInstitution(institution:InstitutionVo){
        const isPermistted = await this.roleService.isPermitted("Institution", "view");
        if(isPermistted){
       this.selectedInstitution = institution;
        this.viewInstitutionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateInstitution(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedInstitution = new InstitutionVo();
        this.createInstitutionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteInstitution(institution:InstitutionVo){
       const isPermistted = await this.roleService.isPermitted("Institution", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Institution ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.institutionService.delete(institution).subscribe(status=>{
                          if(status > 0){
                          const position = this.institutions.indexOf(institution);
                          position > -1 ? this.institutions.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Institution Deleted',
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

    get institutions(): Array<InstitutionVo> {
           return this.institutionService.institutions;
       }
    set institutions(value: Array<InstitutionVo>) {
        this.institutionService.institutions = value;
       }

    get institutionSelections(): Array<InstitutionVo> {
           return this.institutionService.institutionSelections;
       }
    set institutionSelections(value: Array<InstitutionVo>) {
        this.institutionService.institutionSelections = value;
       }
   
     


    get selectedInstitution():InstitutionVo {
           return this.institutionService.selectedInstitution;
       }
    set selectedInstitution(value: InstitutionVo) {
        this.institutionService.selectedInstitution = value;
       }
    
    get createInstitutionDialog():boolean {
           return this.institutionService.createInstitutionDialog;
       }
    set createInstitutionDialog(value: boolean) {
        this.institutionService.createInstitutionDialog= value;
       }
    
    get editInstitutionDialog():boolean {
           return this.institutionService.editInstitutionDialog;
       }
    set editInstitutionDialog(value: boolean) {
        this.institutionService.editInstitutionDialog= value;
       }
    get viewInstitutionDialog():boolean {
           return this.institutionService.viewInstitutionDialog;
       }
    set viewInstitutionDialog(value: boolean) {
        this.institutionService.viewInstitutionDialog = value;
       }
       
     get searchInstitution(): InstitutionVo {
        return this.institutionService.searchInstitution;
       }
    set searchInstitution(value: InstitutionVo) {
        this.institutionService.searchInstitution = value;
       }



}