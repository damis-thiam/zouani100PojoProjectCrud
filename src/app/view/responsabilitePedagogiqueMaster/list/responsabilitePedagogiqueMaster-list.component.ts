import {Component, OnInit} from '@angular/core';
import {ResponsabilitePedagogiqueMasterService} from '../../../controller/service/ResponsabilitePedagogiqueMaster.service';
import {ResponsabilitePedagogiqueMasterVo} from '../../../controller/model/ResponsabilitePedagogiqueMaster.model';
import {MasterVo} from '../../../controller/model/Master.model';
import {StatutMasterVo} from '../../../controller/model/StatutMaster.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-responsabilitePedagogiqueMaster-list',
  templateUrl: './responsabilitePedagogiqueMaster-list.component.html',
  styleUrls: ['./responsabilitePedagogiqueMaster-list.component.css']
})

export class ResponsabilitePedagogiqueMasterListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private responsabilitePedagogiqueMasterService: ResponsabilitePedagogiqueMasterService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadResponsabilitePedagogiqueMasters();
    } 
    
    // methods 
    public async loadResponsabilitePedagogiqueMasters(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ResponsabilitePedagogiqueMaster", "list");
        isPermistted ? this.responsabilitePedagogiqueMasterService.findAll().subscribe(responsabilitePedagogiqueMasters => this.responsabilitePedagogiqueMasters = responsabilitePedagogiqueMasters,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.responsabilitePedagogiqueMasterService.findByCriteria(this.searchResponsabilitePedagogiqueMaster).subscribe(responsabilitePedagogiqueMasters=>{
            
            this.responsabilitePedagogiqueMasters = responsabilitePedagogiqueMasters;
           // this.searchResponsabilitePedagogiqueMaster = new ResponsabilitePedagogiqueMasterVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'annee', header: 'annee'},
                {field: 'tempsEstimePourCetteAnnne', header: 'tempsEstimePourCetteAnnne'},
                {field: 'statutMaster', header: 'statutMaster'},
                {field: 'appelServiceRenforcementCapaciteSud', header: 'appelServiceRenforcementCapaciteSud'},
                {field: 'masterInternational', header: 'masterInternational'},
                {field: 'master', header: 'master'},
                {field: 'etablissement', header: 'etablissement'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editResponsabilitePedagogiqueMaster(responsabilitePedagogiqueMaster:ResponsabilitePedagogiqueMasterVo){
        const isPermistted = await this.roleService.isPermitted("ResponsabilitePedagogiqueMaster", "edit");
         if(isPermistted){
         this.selectedResponsabilitePedagogiqueMaster = responsabilitePedagogiqueMaster;
         this.editResponsabilitePedagogiqueMasterDialog = true;
         this.responsabilitePedagogiqueMasterService.editResponsabilitePedagogiqueMaster$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewResponsabilitePedagogiqueMaster(responsabilitePedagogiqueMaster:ResponsabilitePedagogiqueMasterVo){
        const isPermistted = await this.roleService.isPermitted("ResponsabilitePedagogiqueMaster", "view");
        if(isPermistted){
       this.selectedResponsabilitePedagogiqueMaster = responsabilitePedagogiqueMaster;
        this.viewResponsabilitePedagogiqueMasterDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateResponsabilitePedagogiqueMaster(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedResponsabilitePedagogiqueMaster = new ResponsabilitePedagogiqueMasterVo();
        this.createResponsabilitePedagogiqueMasterDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteResponsabilitePedagogiqueMaster(responsabilitePedagogiqueMaster:ResponsabilitePedagogiqueMasterVo){
       const isPermistted = await this.roleService.isPermitted("ResponsabilitePedagogiqueMaster", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ResponsabilitePedagogiqueMaster ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.responsabilitePedagogiqueMasterService.delete(responsabilitePedagogiqueMaster).subscribe(status=>{
                          if(status > 0){
                          const position = this.responsabilitePedagogiqueMasters.indexOf(responsabilitePedagogiqueMaster);
                          position > -1 ? this.responsabilitePedagogiqueMasters.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ResponsabilitePedagogiqueMaster Deleted',
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

    get responsabilitePedagogiqueMasters(): Array<ResponsabilitePedagogiqueMasterVo> {
           return this.responsabilitePedagogiqueMasterService.responsabilitePedagogiqueMasters;
       }
    set responsabilitePedagogiqueMasters(value: Array<ResponsabilitePedagogiqueMasterVo>) {
        this.responsabilitePedagogiqueMasterService.responsabilitePedagogiqueMasters = value;
       }

    get responsabilitePedagogiqueMasterSelections(): Array<ResponsabilitePedagogiqueMasterVo> {
           return this.responsabilitePedagogiqueMasterService.responsabilitePedagogiqueMasterSelections;
       }
    set responsabilitePedagogiqueMasterSelections(value: Array<ResponsabilitePedagogiqueMasterVo>) {
        this.responsabilitePedagogiqueMasterService.responsabilitePedagogiqueMasterSelections = value;
       }
   
     


    get selectedResponsabilitePedagogiqueMaster():ResponsabilitePedagogiqueMasterVo {
           return this.responsabilitePedagogiqueMasterService.selectedResponsabilitePedagogiqueMaster;
       }
    set selectedResponsabilitePedagogiqueMaster(value: ResponsabilitePedagogiqueMasterVo) {
        this.responsabilitePedagogiqueMasterService.selectedResponsabilitePedagogiqueMaster = value;
       }
    
    get createResponsabilitePedagogiqueMasterDialog():boolean {
           return this.responsabilitePedagogiqueMasterService.createResponsabilitePedagogiqueMasterDialog;
       }
    set createResponsabilitePedagogiqueMasterDialog(value: boolean) {
        this.responsabilitePedagogiqueMasterService.createResponsabilitePedagogiqueMasterDialog= value;
       }
    
    get editResponsabilitePedagogiqueMasterDialog():boolean {
           return this.responsabilitePedagogiqueMasterService.editResponsabilitePedagogiqueMasterDialog;
       }
    set editResponsabilitePedagogiqueMasterDialog(value: boolean) {
        this.responsabilitePedagogiqueMasterService.editResponsabilitePedagogiqueMasterDialog= value;
       }
    get viewResponsabilitePedagogiqueMasterDialog():boolean {
           return this.responsabilitePedagogiqueMasterService.viewResponsabilitePedagogiqueMasterDialog;
       }
    set viewResponsabilitePedagogiqueMasterDialog(value: boolean) {
        this.responsabilitePedagogiqueMasterService.viewResponsabilitePedagogiqueMasterDialog = value;
       }
       
     get searchResponsabilitePedagogiqueMaster(): ResponsabilitePedagogiqueMasterVo {
        return this.responsabilitePedagogiqueMasterService.searchResponsabilitePedagogiqueMaster;
       }
    set searchResponsabilitePedagogiqueMaster(value: ResponsabilitePedagogiqueMasterVo) {
        this.responsabilitePedagogiqueMasterService.searchResponsabilitePedagogiqueMaster = value;
       }



}