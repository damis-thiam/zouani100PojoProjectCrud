import {Component, OnInit} from '@angular/core';
import {ResponsabiliteEncadrementEtudiantService} from '../../../controller/service/ResponsabiliteEncadrementEtudiant.service';
import {ResponsabiliteEncadrementEtudiantVo} from '../../../controller/model/ResponsabiliteEncadrementEtudiant.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-responsabiliteEncadrementEtudiant-list',
  templateUrl: './responsabiliteEncadrementEtudiant-list.component.html',
  styleUrls: ['./responsabiliteEncadrementEtudiant-list.component.css']
})

export class ResponsabiliteEncadrementEtudiantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private responsabiliteEncadrementEtudiantService: ResponsabiliteEncadrementEtudiantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadResponsabiliteEncadrementEtudiants();
    } 
    
    // methods 
    public async loadResponsabiliteEncadrementEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ResponsabiliteEncadrementEtudiant", "list");
        isPermistted ? this.responsabiliteEncadrementEtudiantService.findAll().subscribe(responsabiliteEncadrementEtudiants => this.responsabiliteEncadrementEtudiants = responsabiliteEncadrementEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.responsabiliteEncadrementEtudiantService.findByCriteria(this.searchResponsabiliteEncadrementEtudiant).subscribe(responsabiliteEncadrementEtudiants=>{
            
            this.responsabiliteEncadrementEtudiants = responsabiliteEncadrementEtudiants;
           // this.searchResponsabiliteEncadrementEtudiant = new ResponsabiliteEncadrementEtudiantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editResponsabiliteEncadrementEtudiant(responsabiliteEncadrementEtudiant:ResponsabiliteEncadrementEtudiantVo){
        const isPermistted = await this.roleService.isPermitted("ResponsabiliteEncadrementEtudiant", "edit");
         if(isPermistted){
         this.selectedResponsabiliteEncadrementEtudiant = responsabiliteEncadrementEtudiant;
         this.editResponsabiliteEncadrementEtudiantDialog = true;
         this.responsabiliteEncadrementEtudiantService.editResponsabiliteEncadrementEtudiant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewResponsabiliteEncadrementEtudiant(responsabiliteEncadrementEtudiant:ResponsabiliteEncadrementEtudiantVo){
        const isPermistted = await this.roleService.isPermitted("ResponsabiliteEncadrementEtudiant", "view");
        if(isPermistted){
       this.selectedResponsabiliteEncadrementEtudiant = responsabiliteEncadrementEtudiant;
        this.viewResponsabiliteEncadrementEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateResponsabiliteEncadrementEtudiant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedResponsabiliteEncadrementEtudiant = new ResponsabiliteEncadrementEtudiantVo();
        this.createResponsabiliteEncadrementEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteResponsabiliteEncadrementEtudiant(responsabiliteEncadrementEtudiant:ResponsabiliteEncadrementEtudiantVo){
       const isPermistted = await this.roleService.isPermitted("ResponsabiliteEncadrementEtudiant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ResponsabiliteEncadrementEtudiant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.responsabiliteEncadrementEtudiantService.delete(responsabiliteEncadrementEtudiant).subscribe(status=>{
                          if(status > 0){
                          const position = this.responsabiliteEncadrementEtudiants.indexOf(responsabiliteEncadrementEtudiant);
                          position > -1 ? this.responsabiliteEncadrementEtudiants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ResponsabiliteEncadrementEtudiant Deleted',
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

    get responsabiliteEncadrementEtudiants(): Array<ResponsabiliteEncadrementEtudiantVo> {
           return this.responsabiliteEncadrementEtudiantService.responsabiliteEncadrementEtudiants;
       }
    set responsabiliteEncadrementEtudiants(value: Array<ResponsabiliteEncadrementEtudiantVo>) {
        this.responsabiliteEncadrementEtudiantService.responsabiliteEncadrementEtudiants = value;
       }

    get responsabiliteEncadrementEtudiantSelections(): Array<ResponsabiliteEncadrementEtudiantVo> {
           return this.responsabiliteEncadrementEtudiantService.responsabiliteEncadrementEtudiantSelections;
       }
    set responsabiliteEncadrementEtudiantSelections(value: Array<ResponsabiliteEncadrementEtudiantVo>) {
        this.responsabiliteEncadrementEtudiantService.responsabiliteEncadrementEtudiantSelections = value;
       }
   
     


    get selectedResponsabiliteEncadrementEtudiant():ResponsabiliteEncadrementEtudiantVo {
           return this.responsabiliteEncadrementEtudiantService.selectedResponsabiliteEncadrementEtudiant;
       }
    set selectedResponsabiliteEncadrementEtudiant(value: ResponsabiliteEncadrementEtudiantVo) {
        this.responsabiliteEncadrementEtudiantService.selectedResponsabiliteEncadrementEtudiant = value;
       }
    
    get createResponsabiliteEncadrementEtudiantDialog():boolean {
           return this.responsabiliteEncadrementEtudiantService.createResponsabiliteEncadrementEtudiantDialog;
       }
    set createResponsabiliteEncadrementEtudiantDialog(value: boolean) {
        this.responsabiliteEncadrementEtudiantService.createResponsabiliteEncadrementEtudiantDialog= value;
       }
    
    get editResponsabiliteEncadrementEtudiantDialog():boolean {
           return this.responsabiliteEncadrementEtudiantService.editResponsabiliteEncadrementEtudiantDialog;
       }
    set editResponsabiliteEncadrementEtudiantDialog(value: boolean) {
        this.responsabiliteEncadrementEtudiantService.editResponsabiliteEncadrementEtudiantDialog= value;
       }
    get viewResponsabiliteEncadrementEtudiantDialog():boolean {
           return this.responsabiliteEncadrementEtudiantService.viewResponsabiliteEncadrementEtudiantDialog;
       }
    set viewResponsabiliteEncadrementEtudiantDialog(value: boolean) {
        this.responsabiliteEncadrementEtudiantService.viewResponsabiliteEncadrementEtudiantDialog = value;
       }
       
     get searchResponsabiliteEncadrementEtudiant(): ResponsabiliteEncadrementEtudiantVo {
        return this.responsabiliteEncadrementEtudiantService.searchResponsabiliteEncadrementEtudiant;
       }
    set searchResponsabiliteEncadrementEtudiant(value: ResponsabiliteEncadrementEtudiantVo) {
        this.responsabiliteEncadrementEtudiantService.searchResponsabiliteEncadrementEtudiant = value;
       }



}