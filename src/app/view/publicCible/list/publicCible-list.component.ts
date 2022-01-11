import {Component, OnInit} from '@angular/core';
import {PublicCibleService} from '../../../controller/service/PublicCible.service';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-publicCible-list',
  templateUrl: './publicCible-list.component.html',
  styleUrls: ['./publicCible-list.component.css']
})

export class PublicCibleListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private publicCibleService: PublicCibleService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadPublicCibles();
    } 
    
    // methods 
    public async loadPublicCibles(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("PublicCible", "list");
        isPermistted ? this.publicCibleService.findAll().subscribe(publicCibles => this.publicCibles = publicCibles,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.publicCibleService.findByCriteria(this.searchPublicCible).subscribe(publicCibles=>{
            
            this.publicCibles = publicCibles;
           // this.searchPublicCible = new PublicCibleVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editPublicCible(publicCible:PublicCibleVo){
        const isPermistted = await this.roleService.isPermitted("PublicCible", "edit");
         if(isPermistted){
         this.selectedPublicCible = publicCible;
         this.editPublicCibleDialog = true;
         this.publicCibleService.editPublicCible$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewPublicCible(publicCible:PublicCibleVo){
        const isPermistted = await this.roleService.isPermitted("PublicCible", "view");
        if(isPermistted){
       this.selectedPublicCible = publicCible;
        this.viewPublicCibleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreatePublicCible(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedPublicCible = new PublicCibleVo();
        this.createPublicCibleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deletePublicCible(publicCible:PublicCibleVo){
       const isPermistted = await this.roleService.isPermitted("PublicCible", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the PublicCible ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.publicCibleService.delete(publicCible).subscribe(status=>{
                          if(status > 0){
                          const position = this.publicCibles.indexOf(publicCible);
                          position > -1 ? this.publicCibles.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'PublicCible Deleted',
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

    get publicCibles(): Array<PublicCibleVo> {
           return this.publicCibleService.publicCibles;
       }
    set publicCibles(value: Array<PublicCibleVo>) {
        this.publicCibleService.publicCibles = value;
       }

    get publicCibleSelections(): Array<PublicCibleVo> {
           return this.publicCibleService.publicCibleSelections;
       }
    set publicCibleSelections(value: Array<PublicCibleVo>) {
        this.publicCibleService.publicCibleSelections = value;
       }
   
     


    get selectedPublicCible():PublicCibleVo {
           return this.publicCibleService.selectedPublicCible;
       }
    set selectedPublicCible(value: PublicCibleVo) {
        this.publicCibleService.selectedPublicCible = value;
       }
    
    get createPublicCibleDialog():boolean {
           return this.publicCibleService.createPublicCibleDialog;
       }
    set createPublicCibleDialog(value: boolean) {
        this.publicCibleService.createPublicCibleDialog= value;
       }
    
    get editPublicCibleDialog():boolean {
           return this.publicCibleService.editPublicCibleDialog;
       }
    set editPublicCibleDialog(value: boolean) {
        this.publicCibleService.editPublicCibleDialog= value;
       }
    get viewPublicCibleDialog():boolean {
           return this.publicCibleService.viewPublicCibleDialog;
       }
    set viewPublicCibleDialog(value: boolean) {
        this.publicCibleService.viewPublicCibleDialog = value;
       }
       
     get searchPublicCible(): PublicCibleVo {
        return this.publicCibleService.searchPublicCible;
       }
    set searchPublicCible(value: PublicCibleVo) {
        this.publicCibleService.searchPublicCible = value;
       }



}