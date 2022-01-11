import {Component, OnInit} from '@angular/core';
import {CommissionScientifiqueService} from '../../../controller/service/CommissionScientifique.service';
import {CommissionScientifiqueVo} from '../../../controller/model/CommissionScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-commissionScientifique-list',
  templateUrl: './commissionScientifique-list.component.html',
  styleUrls: ['./commissionScientifique-list.component.css']
})

export class CommissionScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private commissionScientifiqueService: CommissionScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCommissionScientifiques();
    } 
    
    // methods 
    public async loadCommissionScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CommissionScientifique", "list");
        isPermistted ? this.commissionScientifiqueService.findAll().subscribe(commissionScientifiques => this.commissionScientifiques = commissionScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.commissionScientifiqueService.findByCriteria(this.searchCommissionScientifique).subscribe(commissionScientifiques=>{
            
            this.commissionScientifiques = commissionScientifiques;
           // this.searchCommissionScientifique = new CommissionScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editCommissionScientifique(commissionScientifique:CommissionScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("CommissionScientifique", "edit");
         if(isPermistted){
         this.selectedCommissionScientifique = commissionScientifique;
         this.editCommissionScientifiqueDialog = true;
         this.commissionScientifiqueService.editCommissionScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCommissionScientifique(commissionScientifique:CommissionScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("CommissionScientifique", "view");
        if(isPermistted){
       this.selectedCommissionScientifique = commissionScientifique;
        this.viewCommissionScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCommissionScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCommissionScientifique = new CommissionScientifiqueVo();
        this.createCommissionScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCommissionScientifique(commissionScientifique:CommissionScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("CommissionScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CommissionScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.commissionScientifiqueService.delete(commissionScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.commissionScientifiques.indexOf(commissionScientifique);
                          position > -1 ? this.commissionScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CommissionScientifique Deleted',
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

    get commissionScientifiques(): Array<CommissionScientifiqueVo> {
           return this.commissionScientifiqueService.commissionScientifiques;
       }
    set commissionScientifiques(value: Array<CommissionScientifiqueVo>) {
        this.commissionScientifiqueService.commissionScientifiques = value;
       }

    get commissionScientifiqueSelections(): Array<CommissionScientifiqueVo> {
           return this.commissionScientifiqueService.commissionScientifiqueSelections;
       }
    set commissionScientifiqueSelections(value: Array<CommissionScientifiqueVo>) {
        this.commissionScientifiqueService.commissionScientifiqueSelections = value;
       }
   
     


    get selectedCommissionScientifique():CommissionScientifiqueVo {
           return this.commissionScientifiqueService.selectedCommissionScientifique;
       }
    set selectedCommissionScientifique(value: CommissionScientifiqueVo) {
        this.commissionScientifiqueService.selectedCommissionScientifique = value;
       }
    
    get createCommissionScientifiqueDialog():boolean {
           return this.commissionScientifiqueService.createCommissionScientifiqueDialog;
       }
    set createCommissionScientifiqueDialog(value: boolean) {
        this.commissionScientifiqueService.createCommissionScientifiqueDialog= value;
       }
    
    get editCommissionScientifiqueDialog():boolean {
           return this.commissionScientifiqueService.editCommissionScientifiqueDialog;
       }
    set editCommissionScientifiqueDialog(value: boolean) {
        this.commissionScientifiqueService.editCommissionScientifiqueDialog= value;
       }
    get viewCommissionScientifiqueDialog():boolean {
           return this.commissionScientifiqueService.viewCommissionScientifiqueDialog;
       }
    set viewCommissionScientifiqueDialog(value: boolean) {
        this.commissionScientifiqueService.viewCommissionScientifiqueDialog = value;
       }
       
     get searchCommissionScientifique(): CommissionScientifiqueVo {
        return this.commissionScientifiqueService.searchCommissionScientifique;
       }
    set searchCommissionScientifique(value: CommissionScientifiqueVo) {
        this.commissionScientifiqueService.searchCommissionScientifique = value;
       }



}