import {Component, OnInit} from '@angular/core';
import {ResponsabiliteDirectionEncadrementDoctorantService} from '../../../controller/service/ResponsabiliteDirectionEncadrementDoctorant.service';
import {ResponsabiliteDirectionEncadrementDoctorantVo} from '../../../controller/model/ResponsabiliteDirectionEncadrementDoctorant.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-responsabiliteDirectionEncadrementDoctorant-list',
  templateUrl: './responsabiliteDirectionEncadrementDoctorant-list.component.html',
  styleUrls: ['./responsabiliteDirectionEncadrementDoctorant-list.component.css']
})

export class ResponsabiliteDirectionEncadrementDoctorantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private responsabiliteDirectionEncadrementDoctorantService: ResponsabiliteDirectionEncadrementDoctorantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadResponsabiliteDirectionEncadrementDoctorants();
    } 
    
    // methods 
    public async loadResponsabiliteDirectionEncadrementDoctorants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ResponsabiliteDirectionEncadrementDoctorant", "list");
        isPermistted ? this.responsabiliteDirectionEncadrementDoctorantService.findAll().subscribe(responsabiliteDirectionEncadrementDoctorants => this.responsabiliteDirectionEncadrementDoctorants = responsabiliteDirectionEncadrementDoctorants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.responsabiliteDirectionEncadrementDoctorantService.findByCriteria(this.searchResponsabiliteDirectionEncadrementDoctorant).subscribe(responsabiliteDirectionEncadrementDoctorants=>{
            
            this.responsabiliteDirectionEncadrementDoctorants = responsabiliteDirectionEncadrementDoctorants;
           // this.searchResponsabiliteDirectionEncadrementDoctorant = new ResponsabiliteDirectionEncadrementDoctorantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editResponsabiliteDirectionEncadrementDoctorant(responsabiliteDirectionEncadrementDoctorant:ResponsabiliteDirectionEncadrementDoctorantVo){
        const isPermistted = await this.roleService.isPermitted("ResponsabiliteDirectionEncadrementDoctorant", "edit");
         if(isPermistted){
         this.selectedResponsabiliteDirectionEncadrementDoctorant = responsabiliteDirectionEncadrementDoctorant;
         this.editResponsabiliteDirectionEncadrementDoctorantDialog = true;
         this.responsabiliteDirectionEncadrementDoctorantService.editResponsabiliteDirectionEncadrementDoctorant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewResponsabiliteDirectionEncadrementDoctorant(responsabiliteDirectionEncadrementDoctorant:ResponsabiliteDirectionEncadrementDoctorantVo){
        const isPermistted = await this.roleService.isPermitted("ResponsabiliteDirectionEncadrementDoctorant", "view");
        if(isPermistted){
       this.selectedResponsabiliteDirectionEncadrementDoctorant = responsabiliteDirectionEncadrementDoctorant;
        this.viewResponsabiliteDirectionEncadrementDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateResponsabiliteDirectionEncadrementDoctorant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedResponsabiliteDirectionEncadrementDoctorant = new ResponsabiliteDirectionEncadrementDoctorantVo();
        this.createResponsabiliteDirectionEncadrementDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteResponsabiliteDirectionEncadrementDoctorant(responsabiliteDirectionEncadrementDoctorant:ResponsabiliteDirectionEncadrementDoctorantVo){
       const isPermistted = await this.roleService.isPermitted("ResponsabiliteDirectionEncadrementDoctorant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ResponsabiliteDirectionEncadrementDoctorant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.responsabiliteDirectionEncadrementDoctorantService.delete(responsabiliteDirectionEncadrementDoctorant).subscribe(status=>{
                          if(status > 0){
                          const position = this.responsabiliteDirectionEncadrementDoctorants.indexOf(responsabiliteDirectionEncadrementDoctorant);
                          position > -1 ? this.responsabiliteDirectionEncadrementDoctorants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ResponsabiliteDirectionEncadrementDoctorant Deleted',
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

    get responsabiliteDirectionEncadrementDoctorants(): Array<ResponsabiliteDirectionEncadrementDoctorantVo> {
           return this.responsabiliteDirectionEncadrementDoctorantService.responsabiliteDirectionEncadrementDoctorants;
       }
    set responsabiliteDirectionEncadrementDoctorants(value: Array<ResponsabiliteDirectionEncadrementDoctorantVo>) {
        this.responsabiliteDirectionEncadrementDoctorantService.responsabiliteDirectionEncadrementDoctorants = value;
       }

    get responsabiliteDirectionEncadrementDoctorantSelections(): Array<ResponsabiliteDirectionEncadrementDoctorantVo> {
           return this.responsabiliteDirectionEncadrementDoctorantService.responsabiliteDirectionEncadrementDoctorantSelections;
       }
    set responsabiliteDirectionEncadrementDoctorantSelections(value: Array<ResponsabiliteDirectionEncadrementDoctorantVo>) {
        this.responsabiliteDirectionEncadrementDoctorantService.responsabiliteDirectionEncadrementDoctorantSelections = value;
       }
   
     


    get selectedResponsabiliteDirectionEncadrementDoctorant():ResponsabiliteDirectionEncadrementDoctorantVo {
           return this.responsabiliteDirectionEncadrementDoctorantService.selectedResponsabiliteDirectionEncadrementDoctorant;
       }
    set selectedResponsabiliteDirectionEncadrementDoctorant(value: ResponsabiliteDirectionEncadrementDoctorantVo) {
        this.responsabiliteDirectionEncadrementDoctorantService.selectedResponsabiliteDirectionEncadrementDoctorant = value;
       }
    
    get createResponsabiliteDirectionEncadrementDoctorantDialog():boolean {
           return this.responsabiliteDirectionEncadrementDoctorantService.createResponsabiliteDirectionEncadrementDoctorantDialog;
       }
    set createResponsabiliteDirectionEncadrementDoctorantDialog(value: boolean) {
        this.responsabiliteDirectionEncadrementDoctorantService.createResponsabiliteDirectionEncadrementDoctorantDialog= value;
       }
    
    get editResponsabiliteDirectionEncadrementDoctorantDialog():boolean {
           return this.responsabiliteDirectionEncadrementDoctorantService.editResponsabiliteDirectionEncadrementDoctorantDialog;
       }
    set editResponsabiliteDirectionEncadrementDoctorantDialog(value: boolean) {
        this.responsabiliteDirectionEncadrementDoctorantService.editResponsabiliteDirectionEncadrementDoctorantDialog= value;
       }
    get viewResponsabiliteDirectionEncadrementDoctorantDialog():boolean {
           return this.responsabiliteDirectionEncadrementDoctorantService.viewResponsabiliteDirectionEncadrementDoctorantDialog;
       }
    set viewResponsabiliteDirectionEncadrementDoctorantDialog(value: boolean) {
        this.responsabiliteDirectionEncadrementDoctorantService.viewResponsabiliteDirectionEncadrementDoctorantDialog = value;
       }
       
     get searchResponsabiliteDirectionEncadrementDoctorant(): ResponsabiliteDirectionEncadrementDoctorantVo {
        return this.responsabiliteDirectionEncadrementDoctorantService.searchResponsabiliteDirectionEncadrementDoctorant;
       }
    set searchResponsabiliteDirectionEncadrementDoctorant(value: ResponsabiliteDirectionEncadrementDoctorantVo) {
        this.responsabiliteDirectionEncadrementDoctorantService.searchResponsabiliteDirectionEncadrementDoctorant = value;
       }



}