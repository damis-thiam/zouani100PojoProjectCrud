import {Component, OnInit} from '@angular/core';
import {ContexteService} from '../../../controller/service/Contexte.service';
import {ContexteVo} from '../../../controller/model/Contexte.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-contexte-list',
  templateUrl: './contexte-list.component.html',
  styleUrls: ['./contexte-list.component.css']
})

export class ContexteListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private contexteService: ContexteService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadContextes();
    } 
    
    // methods 
    public async loadContextes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Contexte", "list");
        isPermistted ? this.contexteService.findAll().subscribe(contextes => this.contextes = contextes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.contexteService.findByCriteria(this.searchContexte).subscribe(contextes=>{
            
            this.contextes = contextes;
           // this.searchContexte = new ContexteVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editContexte(contexte:ContexteVo){
        const isPermistted = await this.roleService.isPermitted("Contexte", "edit");
         if(isPermistted){
         this.selectedContexte = contexte;
         this.editContexteDialog = true;
         this.contexteService.editContexte$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewContexte(contexte:ContexteVo){
        const isPermistted = await this.roleService.isPermitted("Contexte", "view");
        if(isPermistted){
       this.selectedContexte = contexte;
        this.viewContexteDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateContexte(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedContexte = new ContexteVo();
        this.createContexteDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteContexte(contexte:ContexteVo){
       const isPermistted = await this.roleService.isPermitted("Contexte", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Contexte ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.contexteService.delete(contexte).subscribe(status=>{
                          if(status > 0){
                          const position = this.contextes.indexOf(contexte);
                          position > -1 ? this.contextes.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Contexte Deleted',
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

    get contextes(): Array<ContexteVo> {
           return this.contexteService.contextes;
       }
    set contextes(value: Array<ContexteVo>) {
        this.contexteService.contextes = value;
       }

    get contexteSelections(): Array<ContexteVo> {
           return this.contexteService.contexteSelections;
       }
    set contexteSelections(value: Array<ContexteVo>) {
        this.contexteService.contexteSelections = value;
       }
   
     


    get selectedContexte():ContexteVo {
           return this.contexteService.selectedContexte;
       }
    set selectedContexte(value: ContexteVo) {
        this.contexteService.selectedContexte = value;
       }
    
    get createContexteDialog():boolean {
           return this.contexteService.createContexteDialog;
       }
    set createContexteDialog(value: boolean) {
        this.contexteService.createContexteDialog= value;
       }
    
    get editContexteDialog():boolean {
           return this.contexteService.editContexteDialog;
       }
    set editContexteDialog(value: boolean) {
        this.contexteService.editContexteDialog= value;
       }
    get viewContexteDialog():boolean {
           return this.contexteService.viewContexteDialog;
       }
    set viewContexteDialog(value: boolean) {
        this.contexteService.viewContexteDialog = value;
       }
       
     get searchContexte(): ContexteVo {
        return this.contexteService.searchContexte;
       }
    set searchContexte(value: ContexteVo) {
        this.contexteService.searchContexte = value;
       }



}