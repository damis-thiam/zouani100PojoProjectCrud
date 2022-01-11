import {Component, OnInit} from '@angular/core';
import {TypeEntiteAdministrativeService} from '../../../controller/service/TypeEntiteAdministrative.service';
import {TypeEntiteAdministrativeVo} from '../../../controller/model/TypeEntiteAdministrative.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-typeEntiteAdministrative-list',
  templateUrl: './typeEntiteAdministrative-list.component.html',
  styleUrls: ['./typeEntiteAdministrative-list.component.css']
})

export class TypeEntiteAdministrativeListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private typeEntiteAdministrativeService: TypeEntiteAdministrativeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadTypeEntiteAdministratives();
    } 
    
    // methods 
    public async loadTypeEntiteAdministratives(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("TypeEntiteAdministrative", "list");
        isPermistted ? this.typeEntiteAdministrativeService.findAll().subscribe(typeEntiteAdministratives => this.typeEntiteAdministratives = typeEntiteAdministratives,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.typeEntiteAdministrativeService.findByCriteria(this.searchTypeEntiteAdministrative).subscribe(typeEntiteAdministratives=>{
            
            this.typeEntiteAdministratives = typeEntiteAdministratives;
           // this.searchTypeEntiteAdministrative = new TypeEntiteAdministrativeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editTypeEntiteAdministrative(typeEntiteAdministrative:TypeEntiteAdministrativeVo){
        const isPermistted = await this.roleService.isPermitted("TypeEntiteAdministrative", "edit");
         if(isPermistted){
         this.selectedTypeEntiteAdministrative = typeEntiteAdministrative;
         this.editTypeEntiteAdministrativeDialog = true;
         this.typeEntiteAdministrativeService.editTypeEntiteAdministrative$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewTypeEntiteAdministrative(typeEntiteAdministrative:TypeEntiteAdministrativeVo){
        const isPermistted = await this.roleService.isPermitted("TypeEntiteAdministrative", "view");
        if(isPermistted){
       this.selectedTypeEntiteAdministrative = typeEntiteAdministrative;
        this.viewTypeEntiteAdministrativeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateTypeEntiteAdministrative(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedTypeEntiteAdministrative = new TypeEntiteAdministrativeVo();
        this.createTypeEntiteAdministrativeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteTypeEntiteAdministrative(typeEntiteAdministrative:TypeEntiteAdministrativeVo){
       const isPermistted = await this.roleService.isPermitted("TypeEntiteAdministrative", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the TypeEntiteAdministrative ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeEntiteAdministrativeService.delete(typeEntiteAdministrative).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeEntiteAdministratives.indexOf(typeEntiteAdministrative);
                          position > -1 ? this.typeEntiteAdministratives.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'TypeEntiteAdministrative Deleted',
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

    get typeEntiteAdministratives(): Array<TypeEntiteAdministrativeVo> {
           return this.typeEntiteAdministrativeService.typeEntiteAdministratives;
       }
    set typeEntiteAdministratives(value: Array<TypeEntiteAdministrativeVo>) {
        this.typeEntiteAdministrativeService.typeEntiteAdministratives = value;
       }

    get typeEntiteAdministrativeSelections(): Array<TypeEntiteAdministrativeVo> {
           return this.typeEntiteAdministrativeService.typeEntiteAdministrativeSelections;
       }
    set typeEntiteAdministrativeSelections(value: Array<TypeEntiteAdministrativeVo>) {
        this.typeEntiteAdministrativeService.typeEntiteAdministrativeSelections = value;
       }
   
     


    get selectedTypeEntiteAdministrative():TypeEntiteAdministrativeVo {
           return this.typeEntiteAdministrativeService.selectedTypeEntiteAdministrative;
       }
    set selectedTypeEntiteAdministrative(value: TypeEntiteAdministrativeVo) {
        this.typeEntiteAdministrativeService.selectedTypeEntiteAdministrative = value;
       }
    
    get createTypeEntiteAdministrativeDialog():boolean {
           return this.typeEntiteAdministrativeService.createTypeEntiteAdministrativeDialog;
       }
    set createTypeEntiteAdministrativeDialog(value: boolean) {
        this.typeEntiteAdministrativeService.createTypeEntiteAdministrativeDialog= value;
       }
    
    get editTypeEntiteAdministrativeDialog():boolean {
           return this.typeEntiteAdministrativeService.editTypeEntiteAdministrativeDialog;
       }
    set editTypeEntiteAdministrativeDialog(value: boolean) {
        this.typeEntiteAdministrativeService.editTypeEntiteAdministrativeDialog= value;
       }
    get viewTypeEntiteAdministrativeDialog():boolean {
           return this.typeEntiteAdministrativeService.viewTypeEntiteAdministrativeDialog;
       }
    set viewTypeEntiteAdministrativeDialog(value: boolean) {
        this.typeEntiteAdministrativeService.viewTypeEntiteAdministrativeDialog = value;
       }
       
     get searchTypeEntiteAdministrative(): TypeEntiteAdministrativeVo {
        return this.typeEntiteAdministrativeService.searchTypeEntiteAdministrative;
       }
    set searchTypeEntiteAdministrative(value: TypeEntiteAdministrativeVo) {
        this.typeEntiteAdministrativeService.searchTypeEntiteAdministrative = value;
       }



}