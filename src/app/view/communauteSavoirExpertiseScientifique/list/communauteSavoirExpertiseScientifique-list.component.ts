import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirExpertiseScientifiqueService} from '../../../controller/service/CommunauteSavoirExpertiseScientifique.service';
import {CommunauteSavoirExpertiseScientifiqueVo} from '../../../controller/model/CommunauteSavoirExpertiseScientifique.model';
import {ExpertiseScientifiqueVo} from '../../../controller/model/ExpertiseScientifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-communauteSavoirExpertiseScientifique-list',
  templateUrl: './communauteSavoirExpertiseScientifique-list.component.html',
  styleUrls: ['./communauteSavoirExpertiseScientifique-list.component.css']
})

export class CommunauteSavoirExpertiseScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private communauteSavoirExpertiseScientifiqueService: CommunauteSavoirExpertiseScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCommunauteSavoirExpertiseScientifiques();
    } 
    
    // methods 
    public async loadCommunauteSavoirExpertiseScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirExpertiseScientifique", "list");
        isPermistted ? this.communauteSavoirExpertiseScientifiqueService.findAll().subscribe(communauteSavoirExpertiseScientifiques => this.communauteSavoirExpertiseScientifiques = communauteSavoirExpertiseScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.communauteSavoirExpertiseScientifiqueService.findByCriteria(this.searchCommunauteSavoirExpertiseScientifique).subscribe(communauteSavoirExpertiseScientifiques=>{
            
            this.communauteSavoirExpertiseScientifiques = communauteSavoirExpertiseScientifiques;
           // this.searchCommunauteSavoirExpertiseScientifique = new CommunauteSavoirExpertiseScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'communauteSavoir', header: 'communauteSavoir'},
                {field: 'experiseScientifique', header: 'experiseScientifique'},
        ];
    }
    
    public async editCommunauteSavoirExpertiseScientifique(communauteSavoirExpertiseScientifique:CommunauteSavoirExpertiseScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirExpertiseScientifique", "edit");
         if(isPermistted){
         this.selectedCommunauteSavoirExpertiseScientifique = communauteSavoirExpertiseScientifique;
         this.editCommunauteSavoirExpertiseScientifiqueDialog = true;
         this.communauteSavoirExpertiseScientifiqueService.editCommunauteSavoirExpertiseScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCommunauteSavoirExpertiseScientifique(communauteSavoirExpertiseScientifique:CommunauteSavoirExpertiseScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirExpertiseScientifique", "view");
        if(isPermistted){
       this.selectedCommunauteSavoirExpertiseScientifique = communauteSavoirExpertiseScientifique;
        this.viewCommunauteSavoirExpertiseScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCommunauteSavoirExpertiseScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCommunauteSavoirExpertiseScientifique = new CommunauteSavoirExpertiseScientifiqueVo();
        this.createCommunauteSavoirExpertiseScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCommunauteSavoirExpertiseScientifique(communauteSavoirExpertiseScientifique:CommunauteSavoirExpertiseScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("CommunauteSavoirExpertiseScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CommunauteSavoirExpertiseScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.communauteSavoirExpertiseScientifiqueService.delete(communauteSavoirExpertiseScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.communauteSavoirExpertiseScientifiques.indexOf(communauteSavoirExpertiseScientifique);
                          position > -1 ? this.communauteSavoirExpertiseScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CommunauteSavoirExpertiseScientifique Deleted',
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

    get communauteSavoirExpertiseScientifiques(): Array<CommunauteSavoirExpertiseScientifiqueVo> {
           return this.communauteSavoirExpertiseScientifiqueService.communauteSavoirExpertiseScientifiques;
       }
    set communauteSavoirExpertiseScientifiques(value: Array<CommunauteSavoirExpertiseScientifiqueVo>) {
        this.communauteSavoirExpertiseScientifiqueService.communauteSavoirExpertiseScientifiques = value;
       }

    get communauteSavoirExpertiseScientifiqueSelections(): Array<CommunauteSavoirExpertiseScientifiqueVo> {
           return this.communauteSavoirExpertiseScientifiqueService.communauteSavoirExpertiseScientifiqueSelections;
       }
    set communauteSavoirExpertiseScientifiqueSelections(value: Array<CommunauteSavoirExpertiseScientifiqueVo>) {
        this.communauteSavoirExpertiseScientifiqueService.communauteSavoirExpertiseScientifiqueSelections = value;
       }
   
     


    get selectedCommunauteSavoirExpertiseScientifique():CommunauteSavoirExpertiseScientifiqueVo {
           return this.communauteSavoirExpertiseScientifiqueService.selectedCommunauteSavoirExpertiseScientifique;
       }
    set selectedCommunauteSavoirExpertiseScientifique(value: CommunauteSavoirExpertiseScientifiqueVo) {
        this.communauteSavoirExpertiseScientifiqueService.selectedCommunauteSavoirExpertiseScientifique = value;
       }
    
    get createCommunauteSavoirExpertiseScientifiqueDialog():boolean {
           return this.communauteSavoirExpertiseScientifiqueService.createCommunauteSavoirExpertiseScientifiqueDialog;
       }
    set createCommunauteSavoirExpertiseScientifiqueDialog(value: boolean) {
        this.communauteSavoirExpertiseScientifiqueService.createCommunauteSavoirExpertiseScientifiqueDialog= value;
       }
    
    get editCommunauteSavoirExpertiseScientifiqueDialog():boolean {
           return this.communauteSavoirExpertiseScientifiqueService.editCommunauteSavoirExpertiseScientifiqueDialog;
       }
    set editCommunauteSavoirExpertiseScientifiqueDialog(value: boolean) {
        this.communauteSavoirExpertiseScientifiqueService.editCommunauteSavoirExpertiseScientifiqueDialog= value;
       }
    get viewCommunauteSavoirExpertiseScientifiqueDialog():boolean {
           return this.communauteSavoirExpertiseScientifiqueService.viewCommunauteSavoirExpertiseScientifiqueDialog;
       }
    set viewCommunauteSavoirExpertiseScientifiqueDialog(value: boolean) {
        this.communauteSavoirExpertiseScientifiqueService.viewCommunauteSavoirExpertiseScientifiqueDialog = value;
       }
       
     get searchCommunauteSavoirExpertiseScientifique(): CommunauteSavoirExpertiseScientifiqueVo {
        return this.communauteSavoirExpertiseScientifiqueService.searchCommunauteSavoirExpertiseScientifique;
       }
    set searchCommunauteSavoirExpertiseScientifique(value: CommunauteSavoirExpertiseScientifiqueVo) {
        this.communauteSavoirExpertiseScientifiqueService.searchCommunauteSavoirExpertiseScientifique = value;
       }



}