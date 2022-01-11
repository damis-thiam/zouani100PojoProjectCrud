import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirEvenementColloqueScientifiquesService} from '../../../controller/service/CommunauteSavoirEvenementColloqueScientifiques.service';
import {CommunauteSavoirEvenementColloqueScientifiquesVo} from '../../../controller/model/CommunauteSavoirEvenementColloqueScientifiques.model';
import {EvenementColloqueScienntifiqueVo} from '../../../controller/model/EvenementColloqueScienntifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-communauteSavoirEvenementColloqueScientifiques-list',
  templateUrl: './communauteSavoirEvenementColloqueScientifiques-list.component.html',
  styleUrls: ['./communauteSavoirEvenementColloqueScientifiques-list.component.css']
})

export class CommunauteSavoirEvenementColloqueScientifiquesListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private communauteSavoirEvenementColloqueScientifiquesService: CommunauteSavoirEvenementColloqueScientifiquesService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCommunauteSavoirEvenementColloqueScientifiquess();
    } 
    
    // methods 
    public async loadCommunauteSavoirEvenementColloqueScientifiquess(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEvenementColloqueScientifiques", "list");
        isPermistted ? this.communauteSavoirEvenementColloqueScientifiquesService.findAll().subscribe(communauteSavoirEvenementColloqueScientifiquess => this.communauteSavoirEvenementColloqueScientifiquess = communauteSavoirEvenementColloqueScientifiquess,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.communauteSavoirEvenementColloqueScientifiquesService.findByCriteria(this.searchCommunauteSavoirEvenementColloqueScientifiques).subscribe(communauteSavoirEvenementColloqueScientifiquess=>{
            
            this.communauteSavoirEvenementColloqueScientifiquess = communauteSavoirEvenementColloqueScientifiquess;
           // this.searchCommunauteSavoirEvenementColloqueScientifiques = new CommunauteSavoirEvenementColloqueScientifiquesVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'evenementColloqueScienntifique', header: 'evenementColloqueScienntifique'},
                {field: 'communauteSavoir', header: 'communauteSavoir'},
        ];
    }
    
    public async editCommunauteSavoirEvenementColloqueScientifiques(communauteSavoirEvenementColloqueScientifiques:CommunauteSavoirEvenementColloqueScientifiquesVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEvenementColloqueScientifiques", "edit");
         if(isPermistted){
         this.selectedCommunauteSavoirEvenementColloqueScientifiques = communauteSavoirEvenementColloqueScientifiques;
         this.editCommunauteSavoirEvenementColloqueScientifiquesDialog = true;
         this.communauteSavoirEvenementColloqueScientifiquesService.editCommunauteSavoirEvenementColloqueScientifiques$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCommunauteSavoirEvenementColloqueScientifiques(communauteSavoirEvenementColloqueScientifiques:CommunauteSavoirEvenementColloqueScientifiquesVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEvenementColloqueScientifiques", "view");
        if(isPermistted){
       this.selectedCommunauteSavoirEvenementColloqueScientifiques = communauteSavoirEvenementColloqueScientifiques;
        this.viewCommunauteSavoirEvenementColloqueScientifiquesDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCommunauteSavoirEvenementColloqueScientifiques(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCommunauteSavoirEvenementColloqueScientifiques = new CommunauteSavoirEvenementColloqueScientifiquesVo();
        this.createCommunauteSavoirEvenementColloqueScientifiquesDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCommunauteSavoirEvenementColloqueScientifiques(communauteSavoirEvenementColloqueScientifiques:CommunauteSavoirEvenementColloqueScientifiquesVo){
       const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEvenementColloqueScientifiques", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CommunauteSavoirEvenementColloqueScientifiques ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.communauteSavoirEvenementColloqueScientifiquesService.delete(communauteSavoirEvenementColloqueScientifiques).subscribe(status=>{
                          if(status > 0){
                          const position = this.communauteSavoirEvenementColloqueScientifiquess.indexOf(communauteSavoirEvenementColloqueScientifiques);
                          position > -1 ? this.communauteSavoirEvenementColloqueScientifiquess.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CommunauteSavoirEvenementColloqueScientifiques Deleted',
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

    get communauteSavoirEvenementColloqueScientifiquess(): Array<CommunauteSavoirEvenementColloqueScientifiquesVo> {
           return this.communauteSavoirEvenementColloqueScientifiquesService.communauteSavoirEvenementColloqueScientifiquess;
       }
    set communauteSavoirEvenementColloqueScientifiquess(value: Array<CommunauteSavoirEvenementColloqueScientifiquesVo>) {
        this.communauteSavoirEvenementColloqueScientifiquesService.communauteSavoirEvenementColloqueScientifiquess = value;
       }

    get communauteSavoirEvenementColloqueScientifiquesSelections(): Array<CommunauteSavoirEvenementColloqueScientifiquesVo> {
           return this.communauteSavoirEvenementColloqueScientifiquesService.communauteSavoirEvenementColloqueScientifiquesSelections;
       }
    set communauteSavoirEvenementColloqueScientifiquesSelections(value: Array<CommunauteSavoirEvenementColloqueScientifiquesVo>) {
        this.communauteSavoirEvenementColloqueScientifiquesService.communauteSavoirEvenementColloqueScientifiquesSelections = value;
       }
   
     


    get selectedCommunauteSavoirEvenementColloqueScientifiques():CommunauteSavoirEvenementColloqueScientifiquesVo {
           return this.communauteSavoirEvenementColloqueScientifiquesService.selectedCommunauteSavoirEvenementColloqueScientifiques;
       }
    set selectedCommunauteSavoirEvenementColloqueScientifiques(value: CommunauteSavoirEvenementColloqueScientifiquesVo) {
        this.communauteSavoirEvenementColloqueScientifiquesService.selectedCommunauteSavoirEvenementColloqueScientifiques = value;
       }
    
    get createCommunauteSavoirEvenementColloqueScientifiquesDialog():boolean {
           return this.communauteSavoirEvenementColloqueScientifiquesService.createCommunauteSavoirEvenementColloqueScientifiquesDialog;
       }
    set createCommunauteSavoirEvenementColloqueScientifiquesDialog(value: boolean) {
        this.communauteSavoirEvenementColloqueScientifiquesService.createCommunauteSavoirEvenementColloqueScientifiquesDialog= value;
       }
    
    get editCommunauteSavoirEvenementColloqueScientifiquesDialog():boolean {
           return this.communauteSavoirEvenementColloqueScientifiquesService.editCommunauteSavoirEvenementColloqueScientifiquesDialog;
       }
    set editCommunauteSavoirEvenementColloqueScientifiquesDialog(value: boolean) {
        this.communauteSavoirEvenementColloqueScientifiquesService.editCommunauteSavoirEvenementColloqueScientifiquesDialog= value;
       }
    get viewCommunauteSavoirEvenementColloqueScientifiquesDialog():boolean {
           return this.communauteSavoirEvenementColloqueScientifiquesService.viewCommunauteSavoirEvenementColloqueScientifiquesDialog;
       }
    set viewCommunauteSavoirEvenementColloqueScientifiquesDialog(value: boolean) {
        this.communauteSavoirEvenementColloqueScientifiquesService.viewCommunauteSavoirEvenementColloqueScientifiquesDialog = value;
       }
       
     get searchCommunauteSavoirEvenementColloqueScientifiques(): CommunauteSavoirEvenementColloqueScientifiquesVo {
        return this.communauteSavoirEvenementColloqueScientifiquesService.searchCommunauteSavoirEvenementColloqueScientifiques;
       }
    set searchCommunauteSavoirEvenementColloqueScientifiques(value: CommunauteSavoirEvenementColloqueScientifiquesVo) {
        this.communauteSavoirEvenementColloqueScientifiquesService.searchCommunauteSavoirEvenementColloqueScientifiques = value;
       }



}