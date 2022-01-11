import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirConseilEtComiteScientifiqueService} from '../../../controller/service/CommunauteSavoirConseilEtComiteScientifique.service';
import {CommunauteSavoirConseilEtComiteScientifiqueVo} from '../../../controller/model/CommunauteSavoirConseilEtComiteScientifique.model';
import {ConseilEtComiteScientifiqueVo} from '../../../controller/model/ConseilEtComiteScientifique.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-communauteSavoirConseilEtComiteScientifique-list',
  templateUrl: './communauteSavoirConseilEtComiteScientifique-list.component.html',
  styleUrls: ['./communauteSavoirConseilEtComiteScientifique-list.component.css']
})

export class CommunauteSavoirConseilEtComiteScientifiqueListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private communauteSavoirConseilEtComiteScientifiqueService: CommunauteSavoirConseilEtComiteScientifiqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCommunauteSavoirConseilEtComiteScientifiques();
    } 
    
    // methods 
    public async loadCommunauteSavoirConseilEtComiteScientifiques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirConseilEtComiteScientifique", "list");
        isPermistted ? this.communauteSavoirConseilEtComiteScientifiqueService.findAll().subscribe(communauteSavoirConseilEtComiteScientifiques => this.communauteSavoirConseilEtComiteScientifiques = communauteSavoirConseilEtComiteScientifiques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.communauteSavoirConseilEtComiteScientifiqueService.findByCriteria(this.searchCommunauteSavoirConseilEtComiteScientifique).subscribe(communauteSavoirConseilEtComiteScientifiques=>{
            
            this.communauteSavoirConseilEtComiteScientifiques = communauteSavoirConseilEtComiteScientifiques;
           // this.searchCommunauteSavoirConseilEtComiteScientifique = new CommunauteSavoirConseilEtComiteScientifiqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'communauteSavoir', header: 'communauteSavoir'},
                {field: 'conseilEtComiteScientifique', header: 'conseilEtComiteScientifique'},
        ];
    }
    
    public async editCommunauteSavoirConseilEtComiteScientifique(communauteSavoirConseilEtComiteScientifique:CommunauteSavoirConseilEtComiteScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirConseilEtComiteScientifique", "edit");
         if(isPermistted){
         this.selectedCommunauteSavoirConseilEtComiteScientifique = communauteSavoirConseilEtComiteScientifique;
         this.editCommunauteSavoirConseilEtComiteScientifiqueDialog = true;
         this.communauteSavoirConseilEtComiteScientifiqueService.editCommunauteSavoirConseilEtComiteScientifique$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCommunauteSavoirConseilEtComiteScientifique(communauteSavoirConseilEtComiteScientifique:CommunauteSavoirConseilEtComiteScientifiqueVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirConseilEtComiteScientifique", "view");
        if(isPermistted){
       this.selectedCommunauteSavoirConseilEtComiteScientifique = communauteSavoirConseilEtComiteScientifique;
        this.viewCommunauteSavoirConseilEtComiteScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCommunauteSavoirConseilEtComiteScientifique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCommunauteSavoirConseilEtComiteScientifique = new CommunauteSavoirConseilEtComiteScientifiqueVo();
        this.createCommunauteSavoirConseilEtComiteScientifiqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCommunauteSavoirConseilEtComiteScientifique(communauteSavoirConseilEtComiteScientifique:CommunauteSavoirConseilEtComiteScientifiqueVo){
       const isPermistted = await this.roleService.isPermitted("CommunauteSavoirConseilEtComiteScientifique", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CommunauteSavoirConseilEtComiteScientifique ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.communauteSavoirConseilEtComiteScientifiqueService.delete(communauteSavoirConseilEtComiteScientifique).subscribe(status=>{
                          if(status > 0){
                          const position = this.communauteSavoirConseilEtComiteScientifiques.indexOf(communauteSavoirConseilEtComiteScientifique);
                          position > -1 ? this.communauteSavoirConseilEtComiteScientifiques.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CommunauteSavoirConseilEtComiteScientifique Deleted',
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

    get communauteSavoirConseilEtComiteScientifiques(): Array<CommunauteSavoirConseilEtComiteScientifiqueVo> {
           return this.communauteSavoirConseilEtComiteScientifiqueService.communauteSavoirConseilEtComiteScientifiques;
       }
    set communauteSavoirConseilEtComiteScientifiques(value: Array<CommunauteSavoirConseilEtComiteScientifiqueVo>) {
        this.communauteSavoirConseilEtComiteScientifiqueService.communauteSavoirConseilEtComiteScientifiques = value;
       }

    get communauteSavoirConseilEtComiteScientifiqueSelections(): Array<CommunauteSavoirConseilEtComiteScientifiqueVo> {
           return this.communauteSavoirConseilEtComiteScientifiqueService.communauteSavoirConseilEtComiteScientifiqueSelections;
       }
    set communauteSavoirConseilEtComiteScientifiqueSelections(value: Array<CommunauteSavoirConseilEtComiteScientifiqueVo>) {
        this.communauteSavoirConseilEtComiteScientifiqueService.communauteSavoirConseilEtComiteScientifiqueSelections = value;
       }
   
     


    get selectedCommunauteSavoirConseilEtComiteScientifique():CommunauteSavoirConseilEtComiteScientifiqueVo {
           return this.communauteSavoirConseilEtComiteScientifiqueService.selectedCommunauteSavoirConseilEtComiteScientifique;
       }
    set selectedCommunauteSavoirConseilEtComiteScientifique(value: CommunauteSavoirConseilEtComiteScientifiqueVo) {
        this.communauteSavoirConseilEtComiteScientifiqueService.selectedCommunauteSavoirConseilEtComiteScientifique = value;
       }
    
    get createCommunauteSavoirConseilEtComiteScientifiqueDialog():boolean {
           return this.communauteSavoirConseilEtComiteScientifiqueService.createCommunauteSavoirConseilEtComiteScientifiqueDialog;
       }
    set createCommunauteSavoirConseilEtComiteScientifiqueDialog(value: boolean) {
        this.communauteSavoirConseilEtComiteScientifiqueService.createCommunauteSavoirConseilEtComiteScientifiqueDialog= value;
       }
    
    get editCommunauteSavoirConseilEtComiteScientifiqueDialog():boolean {
           return this.communauteSavoirConseilEtComiteScientifiqueService.editCommunauteSavoirConseilEtComiteScientifiqueDialog;
       }
    set editCommunauteSavoirConseilEtComiteScientifiqueDialog(value: boolean) {
        this.communauteSavoirConseilEtComiteScientifiqueService.editCommunauteSavoirConseilEtComiteScientifiqueDialog= value;
       }
    get viewCommunauteSavoirConseilEtComiteScientifiqueDialog():boolean {
           return this.communauteSavoirConseilEtComiteScientifiqueService.viewCommunauteSavoirConseilEtComiteScientifiqueDialog;
       }
    set viewCommunauteSavoirConseilEtComiteScientifiqueDialog(value: boolean) {
        this.communauteSavoirConseilEtComiteScientifiqueService.viewCommunauteSavoirConseilEtComiteScientifiqueDialog = value;
       }
       
     get searchCommunauteSavoirConseilEtComiteScientifique(): CommunauteSavoirConseilEtComiteScientifiqueVo {
        return this.communauteSavoirConseilEtComiteScientifiqueService.searchCommunauteSavoirConseilEtComiteScientifique;
       }
    set searchCommunauteSavoirConseilEtComiteScientifique(value: CommunauteSavoirConseilEtComiteScientifiqueVo) {
        this.communauteSavoirConseilEtComiteScientifiqueService.searchCommunauteSavoirConseilEtComiteScientifique = value;
       }



}