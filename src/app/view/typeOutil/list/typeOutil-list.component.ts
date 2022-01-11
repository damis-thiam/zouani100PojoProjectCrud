import {Component, OnInit} from '@angular/core';
import {TypeOutilService} from '../../../controller/service/TypeOutil.service';
import {TypeOutilVo} from '../../../controller/model/TypeOutil.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-typeOutil-list',
  templateUrl: './typeOutil-list.component.html',
  styleUrls: ['./typeOutil-list.component.css']
})

export class TypeOutilListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private typeOutilService: TypeOutilService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadTypeOutils();
    } 
    
    // methods 
    public async loadTypeOutils(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("TypeOutil", "list");
        isPermistted ? this.typeOutilService.findAll().subscribe(typeOutils => this.typeOutils = typeOutils,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.typeOutilService.findByCriteria(this.searchTypeOutil).subscribe(typeOutils=>{
            
            this.typeOutils = typeOutils;
           // this.searchTypeOutil = new TypeOutilVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editTypeOutil(typeOutil:TypeOutilVo){
        const isPermistted = await this.roleService.isPermitted("TypeOutil", "edit");
         if(isPermistted){
         this.selectedTypeOutil = typeOutil;
         this.editTypeOutilDialog = true;
         this.typeOutilService.editTypeOutil$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewTypeOutil(typeOutil:TypeOutilVo){
        const isPermistted = await this.roleService.isPermitted("TypeOutil", "view");
        if(isPermistted){
       this.selectedTypeOutil = typeOutil;
        this.viewTypeOutilDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateTypeOutil(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedTypeOutil = new TypeOutilVo();
        this.createTypeOutilDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteTypeOutil(typeOutil:TypeOutilVo){
       const isPermistted = await this.roleService.isPermitted("TypeOutil", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the TypeOutil ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeOutilService.delete(typeOutil).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeOutils.indexOf(typeOutil);
                          position > -1 ? this.typeOutils.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'TypeOutil Deleted',
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

    get typeOutils(): Array<TypeOutilVo> {
           return this.typeOutilService.typeOutils;
       }
    set typeOutils(value: Array<TypeOutilVo>) {
        this.typeOutilService.typeOutils = value;
       }

    get typeOutilSelections(): Array<TypeOutilVo> {
           return this.typeOutilService.typeOutilSelections;
       }
    set typeOutilSelections(value: Array<TypeOutilVo>) {
        this.typeOutilService.typeOutilSelections = value;
       }
   
     


    get selectedTypeOutil():TypeOutilVo {
           return this.typeOutilService.selectedTypeOutil;
       }
    set selectedTypeOutil(value: TypeOutilVo) {
        this.typeOutilService.selectedTypeOutil = value;
       }
    
    get createTypeOutilDialog():boolean {
           return this.typeOutilService.createTypeOutilDialog;
       }
    set createTypeOutilDialog(value: boolean) {
        this.typeOutilService.createTypeOutilDialog= value;
       }
    
    get editTypeOutilDialog():boolean {
           return this.typeOutilService.editTypeOutilDialog;
       }
    set editTypeOutilDialog(value: boolean) {
        this.typeOutilService.editTypeOutilDialog= value;
       }
    get viewTypeOutilDialog():boolean {
           return this.typeOutilService.viewTypeOutilDialog;
       }
    set viewTypeOutilDialog(value: boolean) {
        this.typeOutilService.viewTypeOutilDialog = value;
       }
       
     get searchTypeOutil(): TypeOutilVo {
        return this.typeOutilService.searchTypeOutil;
       }
    set searchTypeOutil(value: TypeOutilVo) {
        this.typeOutilService.searchTypeOutil = value;
       }



}