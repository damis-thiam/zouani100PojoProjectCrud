import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirService} from '../../../controller/service/CommunauteSavoir.service';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-communauteSavoir-list',
  templateUrl: './communauteSavoir-list.component.html',
  styleUrls: ['./communauteSavoir-list.component.css']
})

export class CommunauteSavoirListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private communauteSavoirService: CommunauteSavoirService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCommunauteSavoirs();
    } 
    
    // methods 
    public async loadCommunauteSavoirs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoir", "list");
        isPermistted ? this.communauteSavoirService.findAll().subscribe(communauteSavoirs => this.communauteSavoirs = communauteSavoirs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.communauteSavoirService.findByCriteria(this.searchCommunauteSavoir).subscribe(communauteSavoirs=>{
            
            this.communauteSavoirs = communauteSavoirs;
           // this.searchCommunauteSavoir = new CommunauteSavoirVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editCommunauteSavoir(communauteSavoir:CommunauteSavoirVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoir", "edit");
         if(isPermistted){
         this.selectedCommunauteSavoir = communauteSavoir;
         this.editCommunauteSavoirDialog = true;
         this.communauteSavoirService.editCommunauteSavoir$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCommunauteSavoir(communauteSavoir:CommunauteSavoirVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoir", "view");
        if(isPermistted){
       this.selectedCommunauteSavoir = communauteSavoir;
        this.viewCommunauteSavoirDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCommunauteSavoir(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCommunauteSavoir = new CommunauteSavoirVo();
        this.createCommunauteSavoirDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCommunauteSavoir(communauteSavoir:CommunauteSavoirVo){
       const isPermistted = await this.roleService.isPermitted("CommunauteSavoir", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CommunauteSavoir ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.communauteSavoirService.delete(communauteSavoir).subscribe(status=>{
                          if(status > 0){
                          const position = this.communauteSavoirs.indexOf(communauteSavoir);
                          position > -1 ? this.communauteSavoirs.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CommunauteSavoir Deleted',
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

    get communauteSavoirs(): Array<CommunauteSavoirVo> {
           return this.communauteSavoirService.communauteSavoirs;
       }
    set communauteSavoirs(value: Array<CommunauteSavoirVo>) {
        this.communauteSavoirService.communauteSavoirs = value;
       }

    get communauteSavoirSelections(): Array<CommunauteSavoirVo> {
           return this.communauteSavoirService.communauteSavoirSelections;
       }
    set communauteSavoirSelections(value: Array<CommunauteSavoirVo>) {
        this.communauteSavoirService.communauteSavoirSelections = value;
       }
   
     


    get selectedCommunauteSavoir():CommunauteSavoirVo {
           return this.communauteSavoirService.selectedCommunauteSavoir;
       }
    set selectedCommunauteSavoir(value: CommunauteSavoirVo) {
        this.communauteSavoirService.selectedCommunauteSavoir = value;
       }
    
    get createCommunauteSavoirDialog():boolean {
           return this.communauteSavoirService.createCommunauteSavoirDialog;
       }
    set createCommunauteSavoirDialog(value: boolean) {
        this.communauteSavoirService.createCommunauteSavoirDialog= value;
       }
    
    get editCommunauteSavoirDialog():boolean {
           return this.communauteSavoirService.editCommunauteSavoirDialog;
       }
    set editCommunauteSavoirDialog(value: boolean) {
        this.communauteSavoirService.editCommunauteSavoirDialog= value;
       }
    get viewCommunauteSavoirDialog():boolean {
           return this.communauteSavoirService.viewCommunauteSavoirDialog;
       }
    set viewCommunauteSavoirDialog(value: boolean) {
        this.communauteSavoirService.viewCommunauteSavoirDialog = value;
       }
       
     get searchCommunauteSavoir(): CommunauteSavoirVo {
        return this.communauteSavoirService.searchCommunauteSavoir;
       }
    set searchCommunauteSavoir(value: CommunauteSavoirVo) {
        this.communauteSavoirService.searchCommunauteSavoir = value;
       }



}