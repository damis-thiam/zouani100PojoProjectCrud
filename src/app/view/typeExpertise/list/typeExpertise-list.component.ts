import {Component, OnInit} from '@angular/core';
import {TypeExpertiseService} from '../../../controller/service/TypeExpertise.service';
import {TypeExpertiseVo} from '../../../controller/model/TypeExpertise.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-typeExpertise-list',
  templateUrl: './typeExpertise-list.component.html',
  styleUrls: ['./typeExpertise-list.component.css']
})

export class TypeExpertiseListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private typeExpertiseService: TypeExpertiseService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadTypeExpertises();
    } 
    
    // methods 
    public async loadTypeExpertises(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("TypeExpertise", "list");
        isPermistted ? this.typeExpertiseService.findAll().subscribe(typeExpertises => this.typeExpertises = typeExpertises,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.typeExpertiseService.findByCriteria(this.searchTypeExpertise).subscribe(typeExpertises=>{
            
            this.typeExpertises = typeExpertises;
           // this.searchTypeExpertise = new TypeExpertiseVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editTypeExpertise(typeExpertise:TypeExpertiseVo){
        const isPermistted = await this.roleService.isPermitted("TypeExpertise", "edit");
         if(isPermistted){
         this.selectedTypeExpertise = typeExpertise;
         this.editTypeExpertiseDialog = true;
         this.typeExpertiseService.editTypeExpertise$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewTypeExpertise(typeExpertise:TypeExpertiseVo){
        const isPermistted = await this.roleService.isPermitted("TypeExpertise", "view");
        if(isPermistted){
       this.selectedTypeExpertise = typeExpertise;
        this.viewTypeExpertiseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateTypeExpertise(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedTypeExpertise = new TypeExpertiseVo();
        this.createTypeExpertiseDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteTypeExpertise(typeExpertise:TypeExpertiseVo){
       const isPermistted = await this.roleService.isPermitted("TypeExpertise", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the TypeExpertise ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeExpertiseService.delete(typeExpertise).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeExpertises.indexOf(typeExpertise);
                          position > -1 ? this.typeExpertises.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'TypeExpertise Deleted',
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

    get typeExpertises(): Array<TypeExpertiseVo> {
           return this.typeExpertiseService.typeExpertises;
       }
    set typeExpertises(value: Array<TypeExpertiseVo>) {
        this.typeExpertiseService.typeExpertises = value;
       }

    get typeExpertiseSelections(): Array<TypeExpertiseVo> {
           return this.typeExpertiseService.typeExpertiseSelections;
       }
    set typeExpertiseSelections(value: Array<TypeExpertiseVo>) {
        this.typeExpertiseService.typeExpertiseSelections = value;
       }
   
     


    get selectedTypeExpertise():TypeExpertiseVo {
           return this.typeExpertiseService.selectedTypeExpertise;
       }
    set selectedTypeExpertise(value: TypeExpertiseVo) {
        this.typeExpertiseService.selectedTypeExpertise = value;
       }
    
    get createTypeExpertiseDialog():boolean {
           return this.typeExpertiseService.createTypeExpertiseDialog;
       }
    set createTypeExpertiseDialog(value: boolean) {
        this.typeExpertiseService.createTypeExpertiseDialog= value;
       }
    
    get editTypeExpertiseDialog():boolean {
           return this.typeExpertiseService.editTypeExpertiseDialog;
       }
    set editTypeExpertiseDialog(value: boolean) {
        this.typeExpertiseService.editTypeExpertiseDialog= value;
       }
    get viewTypeExpertiseDialog():boolean {
           return this.typeExpertiseService.viewTypeExpertiseDialog;
       }
    set viewTypeExpertiseDialog(value: boolean) {
        this.typeExpertiseService.viewTypeExpertiseDialog = value;
       }
       
     get searchTypeExpertise(): TypeExpertiseVo {
        return this.typeExpertiseService.searchTypeExpertise;
       }
    set searchTypeExpertise(value: TypeExpertiseVo) {
        this.typeExpertiseService.searchTypeExpertise = value;
       }



}