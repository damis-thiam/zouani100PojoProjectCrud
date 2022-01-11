import {Component, OnInit} from '@angular/core';
import {DistinctionService} from '../../../controller/service/Distinction.service';
import {DistinctionVo} from '../../../controller/model/Distinction.model';
import {TypeParticipationVo} from '../../../controller/model/TypeParticipation.model';
import {OrganismeVo} from '../../../controller/model/Organisme.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import * as moment from 'moment';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-distinction-list',
  templateUrl: './distinction-list.component.html',
  styleUrls: ['./distinction-list.component.css']
})

export class DistinctionListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];
           searchDistinctionMin: Date = null;
           searchDistinctionMax: Date = null;

    constructor(private distinctionService: DistinctionService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDistinctions();
    } 
    
    // methods 
    public async loadDistinctions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Distinction", "list");
        isPermistted ? this.distinctionService.findAll().subscribe(distinctions => this.distinctions = distinctions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.searchDistinction.dateObtentionMax = this.searchDistinctionMax ? moment(this.searchDistinctionMax).format("YYYY-MM-DD") : '';
        this.searchDistinction.dateObtentionMin = this.searchDistinctionMin ? moment(this.searchDistinctionMin).format("YYYY-MM-DD") : '';
        this.distinctionService.findByCriteria(this.searchDistinction).subscribe(distinctions=>{
            
            this.distinctions = distinctions;
           // this.searchDistinction = new DistinctionVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'dateObtention', header: 'dateObtention'},
                {field: 'intitule', header: 'intitule'},
                {field: 'organisme', header: 'organisme'},
                {field: 'typeParticipation', header: 'typeParticipation'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editDistinction(distinction:DistinctionVo){
        const isPermistted = await this.roleService.isPermitted("Distinction", "edit");
         if(isPermistted){
         this.selectedDistinction = distinction;
         this.editDistinctionDialog = true;
         this.distinctionService.editDistinction$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDistinction(distinction:DistinctionVo){
        const isPermistted = await this.roleService.isPermitted("Distinction", "view");
        if(isPermistted){
       this.selectedDistinction = distinction;
        this.viewDistinctionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDistinction(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDistinction = new DistinctionVo();
        this.createDistinctionDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDistinction(distinction:DistinctionVo){
       const isPermistted = await this.roleService.isPermitted("Distinction", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Distinction ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.distinctionService.delete(distinction).subscribe(status=>{
                          if(status > 0){
                          const position = this.distinctions.indexOf(distinction);
                          position > -1 ? this.distinctions.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Distinction Deleted',
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

    get distinctions(): Array<DistinctionVo> {
           return this.distinctionService.distinctions;
       }
    set distinctions(value: Array<DistinctionVo>) {
        this.distinctionService.distinctions = value;
       }

    get distinctionSelections(): Array<DistinctionVo> {
           return this.distinctionService.distinctionSelections;
       }
    set distinctionSelections(value: Array<DistinctionVo>) {
        this.distinctionService.distinctionSelections = value;
       }
   
     


    get selectedDistinction():DistinctionVo {
           return this.distinctionService.selectedDistinction;
       }
    set selectedDistinction(value: DistinctionVo) {
        this.distinctionService.selectedDistinction = value;
       }
    
    get createDistinctionDialog():boolean {
           return this.distinctionService.createDistinctionDialog;
       }
    set createDistinctionDialog(value: boolean) {
        this.distinctionService.createDistinctionDialog= value;
       }
    
    get editDistinctionDialog():boolean {
           return this.distinctionService.editDistinctionDialog;
       }
    set editDistinctionDialog(value: boolean) {
        this.distinctionService.editDistinctionDialog= value;
       }
    get viewDistinctionDialog():boolean {
           return this.distinctionService.viewDistinctionDialog;
       }
    set viewDistinctionDialog(value: boolean) {
        this.distinctionService.viewDistinctionDialog = value;
       }
       
     get searchDistinction(): DistinctionVo {
        return this.distinctionService.searchDistinction;
       }
    set searchDistinction(value: DistinctionVo) {
        this.distinctionService.searchDistinction = value;
       }



}