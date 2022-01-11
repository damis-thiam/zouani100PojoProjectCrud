import {Component, OnInit} from '@angular/core';
import {TypeEnseignementDispenseService} from '../../../controller/service/TypeEnseignementDispense.service';
import {TypeEnseignementDispenseVo} from '../../../controller/model/TypeEnseignementDispense.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-typeEnseignementDispense-list',
  templateUrl: './typeEnseignementDispense-list.component.html',
  styleUrls: ['./typeEnseignementDispense-list.component.css']
})

export class TypeEnseignementDispenseListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private typeEnseignementDispenseService: TypeEnseignementDispenseService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadTypeEnseignementDispenses();
    } 
    
    // methods 
    public async loadTypeEnseignementDispenses(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("TypeEnseignementDispense", "list");
        isPermistted ? this.typeEnseignementDispenseService.findAll().subscribe(typeEnseignementDispenses => this.typeEnseignementDispenses = typeEnseignementDispenses,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.typeEnseignementDispenseService.findByCriteria(this.searchTypeEnseignementDispense).subscribe(typeEnseignementDispenses=>{
            
            this.typeEnseignementDispenses = typeEnseignementDispenses;
           // this.searchTypeEnseignementDispense = new TypeEnseignementDispenseVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editTypeEnseignementDispense(typeEnseignementDispense:TypeEnseignementDispenseVo){
        const isPermistted = await this.roleService.isPermitted("TypeEnseignementDispense", "edit");
         if(isPermistted){
         this.selectedTypeEnseignementDispense = typeEnseignementDispense;
         this.editTypeEnseignementDispenseDialog = true;
         this.typeEnseignementDispenseService.editTypeEnseignementDispense$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewTypeEnseignementDispense(typeEnseignementDispense:TypeEnseignementDispenseVo){
        const isPermistted = await this.roleService.isPermitted("TypeEnseignementDispense", "view");
        if(isPermistted){
       this.selectedTypeEnseignementDispense = typeEnseignementDispense;
        this.viewTypeEnseignementDispenseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateTypeEnseignementDispense(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedTypeEnseignementDispense = new TypeEnseignementDispenseVo();
        this.createTypeEnseignementDispenseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteTypeEnseignementDispense(typeEnseignementDispense:TypeEnseignementDispenseVo){
       const isPermistted = await this.roleService.isPermitted("TypeEnseignementDispense", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the TypeEnseignementDispense ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeEnseignementDispenseService.delete(typeEnseignementDispense).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeEnseignementDispenses.indexOf(typeEnseignementDispense);
                          position > -1 ? this.typeEnseignementDispenses.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'TypeEnseignementDispense Deleted',
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

    get typeEnseignementDispenses(): Array<TypeEnseignementDispenseVo> {
           return this.typeEnseignementDispenseService.typeEnseignementDispenses;
       }
    set typeEnseignementDispenses(value: Array<TypeEnseignementDispenseVo>) {
        this.typeEnseignementDispenseService.typeEnseignementDispenses = value;
       }

    get typeEnseignementDispenseSelections(): Array<TypeEnseignementDispenseVo> {
           return this.typeEnseignementDispenseService.typeEnseignementDispenseSelections;
       }
    set typeEnseignementDispenseSelections(value: Array<TypeEnseignementDispenseVo>) {
        this.typeEnseignementDispenseService.typeEnseignementDispenseSelections = value;
       }
   
     


    get selectedTypeEnseignementDispense():TypeEnseignementDispenseVo {
           return this.typeEnseignementDispenseService.selectedTypeEnseignementDispense;
       }
    set selectedTypeEnseignementDispense(value: TypeEnseignementDispenseVo) {
        this.typeEnseignementDispenseService.selectedTypeEnseignementDispense = value;
       }
    
    get createTypeEnseignementDispenseDialog():boolean {
           return this.typeEnseignementDispenseService.createTypeEnseignementDispenseDialog;
       }
    set createTypeEnseignementDispenseDialog(value: boolean) {
        this.typeEnseignementDispenseService.createTypeEnseignementDispenseDialog= value;
       }
    
    get editTypeEnseignementDispenseDialog():boolean {
           return this.typeEnseignementDispenseService.editTypeEnseignementDispenseDialog;
       }
    set editTypeEnseignementDispenseDialog(value: boolean) {
        this.typeEnseignementDispenseService.editTypeEnseignementDispenseDialog= value;
       }
    get viewTypeEnseignementDispenseDialog():boolean {
           return this.typeEnseignementDispenseService.viewTypeEnseignementDispenseDialog;
       }
    set viewTypeEnseignementDispenseDialog(value: boolean) {
        this.typeEnseignementDispenseService.viewTypeEnseignementDispenseDialog = value;
       }
       
     get searchTypeEnseignementDispense(): TypeEnseignementDispenseVo {
        return this.typeEnseignementDispenseService.searchTypeEnseignementDispense;
       }
    set searchTypeEnseignementDispense(value: TypeEnseignementDispenseVo) {
        this.typeEnseignementDispenseService.searchTypeEnseignementDispense = value;
       }



}