import {Component, OnInit} from '@angular/core';
import {TypeInstanceService} from '../../../controller/service/TypeInstance.service';
import {TypeInstanceVo} from '../../../controller/model/TypeInstance.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-typeInstance-list',
  templateUrl: './typeInstance-list.component.html',
  styleUrls: ['./typeInstance-list.component.css']
})

export class TypeInstanceListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private typeInstanceService: TypeInstanceService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadTypeInstances();
    } 
    
    // methods 
    public async loadTypeInstances(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("TypeInstance", "list");
        isPermistted ? this.typeInstanceService.findAll().subscribe(typeInstances => this.typeInstances = typeInstances,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.typeInstanceService.findByCriteria(this.searchTypeInstance).subscribe(typeInstances=>{
            
            this.typeInstances = typeInstances;
           // this.searchTypeInstance = new TypeInstanceVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'code', header: 'code'},
                {field: 'libelle', header: 'libelle'},
        ];
    }
    
    public async editTypeInstance(typeInstance:TypeInstanceVo){
        const isPermistted = await this.roleService.isPermitted("TypeInstance", "edit");
         if(isPermistted){
         this.selectedTypeInstance = typeInstance;
         this.editTypeInstanceDialog = true;
         this.typeInstanceService.editTypeInstance$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewTypeInstance(typeInstance:TypeInstanceVo){
        const isPermistted = await this.roleService.isPermitted("TypeInstance", "view");
        if(isPermistted){
       this.selectedTypeInstance = typeInstance;
        this.viewTypeInstanceDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateTypeInstance(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedTypeInstance = new TypeInstanceVo();
        this.createTypeInstanceDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteTypeInstance(typeInstance:TypeInstanceVo){
       const isPermistted = await this.roleService.isPermitted("TypeInstance", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the TypeInstance ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeInstanceService.delete(typeInstance).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeInstances.indexOf(typeInstance);
                          position > -1 ? this.typeInstances.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'TypeInstance Deleted',
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

    get typeInstances(): Array<TypeInstanceVo> {
           return this.typeInstanceService.typeInstances;
       }
    set typeInstances(value: Array<TypeInstanceVo>) {
        this.typeInstanceService.typeInstances = value;
       }

    get typeInstanceSelections(): Array<TypeInstanceVo> {
           return this.typeInstanceService.typeInstanceSelections;
       }
    set typeInstanceSelections(value: Array<TypeInstanceVo>) {
        this.typeInstanceService.typeInstanceSelections = value;
       }
   
     


    get selectedTypeInstance():TypeInstanceVo {
           return this.typeInstanceService.selectedTypeInstance;
       }
    set selectedTypeInstance(value: TypeInstanceVo) {
        this.typeInstanceService.selectedTypeInstance = value;
       }
    
    get createTypeInstanceDialog():boolean {
           return this.typeInstanceService.createTypeInstanceDialog;
       }
    set createTypeInstanceDialog(value: boolean) {
        this.typeInstanceService.createTypeInstanceDialog= value;
       }
    
    get editTypeInstanceDialog():boolean {
           return this.typeInstanceService.editTypeInstanceDialog;
       }
    set editTypeInstanceDialog(value: boolean) {
        this.typeInstanceService.editTypeInstanceDialog= value;
       }
    get viewTypeInstanceDialog():boolean {
           return this.typeInstanceService.viewTypeInstanceDialog;
       }
    set viewTypeInstanceDialog(value: boolean) {
        this.typeInstanceService.viewTypeInstanceDialog = value;
       }
       
     get searchTypeInstance(): TypeInstanceVo {
        return this.typeInstanceService.searchTypeInstance;
       }
    set searchTypeInstance(value: TypeInstanceVo) {
        this.typeInstanceService.searchTypeInstance = value;
       }



}