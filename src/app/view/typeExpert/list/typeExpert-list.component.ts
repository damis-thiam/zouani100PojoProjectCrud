import {Component, OnInit} from '@angular/core';
import {TypeExpertService} from '../../../controller/service/TypeExpert.service';
import {TypeExpertVo} from '../../../controller/model/TypeExpert.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-typeExpert-list',
  templateUrl: './typeExpert-list.component.html',
  styleUrls: ['./typeExpert-list.component.css']
})

export class TypeExpertListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private typeExpertService: TypeExpertService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadTypeExperts();
    } 
    
    // methods 
    public async loadTypeExperts(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("TypeExpert", "list");
        isPermistted ? this.typeExpertService.findAll().subscribe(typeExperts => this.typeExperts = typeExperts,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.typeExpertService.findByCriteria(this.searchTypeExpert).subscribe(typeExperts=>{
            
            this.typeExperts = typeExperts;
           // this.searchTypeExpert = new TypeExpertVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editTypeExpert(typeExpert:TypeExpertVo){
        const isPermistted = await this.roleService.isPermitted("TypeExpert", "edit");
         if(isPermistted){
         this.selectedTypeExpert = typeExpert;
         this.editTypeExpertDialog = true;
         this.typeExpertService.editTypeExpert$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewTypeExpert(typeExpert:TypeExpertVo){
        const isPermistted = await this.roleService.isPermitted("TypeExpert", "view");
        if(isPermistted){
       this.selectedTypeExpert = typeExpert;
        this.viewTypeExpertDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateTypeExpert(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedTypeExpert = new TypeExpertVo();
        this.createTypeExpertDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteTypeExpert(typeExpert:TypeExpertVo){
       const isPermistted = await this.roleService.isPermitted("TypeExpert", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the TypeExpert ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeExpertService.delete(typeExpert).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeExperts.indexOf(typeExpert);
                          position > -1 ? this.typeExperts.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'TypeExpert Deleted',
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

    get typeExperts(): Array<TypeExpertVo> {
           return this.typeExpertService.typeExperts;
       }
    set typeExperts(value: Array<TypeExpertVo>) {
        this.typeExpertService.typeExperts = value;
       }

    get typeExpertSelections(): Array<TypeExpertVo> {
           return this.typeExpertService.typeExpertSelections;
       }
    set typeExpertSelections(value: Array<TypeExpertVo>) {
        this.typeExpertService.typeExpertSelections = value;
       }
   
     


    get selectedTypeExpert():TypeExpertVo {
           return this.typeExpertService.selectedTypeExpert;
       }
    set selectedTypeExpert(value: TypeExpertVo) {
        this.typeExpertService.selectedTypeExpert = value;
       }
    
    get createTypeExpertDialog():boolean {
           return this.typeExpertService.createTypeExpertDialog;
       }
    set createTypeExpertDialog(value: boolean) {
        this.typeExpertService.createTypeExpertDialog= value;
       }
    
    get editTypeExpertDialog():boolean {
           return this.typeExpertService.editTypeExpertDialog;
       }
    set editTypeExpertDialog(value: boolean) {
        this.typeExpertService.editTypeExpertDialog= value;
       }
    get viewTypeExpertDialog():boolean {
           return this.typeExpertService.viewTypeExpertDialog;
       }
    set viewTypeExpertDialog(value: boolean) {
        this.typeExpertService.viewTypeExpertDialog = value;
       }
       
     get searchTypeExpert(): TypeExpertVo {
        return this.typeExpertService.searchTypeExpert;
       }
    set searchTypeExpert(value: TypeExpertVo) {
        this.typeExpertService.searchTypeExpert = value;
       }



}