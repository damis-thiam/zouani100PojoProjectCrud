import {Component, OnInit} from '@angular/core';
import {CommunauteSavoirDirectionEncadrementDoctorantService} from '../../../controller/service/CommunauteSavoirDirectionEncadrementDoctorant.service';
import {CommunauteSavoirDirectionEncadrementDoctorantVo} from '../../../controller/model/CommunauteSavoirDirectionEncadrementDoctorant.model';
import {DirectionEncadrementDoctorantVo} from '../../../controller/model/DirectionEncadrementDoctorant.model';
import {CommunauteSavoirVo} from '../../../controller/model/CommunauteSavoir.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-communauteSavoirDirectionEncadrementDoctorant-list',
  templateUrl: './communauteSavoirDirectionEncadrementDoctorant-list.component.html',
  styleUrls: ['./communauteSavoirDirectionEncadrementDoctorant-list.component.css']
})

export class CommunauteSavoirDirectionEncadrementDoctorantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private communauteSavoirDirectionEncadrementDoctorantService: CommunauteSavoirDirectionEncadrementDoctorantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCommunauteSavoirDirectionEncadrementDoctorants();
    } 
    
    // methods 
    public async loadCommunauteSavoirDirectionEncadrementDoctorants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirDirectionEncadrementDoctorant", "list");
        isPermistted ? this.communauteSavoirDirectionEncadrementDoctorantService.findAll().subscribe(communauteSavoirDirectionEncadrementDoctorants => this.communauteSavoirDirectionEncadrementDoctorants = communauteSavoirDirectionEncadrementDoctorants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.communauteSavoirDirectionEncadrementDoctorantService.findByCriteria(this.searchCommunauteSavoirDirectionEncadrementDoctorant).subscribe(communauteSavoirDirectionEncadrementDoctorants=>{
            
            this.communauteSavoirDirectionEncadrementDoctorants = communauteSavoirDirectionEncadrementDoctorants;
           // this.searchCommunauteSavoirDirectionEncadrementDoctorant = new CommunauteSavoirDirectionEncadrementDoctorantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'communauteSavoir', header: 'communauteSavoir'},
                {field: 'directionEncadrementDoctorant', header: 'directionEncadrementDoctorant'},
        ];
    }
    
    public async editCommunauteSavoirDirectionEncadrementDoctorant(communauteSavoirDirectionEncadrementDoctorant:CommunauteSavoirDirectionEncadrementDoctorantVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirDirectionEncadrementDoctorant", "edit");
         if(isPermistted){
         this.selectedCommunauteSavoirDirectionEncadrementDoctorant = communauteSavoirDirectionEncadrementDoctorant;
         this.editCommunauteSavoirDirectionEncadrementDoctorantDialog = true;
         this.communauteSavoirDirectionEncadrementDoctorantService.editCommunauteSavoirDirectionEncadrementDoctorant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCommunauteSavoirDirectionEncadrementDoctorant(communauteSavoirDirectionEncadrementDoctorant:CommunauteSavoirDirectionEncadrementDoctorantVo){
        const isPermistted = await this.roleService.isPermitted("CommunauteSavoirDirectionEncadrementDoctorant", "view");
        if(isPermistted){
       this.selectedCommunauteSavoirDirectionEncadrementDoctorant = communauteSavoirDirectionEncadrementDoctorant;
        this.viewCommunauteSavoirDirectionEncadrementDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCommunauteSavoirDirectionEncadrementDoctorant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCommunauteSavoirDirectionEncadrementDoctorant = new CommunauteSavoirDirectionEncadrementDoctorantVo();
        this.createCommunauteSavoirDirectionEncadrementDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCommunauteSavoirDirectionEncadrementDoctorant(communauteSavoirDirectionEncadrementDoctorant:CommunauteSavoirDirectionEncadrementDoctorantVo){
       const isPermistted = await this.roleService.isPermitted("CommunauteSavoirDirectionEncadrementDoctorant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the CommunauteSavoirDirectionEncadrementDoctorant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.communauteSavoirDirectionEncadrementDoctorantService.delete(communauteSavoirDirectionEncadrementDoctorant).subscribe(status=>{
                          if(status > 0){
                          const position = this.communauteSavoirDirectionEncadrementDoctorants.indexOf(communauteSavoirDirectionEncadrementDoctorant);
                          position > -1 ? this.communauteSavoirDirectionEncadrementDoctorants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'CommunauteSavoirDirectionEncadrementDoctorant Deleted',
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

    get communauteSavoirDirectionEncadrementDoctorants(): Array<CommunauteSavoirDirectionEncadrementDoctorantVo> {
           return this.communauteSavoirDirectionEncadrementDoctorantService.communauteSavoirDirectionEncadrementDoctorants;
       }
    set communauteSavoirDirectionEncadrementDoctorants(value: Array<CommunauteSavoirDirectionEncadrementDoctorantVo>) {
        this.communauteSavoirDirectionEncadrementDoctorantService.communauteSavoirDirectionEncadrementDoctorants = value;
       }

    get communauteSavoirDirectionEncadrementDoctorantSelections(): Array<CommunauteSavoirDirectionEncadrementDoctorantVo> {
           return this.communauteSavoirDirectionEncadrementDoctorantService.communauteSavoirDirectionEncadrementDoctorantSelections;
       }
    set communauteSavoirDirectionEncadrementDoctorantSelections(value: Array<CommunauteSavoirDirectionEncadrementDoctorantVo>) {
        this.communauteSavoirDirectionEncadrementDoctorantService.communauteSavoirDirectionEncadrementDoctorantSelections = value;
       }
   
     


    get selectedCommunauteSavoirDirectionEncadrementDoctorant():CommunauteSavoirDirectionEncadrementDoctorantVo {
           return this.communauteSavoirDirectionEncadrementDoctorantService.selectedCommunauteSavoirDirectionEncadrementDoctorant;
       }
    set selectedCommunauteSavoirDirectionEncadrementDoctorant(value: CommunauteSavoirDirectionEncadrementDoctorantVo) {
        this.communauteSavoirDirectionEncadrementDoctorantService.selectedCommunauteSavoirDirectionEncadrementDoctorant = value;
       }
    
    get createCommunauteSavoirDirectionEncadrementDoctorantDialog():boolean {
           return this.communauteSavoirDirectionEncadrementDoctorantService.createCommunauteSavoirDirectionEncadrementDoctorantDialog;
       }
    set createCommunauteSavoirDirectionEncadrementDoctorantDialog(value: boolean) {
        this.communauteSavoirDirectionEncadrementDoctorantService.createCommunauteSavoirDirectionEncadrementDoctorantDialog= value;
       }
    
    get editCommunauteSavoirDirectionEncadrementDoctorantDialog():boolean {
           return this.communauteSavoirDirectionEncadrementDoctorantService.editCommunauteSavoirDirectionEncadrementDoctorantDialog;
       }
    set editCommunauteSavoirDirectionEncadrementDoctorantDialog(value: boolean) {
        this.communauteSavoirDirectionEncadrementDoctorantService.editCommunauteSavoirDirectionEncadrementDoctorantDialog= value;
       }
    get viewCommunauteSavoirDirectionEncadrementDoctorantDialog():boolean {
           return this.communauteSavoirDirectionEncadrementDoctorantService.viewCommunauteSavoirDirectionEncadrementDoctorantDialog;
       }
    set viewCommunauteSavoirDirectionEncadrementDoctorantDialog(value: boolean) {
        this.communauteSavoirDirectionEncadrementDoctorantService.viewCommunauteSavoirDirectionEncadrementDoctorantDialog = value;
       }
       
     get searchCommunauteSavoirDirectionEncadrementDoctorant(): CommunauteSavoirDirectionEncadrementDoctorantVo {
        return this.communauteSavoirDirectionEncadrementDoctorantService.searchCommunauteSavoirDirectionEncadrementDoctorant;
       }
    set searchCommunauteSavoirDirectionEncadrementDoctorant(value: CommunauteSavoirDirectionEncadrementDoctorantVo) {
        this.communauteSavoirDirectionEncadrementDoctorantService.searchCommunauteSavoirDirectionEncadrementDoctorant = value;
       }



}