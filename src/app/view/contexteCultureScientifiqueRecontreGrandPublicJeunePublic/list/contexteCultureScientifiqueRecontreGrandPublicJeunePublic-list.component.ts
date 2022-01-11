import {Component, OnInit} from '@angular/core';
import {ContexteCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/ContexteCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {ContexteVo} from '../../../controller/model/Contexte.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-contexteCultureScientifiqueRecontreGrandPublicJeunePublic-list',
  templateUrl: './contexteCultureScientifiqueRecontreGrandPublicJeunePublic-list.component.html',
  styleUrls: ['./contexteCultureScientifiqueRecontreGrandPublicJeunePublic-list.component.css']
})

export class ContexteCultureScientifiqueRecontreGrandPublicJeunePublicListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private contexteCultureScientifiqueRecontreGrandPublicJeunePublicService: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadContexteCultureScientifiqueRecontreGrandPublicJeunePublics();
    } 
    
    // methods 
    public async loadContexteCultureScientifiqueRecontreGrandPublicJeunePublics(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ContexteCultureScientifiqueRecontreGrandPublicJeunePublic", "list");
        isPermistted ? this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.findAll().subscribe(contexteCultureScientifiqueRecontreGrandPublicJeunePublics => this.contexteCultureScientifiqueRecontreGrandPublicJeunePublics = contexteCultureScientifiqueRecontreGrandPublicJeunePublics,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.findByCriteria(this.searchContexteCultureScientifiqueRecontreGrandPublicJeunePublic).subscribe(contexteCultureScientifiqueRecontreGrandPublicJeunePublics=>{
            
            this.contexteCultureScientifiqueRecontreGrandPublicJeunePublics = contexteCultureScientifiqueRecontreGrandPublicJeunePublics;
           // this.searchContexteCultureScientifiqueRecontreGrandPublicJeunePublic = new ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'cultureScientifiqueRecontreGrandPublicJeunePublic', header: 'cultureScientifiqueRecontreGrandPublicJeunePublic'},
                {field: 'contexte', header: 'contexte'},
        ];
    }
    
    public async editContexteCultureScientifiqueRecontreGrandPublicJeunePublic(contexteCultureScientifiqueRecontreGrandPublicJeunePublic:ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo){
        const isPermistted = await this.roleService.isPermitted("ContexteCultureScientifiqueRecontreGrandPublicJeunePublic", "edit");
         if(isPermistted){
         this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = contexteCultureScientifiqueRecontreGrandPublicJeunePublic;
         this.editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
         this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.editContexteCultureScientifiqueRecontreGrandPublicJeunePublic$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewContexteCultureScientifiqueRecontreGrandPublicJeunePublic(contexteCultureScientifiqueRecontreGrandPublicJeunePublic:ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo){
        const isPermistted = await this.roleService.isPermitted("ContexteCultureScientifiqueRecontreGrandPublicJeunePublic", "view");
        if(isPermistted){
       this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = contexteCultureScientifiqueRecontreGrandPublicJeunePublic;
        this.viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateContexteCultureScientifiqueRecontreGrandPublicJeunePublic(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = new ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        this.createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteContexteCultureScientifiqueRecontreGrandPublicJeunePublic(contexteCultureScientifiqueRecontreGrandPublicJeunePublic:ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo){
       const isPermistted = await this.roleService.isPermitted("ContexteCultureScientifiqueRecontreGrandPublicJeunePublic", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ContexteCultureScientifiqueRecontreGrandPublicJeunePublic ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.delete(contexteCultureScientifiqueRecontreGrandPublicJeunePublic).subscribe(status=>{
                          if(status > 0){
                          const position = this.contexteCultureScientifiqueRecontreGrandPublicJeunePublics.indexOf(contexteCultureScientifiqueRecontreGrandPublicJeunePublic);
                          position > -1 ? this.contexteCultureScientifiqueRecontreGrandPublicJeunePublics.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ContexteCultureScientifiqueRecontreGrandPublicJeunePublic Deleted',
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

    get contexteCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
           return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.contexteCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
    set contexteCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.contexteCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       }

    get contexteCultureScientifiqueRecontreGrandPublicJeunePublicSelections(): Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
           return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.contexteCultureScientifiqueRecontreGrandPublicJeunePublicSelections;
       }
    set contexteCultureScientifiqueRecontreGrandPublicJeunePublicSelections(value: Array<ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.contexteCultureScientifiqueRecontreGrandPublicJeunePublicSelections = value;
       }
   
     


    get selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic():ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic(value: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedContexteCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
    
    get createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.createContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }
    
    get editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.editContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }
    get viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.viewContexteCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }
       
     get searchContexteCultureScientifiqueRecontreGrandPublicJeunePublic(): ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo {
        return this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.searchContexteCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set searchContexteCultureScientifiqueRecontreGrandPublicJeunePublic(value: ContexteCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.contexteCultureScientifiqueRecontreGrandPublicJeunePublicService.searchContexteCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }



}