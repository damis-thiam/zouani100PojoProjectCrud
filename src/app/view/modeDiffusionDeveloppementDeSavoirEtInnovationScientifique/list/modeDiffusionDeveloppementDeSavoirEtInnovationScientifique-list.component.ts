import {Component, OnInit} from '@angular/core';
import {ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService} from '../../../controller/service/ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.service';
import {ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique.model';
import {ModeDiffusionVo} from '../../../controller/model/ModeDiffusion.model';
import {DeveloppementDeSavoirEtInnovationScientifiqueVo} from '../../../controller/model/DeveloppementDeSavoirEtInnovationScientifique.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-list',
  templateUrl: './modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-list.component.html',
  styleUrls: ['./modeDiffusionDeveloppementDeSavoirEtInnovationScientifique-list.component.css']
})

export class ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadModeDiffusionDeveloppementDeSavoirEtInnovationScientifiques();
    } 
    
    // methods 
    public async loadModeDiffusionDeveloppementDeSavoirEtInnovationScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique", "list");
        isPermistted ? this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.findAll().subscribe(modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques => this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques = modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.findByCriteria(this.searchModeDiffusionDeveloppementDeSavoirEtInnovationScientifique).subscribe(modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques=>{
            
            this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques = modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques;
           // this.searchModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = new ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'modeDiffusion', header: 'modeDiffusion'},
                {field: 'developpementDeSavoirEtInnovationScientifique', header: 'developpementDeSavoirEtInnovationScientifique'},
        ];
    }
    
    public async editModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(modeDiffusionDeveloppementDeSavoirEtInnovationScientifique:ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique", "edit");
         if(isPermistted){
         this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = modeDiffusionDeveloppementDeSavoirEtInnovationScientifique;
         this.editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
         this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.editModeDiffusionDeveloppementDeSavoirEtInnovationScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(modeDiffusionDeveloppementDeSavoirEtInnovationScientifique:ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique", "view");
        if(isPermistted){
       this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = modeDiffusionDeveloppementDeSavoirEtInnovationScientifique;
        this.viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = new ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo();
        this.createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(modeDiffusionDeveloppementDeSavoirEtInnovationScientifique:ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.delete(modeDiffusionDeveloppementDeSavoirEtInnovationScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques.indexOf(modeDiffusionDeveloppementDeSavoirEtInnovationScientifique);
                          position > -1 ? this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ModeDiffusionDeveloppementDeSavoirEtInnovationScientifique Deleted',
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

    get modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques(): Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo> {
           return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques;
       }
    set modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques(value: Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiques = value;
       }

    get modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueSelections(): Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo> {
           return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueSelections;
       }
    set modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueSelections(value: Array<ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo>) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueSelections = value;
       }
   
     


    get selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique():ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo {
           return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique;
       }
    set selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(value: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.selectedModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = value;
       }
    
    get createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.createModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }
    
    get editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.editModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog= value;
       }
    get viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog():boolean {
           return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog;
       }
    set viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog(value: boolean) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.viewModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueDialog = value;
       }
       
     get searchModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(): ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo {
        return this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.searchModeDiffusionDeveloppementDeSavoirEtInnovationScientifique;
       }
    set searchModeDiffusionDeveloppementDeSavoirEtInnovationScientifique(value: ModeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueVo) {
        this.modeDiffusionDeveloppementDeSavoirEtInnovationScientifiqueService.searchModeDiffusionDeveloppementDeSavoirEtInnovationScientifique = value;
       }



}