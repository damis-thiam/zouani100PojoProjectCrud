import {Component, OnInit} from '@angular/core';
import {NiveauFormationService} from '../../../controller/service/NiveauFormation.service';
import {NiveauFormationVo} from '../../../controller/model/NiveauFormation.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-niveauFormation-list',
  templateUrl: './niveauFormation-list.component.html',
  styleUrls: ['./niveauFormation-list.component.css']
})

export class NiveauFormationListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private niveauFormationService: NiveauFormationService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadNiveauFormations();
    } 
    
    // methods 
    public async loadNiveauFormations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("NiveauFormation", "list");
        isPermistted ? this.niveauFormationService.findAll().subscribe(niveauFormations => this.niveauFormations = niveauFormations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.niveauFormationService.findByCriteria(this.searchNiveauFormation).subscribe(niveauFormations=>{
            
            this.niveauFormations = niveauFormations;
           // this.searchNiveauFormation = new NiveauFormationVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editNiveauFormation(niveauFormation:NiveauFormationVo){
        const isPermistted = await this.roleService.isPermitted("NiveauFormation", "edit");
         if(isPermistted){
         this.selectedNiveauFormation = niveauFormation;
         this.editNiveauFormationDialog = true;
         this.niveauFormationService.editNiveauFormation$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewNiveauFormation(niveauFormation:NiveauFormationVo){
        const isPermistted = await this.roleService.isPermitted("NiveauFormation", "view");
        if(isPermistted){
       this.selectedNiveauFormation = niveauFormation;
        this.viewNiveauFormationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateNiveauFormation(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedNiveauFormation = new NiveauFormationVo();
        this.createNiveauFormationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteNiveauFormation(niveauFormation:NiveauFormationVo){
       const isPermistted = await this.roleService.isPermitted("NiveauFormation", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the NiveauFormation ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.niveauFormationService.delete(niveauFormation).subscribe(status=>{
                          if(status > 0){
                          const position = this.niveauFormations.indexOf(niveauFormation);
                          position > -1 ? this.niveauFormations.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'NiveauFormation Deleted',
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

    get niveauFormations(): Array<NiveauFormationVo> {
           return this.niveauFormationService.niveauFormations;
       }
    set niveauFormations(value: Array<NiveauFormationVo>) {
        this.niveauFormationService.niveauFormations = value;
       }

    get niveauFormationSelections(): Array<NiveauFormationVo> {
           return this.niveauFormationService.niveauFormationSelections;
       }
    set niveauFormationSelections(value: Array<NiveauFormationVo>) {
        this.niveauFormationService.niveauFormationSelections = value;
       }
   
     


    get selectedNiveauFormation():NiveauFormationVo {
           return this.niveauFormationService.selectedNiveauFormation;
       }
    set selectedNiveauFormation(value: NiveauFormationVo) {
        this.niveauFormationService.selectedNiveauFormation = value;
       }
    
    get createNiveauFormationDialog():boolean {
           return this.niveauFormationService.createNiveauFormationDialog;
       }
    set createNiveauFormationDialog(value: boolean) {
        this.niveauFormationService.createNiveauFormationDialog= value;
       }
    
    get editNiveauFormationDialog():boolean {
           return this.niveauFormationService.editNiveauFormationDialog;
       }
    set editNiveauFormationDialog(value: boolean) {
        this.niveauFormationService.editNiveauFormationDialog= value;
       }
    get viewNiveauFormationDialog():boolean {
           return this.niveauFormationService.viewNiveauFormationDialog;
       }
    set viewNiveauFormationDialog(value: boolean) {
        this.niveauFormationService.viewNiveauFormationDialog = value;
       }
       
     get searchNiveauFormation(): NiveauFormationVo {
        return this.niveauFormationService.searchNiveauFormation;
       }
    set searchNiveauFormation(value: NiveauFormationVo) {
        this.niveauFormationService.searchNiveauFormation = value;
       }



}