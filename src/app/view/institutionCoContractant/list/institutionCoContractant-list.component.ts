import {Component, OnInit} from '@angular/core';
import {InstitutionCoContractantService} from '../../../controller/service/InstitutionCoContractant.service';
import {InstitutionCoContractantVo} from '../../../controller/model/InstitutionCoContractant.model';
import {InstitutionVo} from '../../../controller/model/Institution.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-institutionCoContractant-list',
  templateUrl: './institutionCoContractant-list.component.html',
  styleUrls: ['./institutionCoContractant-list.component.css']
})

export class InstitutionCoContractantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private institutionCoContractantService: InstitutionCoContractantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadInstitutionCoContractants();
    } 
    
    // methods 
    public async loadInstitutionCoContractants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("InstitutionCoContractant", "list");
        isPermistted ? this.institutionCoContractantService.findAll().subscribe(institutionCoContractants => this.institutionCoContractants = institutionCoContractants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.institutionCoContractantService.findByCriteria(this.searchInstitutionCoContractant).subscribe(institutionCoContractants=>{
            
            this.institutionCoContractants = institutionCoContractants;
           // this.searchInstitutionCoContractant = new InstitutionCoContractantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'chercheur', header: 'chercheur'},
                {field: 'institution', header: 'institution'},
        ];
    }
    
    public async editInstitutionCoContractant(institutionCoContractant:InstitutionCoContractantVo){
        const isPermistted = await this.roleService.isPermitted("InstitutionCoContractant", "edit");
         if(isPermistted){
         this.selectedInstitutionCoContractant = institutionCoContractant;
         this.editInstitutionCoContractantDialog = true;
         this.institutionCoContractantService.editInstitutionCoContractant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewInstitutionCoContractant(institutionCoContractant:InstitutionCoContractantVo){
        const isPermistted = await this.roleService.isPermitted("InstitutionCoContractant", "view");
        if(isPermistted){
       this.selectedInstitutionCoContractant = institutionCoContractant;
        this.viewInstitutionCoContractantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateInstitutionCoContractant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedInstitutionCoContractant = new InstitutionCoContractantVo();
        this.createInstitutionCoContractantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteInstitutionCoContractant(institutionCoContractant:InstitutionCoContractantVo){
       const isPermistted = await this.roleService.isPermitted("InstitutionCoContractant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the InstitutionCoContractant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.institutionCoContractantService.delete(institutionCoContractant).subscribe(status=>{
                          if(status > 0){
                          const position = this.institutionCoContractants.indexOf(institutionCoContractant);
                          position > -1 ? this.institutionCoContractants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'InstitutionCoContractant Deleted',
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

    get institutionCoContractants(): Array<InstitutionCoContractantVo> {
           return this.institutionCoContractantService.institutionCoContractants;
       }
    set institutionCoContractants(value: Array<InstitutionCoContractantVo>) {
        this.institutionCoContractantService.institutionCoContractants = value;
       }

    get institutionCoContractantSelections(): Array<InstitutionCoContractantVo> {
           return this.institutionCoContractantService.institutionCoContractantSelections;
       }
    set institutionCoContractantSelections(value: Array<InstitutionCoContractantVo>) {
        this.institutionCoContractantService.institutionCoContractantSelections = value;
       }
   
     


    get selectedInstitutionCoContractant():InstitutionCoContractantVo {
           return this.institutionCoContractantService.selectedInstitutionCoContractant;
       }
    set selectedInstitutionCoContractant(value: InstitutionCoContractantVo) {
        this.institutionCoContractantService.selectedInstitutionCoContractant = value;
       }
    
    get createInstitutionCoContractantDialog():boolean {
           return this.institutionCoContractantService.createInstitutionCoContractantDialog;
       }
    set createInstitutionCoContractantDialog(value: boolean) {
        this.institutionCoContractantService.createInstitutionCoContractantDialog= value;
       }
    
    get editInstitutionCoContractantDialog():boolean {
           return this.institutionCoContractantService.editInstitutionCoContractantDialog;
       }
    set editInstitutionCoContractantDialog(value: boolean) {
        this.institutionCoContractantService.editInstitutionCoContractantDialog= value;
       }
    get viewInstitutionCoContractantDialog():boolean {
           return this.institutionCoContractantService.viewInstitutionCoContractantDialog;
       }
    set viewInstitutionCoContractantDialog(value: boolean) {
        this.institutionCoContractantService.viewInstitutionCoContractantDialog = value;
       }
       
     get searchInstitutionCoContractant(): InstitutionCoContractantVo {
        return this.institutionCoContractantService.searchInstitutionCoContractant;
       }
    set searchInstitutionCoContractant(value: InstitutionCoContractantVo) {
        this.institutionCoContractantService.searchInstitutionCoContractant = value;
       }



}