import {Component, OnInit} from '@angular/core';
import {IdentifiantAuteurExpertService} from '../../../controller/service/IdentifiantAuteurExpert.service';
import {IdentifiantAuteurExpertVo} from '../../../controller/model/IdentifiantAuteurExpert.model';
import {IdentifiantRechercheVo} from '../../../controller/model/IdentifiantRecherche.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-identifiantAuteurExpert-list',
  templateUrl: './identifiantAuteurExpert-list.component.html',
  styleUrls: ['./identifiantAuteurExpert-list.component.css']
})

export class IdentifiantAuteurExpertListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private identifiantAuteurExpertService: IdentifiantAuteurExpertService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadIdentifiantAuteurExperts();
    } 
    
    // methods 
    public async loadIdentifiantAuteurExperts(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("IdentifiantAuteurExpert", "list");
        isPermistted ? this.identifiantAuteurExpertService.findAll().subscribe(identifiantAuteurExperts => this.identifiantAuteurExperts = identifiantAuteurExperts,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.identifiantAuteurExpertService.findByCriteria(this.searchIdentifiantAuteurExpert).subscribe(identifiantAuteurExperts=>{
            
            this.identifiantAuteurExperts = identifiantAuteurExperts;
           // this.searchIdentifiantAuteurExpert = new IdentifiantAuteurExpertVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'identifiantRecherche', header: 'identifiantRecherche'},
                {field: 'chercheur', header: 'chercheur'},
                {field: 'valeur', header: 'valeur'},
        ];
    }
    
    public async editIdentifiantAuteurExpert(identifiantAuteurExpert:IdentifiantAuteurExpertVo){
        const isPermistted = await this.roleService.isPermitted("IdentifiantAuteurExpert", "edit");
         if(isPermistted){
         this.selectedIdentifiantAuteurExpert = identifiantAuteurExpert;
         this.editIdentifiantAuteurExpertDialog = true;
         this.identifiantAuteurExpertService.editIdentifiantAuteurExpert$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewIdentifiantAuteurExpert(identifiantAuteurExpert:IdentifiantAuteurExpertVo){
        const isPermistted = await this.roleService.isPermitted("IdentifiantAuteurExpert", "view");
        if(isPermistted){
       this.selectedIdentifiantAuteurExpert = identifiantAuteurExpert;
        this.viewIdentifiantAuteurExpertDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateIdentifiantAuteurExpert(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedIdentifiantAuteurExpert = new IdentifiantAuteurExpertVo();
        this.createIdentifiantAuteurExpertDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteIdentifiantAuteurExpert(identifiantAuteurExpert:IdentifiantAuteurExpertVo){
       const isPermistted = await this.roleService.isPermitted("IdentifiantAuteurExpert", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the IdentifiantAuteurExpert ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.identifiantAuteurExpertService.delete(identifiantAuteurExpert).subscribe(status=>{
                          if(status > 0){
                          const position = this.identifiantAuteurExperts.indexOf(identifiantAuteurExpert);
                          position > -1 ? this.identifiantAuteurExperts.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'IdentifiantAuteurExpert Deleted',
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

    get identifiantAuteurExperts(): Array<IdentifiantAuteurExpertVo> {
           return this.identifiantAuteurExpertService.identifiantAuteurExperts;
       }
    set identifiantAuteurExperts(value: Array<IdentifiantAuteurExpertVo>) {
        this.identifiantAuteurExpertService.identifiantAuteurExperts = value;
       }

    get identifiantAuteurExpertSelections(): Array<IdentifiantAuteurExpertVo> {
           return this.identifiantAuteurExpertService.identifiantAuteurExpertSelections;
       }
    set identifiantAuteurExpertSelections(value: Array<IdentifiantAuteurExpertVo>) {
        this.identifiantAuteurExpertService.identifiantAuteurExpertSelections = value;
       }
   
     


    get selectedIdentifiantAuteurExpert():IdentifiantAuteurExpertVo {
           return this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert;
       }
    set selectedIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this.identifiantAuteurExpertService.selectedIdentifiantAuteurExpert = value;
       }
    
    get createIdentifiantAuteurExpertDialog():boolean {
           return this.identifiantAuteurExpertService.createIdentifiantAuteurExpertDialog;
       }
    set createIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.createIdentifiantAuteurExpertDialog= value;
       }
    
    get editIdentifiantAuteurExpertDialog():boolean {
           return this.identifiantAuteurExpertService.editIdentifiantAuteurExpertDialog;
       }
    set editIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.editIdentifiantAuteurExpertDialog= value;
       }
    get viewIdentifiantAuteurExpertDialog():boolean {
           return this.identifiantAuteurExpertService.viewIdentifiantAuteurExpertDialog;
       }
    set viewIdentifiantAuteurExpertDialog(value: boolean) {
        this.identifiantAuteurExpertService.viewIdentifiantAuteurExpertDialog = value;
       }
       
     get searchIdentifiantAuteurExpert(): IdentifiantAuteurExpertVo {
        return this.identifiantAuteurExpertService.searchIdentifiantAuteurExpert;
       }
    set searchIdentifiantAuteurExpert(value: IdentifiantAuteurExpertVo) {
        this.identifiantAuteurExpertService.searchIdentifiantAuteurExpert = value;
       }



}