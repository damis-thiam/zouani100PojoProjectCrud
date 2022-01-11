import {Component, OnInit} from '@angular/core';
import {TypeParticipationService} from '../../../controller/service/TypeParticipation.service';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-typeParticipation-list',
  templateUrl: './typeParticipation-list.component.html',
  styleUrls: ['./typeParticipation-list.component.css']
})

export class TypeParticipationListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private typeParticipationService: TypeParticipationService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadTypeParticipations();
    } 
    
    // methods 
    public async loadTypeParticipations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("TypeParticipation", "list");
        isPermistted ? this.typeParticipationService.findAll().subscribe(typeParticipations => this.typeParticipations = typeParticipations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.typeParticipationService.findByCriteria(this.searchTypeParticipation).subscribe(typeParticipations=>{
            
            this.typeParticipations = typeParticipations;
           // this.searchTypeParticipation = new TypeParticipationVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editTypeParticipation(typeParticipation:TypeParticipationVo){
        const isPermistted = await this.roleService.isPermitted("TypeParticipation", "edit");
         if(isPermistted){
         this.selectedTypeParticipation = typeParticipation;
         this.editTypeParticipationDialog = true;
         this.typeParticipationService.editTypeParticipation$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewTypeParticipation(typeParticipation:TypeParticipationVo){
        const isPermistted = await this.roleService.isPermitted("TypeParticipation", "view");
        if(isPermistted){
       this.selectedTypeParticipation = typeParticipation;
        this.viewTypeParticipationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateTypeParticipation(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedTypeParticipation = new TypeParticipationVo();
        this.createTypeParticipationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteTypeParticipation(typeParticipation:TypeParticipationVo){
       const isPermistted = await this.roleService.isPermitted("TypeParticipation", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the TypeParticipation ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.typeParticipationService.delete(typeParticipation).subscribe(status=>{
                          if(status > 0){
                          const position = this.typeParticipations.indexOf(typeParticipation);
                          position > -1 ? this.typeParticipations.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'TypeParticipation Deleted',
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

    get typeParticipations(): Array<TypeParticipationVo> {
           return this.typeParticipationService.typeParticipations;
       }
    set typeParticipations(value: Array<TypeParticipationVo>) {
        this.typeParticipationService.typeParticipations = value;
       }

    get typeParticipationSelections(): Array<TypeParticipationVo> {
           return this.typeParticipationService.typeParticipationSelections;
       }
    set typeParticipationSelections(value: Array<TypeParticipationVo>) {
        this.typeParticipationService.typeParticipationSelections = value;
       }
   
     


    get selectedTypeParticipation():TypeParticipationVo {
           return this.typeParticipationService.selectedTypeParticipation;
       }
    set selectedTypeParticipation(value: TypeParticipationVo) {
        this.typeParticipationService.selectedTypeParticipation = value;
       }
    
    get createTypeParticipationDialog():boolean {
           return this.typeParticipationService.createTypeParticipationDialog;
       }
    set createTypeParticipationDialog(value: boolean) {
        this.typeParticipationService.createTypeParticipationDialog= value;
       }
    
    get editTypeParticipationDialog():boolean {
           return this.typeParticipationService.editTypeParticipationDialog;
       }
    set editTypeParticipationDialog(value: boolean) {
        this.typeParticipationService.editTypeParticipationDialog= value;
       }
    get viewTypeParticipationDialog():boolean {
           return this.typeParticipationService.viewTypeParticipationDialog;
       }
    set viewTypeParticipationDialog(value: boolean) {
        this.typeParticipationService.viewTypeParticipationDialog = value;
       }
       
     get searchTypeParticipation(): TypeParticipationVo {
        return this.typeParticipationService.searchTypeParticipation;
       }
    set searchTypeParticipation(value: TypeParticipationVo) {
        this.typeParticipationService.searchTypeParticipation = value;
       }



}