import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirEncadrementEtudiantService} from '../../../controller/service/CommunauteSavoirEncadrementEtudiant.service';
import {CommunauteSavoirEncadrementEtudiantVo} from '../../../controller/model/CommunauteSavoirEncadrementEtudiant.model';
import {EncadrementEtudiantVo} from '../../../controller/model/EncadrementEtudiant.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-communauteSavoirEncadrementEtudiant-list',
  templateUrl: './communauteSavoirEncadrementEtudiant-list.component.html',
  styleUrls: ['./communauteSavoirEncadrementEtudiant-list.component.css']
})

export class CommunauteSavoirEncadrementEtudiantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private communauteSavoirEncadrementEtudiantService: CommunauteSavoirEncadrementEtudiantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCommunauteSavoirEncadrementEtudiants();
    } 
    
    // methods 
    public async loadCommunauteSavoirEncadrementEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEncadrementEtudiant", "list");
        isPermistted ? this.communauteSavoirEncadrementEtudiantService.findAll().subscribe(communauteSavoirEncadrementEtudiants => this.communauteSavoirEncadrementEtudiants = communauteSavoirEncadrementEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.communauteSavoirEncadrementEtudiantService.findByCriteria(this.searchCommunauteSavoirEncadrementEtudiant).subscribe(communauteSavoirEncadrementEtudiants=>{
            
            this.communauteSavoirEncadrementEtudiants = communauteSavoirEncadrementEtudiants;
           // this.searchCommunauteSavoirEncadrementEtudiant = new CommunauteSavoirEncadrementEtudiantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'communauteSavoir', header: 'communauteSavoir'},
                {field: 'encadrementEtudiant', header: 'encadrementEtudiant'},
        ];
    }
    
    public async editCommunauteSavoirEncadrementEtudiant(communauteSavoirEncadrementEtudiant:CommunauteSavoirEncadrementEtudiantVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEncadrementEtudiant", "edit");
         if(isPermistted){
         this.selectedCommunauteSavoirEncadrementEtudiant = communauteSavoirEncadrementEtudiant;
         this.editCommunauteSavoirEncadrementEtudiantDialog = true;
         this.communauteSavoirEncadrementEtudiantService.editCommunauteSavoirEncadrementEtudiant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCommunauteSavoirEncadrementEtudiant(communauteSavoirEncadrementEtudiant:CommunauteSavoirEncadrementEtudiantVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEncadrementEtudiant", "view");
        if(isPermistted){
       this.selectedCommunauteSavoirEncadrementEtudiant = communauteSavoirEncadrementEtudiant;
        this.viewCommunauteSavoirEncadrementEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCommunauteSavoirEncadrementEtudiant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCommunauteSavoirEncadrementEtudiant = new CommunauteSavoirEncadrementEtudiantVo();
        this.createCommunauteSavoirEncadrementEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCommunauteSavoirEncadrementEtudiant(communauteSavoirEncadrementEtudiant:CommunauteSavoirEncadrementEtudiantVo){
       const isPermistted = await this.roleService.isPermitted("CommunauteSavoirEncadrementEtudiant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CommunauteSavoirEncadrementEtudiant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.communauteSavoirEncadrementEtudiantService.delete(communauteSavoirEncadrementEtudiant).subscribe(status=>{
                          if(status > 0){
                          const position = this.communauteSavoirEncadrementEtudiants.indexOf(communauteSavoirEncadrementEtudiant);
                          position > -1 ? this.communauteSavoirEncadrementEtudiants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CommunauteSavoirEncadrementEtudiant Deleted',
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

    get communauteSavoirEncadrementEtudiants(): Array<CommunauteSavoirEncadrementEtudiantVo> {
           return this.communauteSavoirEncadrementEtudiantService.communauteSavoirEncadrementEtudiants;
       }
    set communauteSavoirEncadrementEtudiants(value: Array<CommunauteSavoirEncadrementEtudiantVo>) {
        this.communauteSavoirEncadrementEtudiantService.communauteSavoirEncadrementEtudiants = value;
       }

    get communauteSavoirEncadrementEtudiantSelections(): Array<CommunauteSavoirEncadrementEtudiantVo> {
           return this.communauteSavoirEncadrementEtudiantService.communauteSavoirEncadrementEtudiantSelections;
       }
    set communauteSavoirEncadrementEtudiantSelections(value: Array<CommunauteSavoirEncadrementEtudiantVo>) {
        this.communauteSavoirEncadrementEtudiantService.communauteSavoirEncadrementEtudiantSelections = value;
       }
   
     


    get selectedCommunauteSavoirEncadrementEtudiant():CommunauteSavoirEncadrementEtudiantVo {
           return this.communauteSavoirEncadrementEtudiantService.selectedCommunauteSavoirEncadrementEtudiant;
       }
    set selectedCommunauteSavoirEncadrementEtudiant(value: CommunauteSavoirEncadrementEtudiantVo) {
        this.communauteSavoirEncadrementEtudiantService.selectedCommunauteSavoirEncadrementEtudiant = value;
       }
    
    get createCommunauteSavoirEncadrementEtudiantDialog():boolean {
           return this.communauteSavoirEncadrementEtudiantService.createCommunauteSavoirEncadrementEtudiantDialog;
       }
    set createCommunauteSavoirEncadrementEtudiantDialog(value: boolean) {
        this.communauteSavoirEncadrementEtudiantService.createCommunauteSavoirEncadrementEtudiantDialog= value;
       }
    
    get editCommunauteSavoirEncadrementEtudiantDialog():boolean {
           return this.communauteSavoirEncadrementEtudiantService.editCommunauteSavoirEncadrementEtudiantDialog;
       }
    set editCommunauteSavoirEncadrementEtudiantDialog(value: boolean) {
        this.communauteSavoirEncadrementEtudiantService.editCommunauteSavoirEncadrementEtudiantDialog= value;
       }
    get viewCommunauteSavoirEncadrementEtudiantDialog():boolean {
           return this.communauteSavoirEncadrementEtudiantService.viewCommunauteSavoirEncadrementEtudiantDialog;
       }
    set viewCommunauteSavoirEncadrementEtudiantDialog(value: boolean) {
        this.communauteSavoirEncadrementEtudiantService.viewCommunauteSavoirEncadrementEtudiantDialog = value;
       }
       
     get searchCommunauteSavoirEncadrementEtudiant(): CommunauteSavoirEncadrementEtudiantVo {
        return this.communauteSavoirEncadrementEtudiantService.searchCommunauteSavoirEncadrementEtudiant;
       }
    set searchCommunauteSavoirEncadrementEtudiant(value: CommunauteSavoirEncadrementEtudiantVo) {
        this.communauteSavoirEncadrementEtudiantService.searchCommunauteSavoirEncadrementEtudiant = value;
       }



}