import {Component, OnInit} from '@angular/core';
import {EntiteAdministrativeService} from '../../../controller/service/EntiteAdministrative.service';
import {EntiteAdministrativeVo} from '../../../controller/model/EntiteAdministrative.model';
import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-entiteAdministrative-list',
  templateUrl: './entiteAdministrative-list.component.html',
  styleUrls: ['./entiteAdministrative-list.component.css']
})

export class EntiteAdministrativeListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private entiteAdministrativeService: EntiteAdministrativeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEntiteAdministratives();
    } 
    
    // methods 
    public async loadEntiteAdministratives(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EntiteAdministrative", "list");
        isPermistted ? this.entiteAdministrativeService.findAll().subscribe(entiteAdministratives => this.entiteAdministratives = entiteAdministratives,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.entiteAdministrativeService.findByCriteria(this.searchEntiteAdministrative).subscribe(entiteAdministratives=>{
            
            this.entiteAdministratives = entiteAdministratives;
           // this.searchEntiteAdministrative = new EntiteAdministrativeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
                {field: 'description', header: 'description'},
                {field: 'entiteAdministrativeSuperieure', header: 'entiteAdministrativeSuperieure'},
                {field: 'typeEntiteAdministrative', header: 'typeEntiteAdministrative'},
        ];
    }
    
    public async editEntiteAdministrative(entiteAdministrative:EntiteAdministrativeVo){
        const isPermistted = await this.roleService.isPermitted("EntiteAdministrative", "edit");
         if(isPermistted){
         this.selectedEntiteAdministrative = entiteAdministrative;
         this.editEntiteAdministrativeDialog = true;
         this.entiteAdministrativeService.editEntiteAdministrative$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEntiteAdministrative(entiteAdministrative:EntiteAdministrativeVo){
        const isPermistted = await this.roleService.isPermitted("EntiteAdministrative", "view");
        if(isPermistted){
       this.selectedEntiteAdministrative = entiteAdministrative;
        this.viewEntiteAdministrativeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEntiteAdministrative(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEntiteAdministrative = new EntiteAdministrativeVo();
        this.createEntiteAdministrativeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEntiteAdministrative(entiteAdministrative:EntiteAdministrativeVo){
       const isPermistted = await this.roleService.isPermitted("EntiteAdministrative", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EntiteAdministrative ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.entiteAdministrativeService.delete(entiteAdministrative).subscribe(status=>{
                          if(status > 0){
                          const position = this.entiteAdministratives.indexOf(entiteAdministrative);
                          position > -1 ? this.entiteAdministratives.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EntiteAdministrative Deleted',
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

    get entiteAdministratives(): Array<EntiteAdministrativeVo> {
           return this.entiteAdministrativeService.entiteAdministratives;
       }
    set entiteAdministratives(value: Array<EntiteAdministrativeVo>) {
        this.entiteAdministrativeService.entiteAdministratives = value;
       }

    get entiteAdministrativeSelections(): Array<EntiteAdministrativeVo> {
           return this.entiteAdministrativeService.entiteAdministrativeSelections;
       }
    set entiteAdministrativeSelections(value: Array<EntiteAdministrativeVo>) {
        this.entiteAdministrativeService.entiteAdministrativeSelections = value;
       }
   
     


    get selectedEntiteAdministrative():EntiteAdministrativeVo {
           return this.entiteAdministrativeService.selectedEntiteAdministrative;
       }
    set selectedEntiteAdministrative(value: EntiteAdministrativeVo) {
        this.entiteAdministrativeService.selectedEntiteAdministrative = value;
       }
    
    get createEntiteAdministrativeDialog():boolean {
           return this.entiteAdministrativeService.createEntiteAdministrativeDialog;
       }
    set createEntiteAdministrativeDialog(value: boolean) {
        this.entiteAdministrativeService.createEntiteAdministrativeDialog= value;
       }
    
    get editEntiteAdministrativeDialog():boolean {
           return this.entiteAdministrativeService.editEntiteAdministrativeDialog;
       }
    set editEntiteAdministrativeDialog(value: boolean) {
        this.entiteAdministrativeService.editEntiteAdministrativeDialog= value;
       }
    get viewEntiteAdministrativeDialog():boolean {
           return this.entiteAdministrativeService.viewEntiteAdministrativeDialog;
       }
    set viewEntiteAdministrativeDialog(value: boolean) {
        this.entiteAdministrativeService.viewEntiteAdministrativeDialog = value;
       }
       
     get searchEntiteAdministrative(): EntiteAdministrativeVo {
        return this.entiteAdministrativeService.searchEntiteAdministrative;
       }
    set searchEntiteAdministrative(value: EntiteAdministrativeVo) {
        this.entiteAdministrativeService.searchEntiteAdministrative = value;
       }



}