import {Component, OnInit} from '@angular/core';
import {ModeDiffusionService} from '../../../controller/service/ModeDiffusion.service';
import {ModeDiffusionVo} from '../../../controller/model/ModeDiffusion.model';
import {TypeSavoirVo} from '../../../controller/model/TypeSavoir.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-modeDiffusion-list',
  templateUrl: './modeDiffusion-list.component.html',
  styleUrls: ['./modeDiffusion-list.component.css']
})

export class ModeDiffusionListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private modeDiffusionService: ModeDiffusionService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadModeDiffusions();
    } 
    
    // methods 
    public async loadModeDiffusions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ModeDiffusion", "list");
        isPermistted ? this.modeDiffusionService.findAll().subscribe(modeDiffusions => this.modeDiffusions = modeDiffusions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.modeDiffusionService.findByCriteria(this.searchModeDiffusion).subscribe(modeDiffusions=>{
            
            this.modeDiffusions = modeDiffusions;
           // this.searchModeDiffusion = new ModeDiffusionVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
                {field: 'typeSavoir', header: 'typeSavoir'},
        ];
    }
    
    public async editModeDiffusion(modeDiffusion:ModeDiffusionVo){
        const isPermistted = await this.roleService.isPermitted("ModeDiffusion", "edit");
         if(isPermistted){
         this.selectedModeDiffusion = modeDiffusion;
         this.editModeDiffusionDialog = true;
         this.modeDiffusionService.editModeDiffusion$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewModeDiffusion(modeDiffusion:ModeDiffusionVo){
        const isPermistted = await this.roleService.isPermitted("ModeDiffusion", "view");
        if(isPermistted){
       this.selectedModeDiffusion = modeDiffusion;
        this.viewModeDiffusionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateModeDiffusion(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedModeDiffusion = new ModeDiffusionVo();
        this.createModeDiffusionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteModeDiffusion(modeDiffusion:ModeDiffusionVo){
       const isPermistted = await this.roleService.isPermitted("ModeDiffusion", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ModeDiffusion ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.modeDiffusionService.delete(modeDiffusion).subscribe(status=>{
                          if(status > 0){
                          const position = this.modeDiffusions.indexOf(modeDiffusion);
                          position > -1 ? this.modeDiffusions.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ModeDiffusion Deleted',
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

    get modeDiffusions(): Array<ModeDiffusionVo> {
           return this.modeDiffusionService.modeDiffusions;
       }
    set modeDiffusions(value: Array<ModeDiffusionVo>) {
        this.modeDiffusionService.modeDiffusions = value;
       }

    get modeDiffusionSelections(): Array<ModeDiffusionVo> {
           return this.modeDiffusionService.modeDiffusionSelections;
       }
    set modeDiffusionSelections(value: Array<ModeDiffusionVo>) {
        this.modeDiffusionService.modeDiffusionSelections = value;
       }
   
     


    get selectedModeDiffusion():ModeDiffusionVo {
           return this.modeDiffusionService.selectedModeDiffusion;
       }
    set selectedModeDiffusion(value: ModeDiffusionVo) {
        this.modeDiffusionService.selectedModeDiffusion = value;
       }
    
    get createModeDiffusionDialog():boolean {
           return this.modeDiffusionService.createModeDiffusionDialog;
       }
    set createModeDiffusionDialog(value: boolean) {
        this.modeDiffusionService.createModeDiffusionDialog= value;
       }
    
    get editModeDiffusionDialog():boolean {
           return this.modeDiffusionService.editModeDiffusionDialog;
       }
    set editModeDiffusionDialog(value: boolean) {
        this.modeDiffusionService.editModeDiffusionDialog= value;
       }
    get viewModeDiffusionDialog():boolean {
           return this.modeDiffusionService.viewModeDiffusionDialog;
       }
    set viewModeDiffusionDialog(value: boolean) {
        this.modeDiffusionService.viewModeDiffusionDialog = value;
       }
       
     get searchModeDiffusion(): ModeDiffusionVo {
        return this.modeDiffusionService.searchModeDiffusion;
       }
    set searchModeDiffusion(value: ModeDiffusionVo) {
        this.modeDiffusionService.searchModeDiffusion = value;
       }



}