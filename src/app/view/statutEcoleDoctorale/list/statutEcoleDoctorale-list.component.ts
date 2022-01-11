import {Component, OnInit} from '@angular/core';
import {StatutEcoleDoctoraleService} from '../../../controller/service/StatutEcoleDoctorale.service';
import {StatutEcoleDoctoraleVo} from '../../../controller/model/StatutEcoleDoctorale.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-statutEcoleDoctorale-list',
  templateUrl: './statutEcoleDoctorale-list.component.html',
  styleUrls: ['./statutEcoleDoctorale-list.component.css']
})

export class StatutEcoleDoctoraleListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private statutEcoleDoctoraleService: StatutEcoleDoctoraleService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadStatutEcoleDoctorales();
    } 
    
    // methods 
    public async loadStatutEcoleDoctorales(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("StatutEcoleDoctorale", "list");
        isPermistted ? this.statutEcoleDoctoraleService.findAll().subscribe(statutEcoleDoctorales => this.statutEcoleDoctorales = statutEcoleDoctorales,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.statutEcoleDoctoraleService.findByCriteria(this.searchStatutEcoleDoctorale).subscribe(statutEcoleDoctorales=>{
            
            this.statutEcoleDoctorales = statutEcoleDoctorales;
           // this.searchStatutEcoleDoctorale = new StatutEcoleDoctoraleVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
        ];
    }
    
    public async editStatutEcoleDoctorale(statutEcoleDoctorale:StatutEcoleDoctoraleVo){
        const isPermistted = await this.roleService.isPermitted("StatutEcoleDoctorale", "edit");
         if(isPermistted){
         this.selectedStatutEcoleDoctorale = statutEcoleDoctorale;
         this.editStatutEcoleDoctoraleDialog = true;
         this.statutEcoleDoctoraleService.editStatutEcoleDoctorale$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewStatutEcoleDoctorale(statutEcoleDoctorale:StatutEcoleDoctoraleVo){
        const isPermistted = await this.roleService.isPermitted("StatutEcoleDoctorale", "view");
        if(isPermistted){
       this.selectedStatutEcoleDoctorale = statutEcoleDoctorale;
        this.viewStatutEcoleDoctoraleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateStatutEcoleDoctorale(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedStatutEcoleDoctorale = new StatutEcoleDoctoraleVo();
        this.createStatutEcoleDoctoraleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteStatutEcoleDoctorale(statutEcoleDoctorale:StatutEcoleDoctoraleVo){
       const isPermistted = await this.roleService.isPermitted("StatutEcoleDoctorale", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the StatutEcoleDoctorale ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.statutEcoleDoctoraleService.delete(statutEcoleDoctorale).subscribe(status=>{
                          if(status > 0){
                          const position = this.statutEcoleDoctorales.indexOf(statutEcoleDoctorale);
                          position > -1 ? this.statutEcoleDoctorales.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'StatutEcoleDoctorale Deleted',
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

    get statutEcoleDoctorales(): Array<StatutEcoleDoctoraleVo> {
           return this.statutEcoleDoctoraleService.statutEcoleDoctorales;
       }
    set statutEcoleDoctorales(value: Array<StatutEcoleDoctoraleVo>) {
        this.statutEcoleDoctoraleService.statutEcoleDoctorales = value;
       }

    get statutEcoleDoctoraleSelections(): Array<StatutEcoleDoctoraleVo> {
           return this.statutEcoleDoctoraleService.statutEcoleDoctoraleSelections;
       }
    set statutEcoleDoctoraleSelections(value: Array<StatutEcoleDoctoraleVo>) {
        this.statutEcoleDoctoraleService.statutEcoleDoctoraleSelections = value;
       }
   
     


    get selectedStatutEcoleDoctorale():StatutEcoleDoctoraleVo {
           return this.statutEcoleDoctoraleService.selectedStatutEcoleDoctorale;
       }
    set selectedStatutEcoleDoctorale(value: StatutEcoleDoctoraleVo) {
        this.statutEcoleDoctoraleService.selectedStatutEcoleDoctorale = value;
       }
    
    get createStatutEcoleDoctoraleDialog():boolean {
           return this.statutEcoleDoctoraleService.createStatutEcoleDoctoraleDialog;
       }
    set createStatutEcoleDoctoraleDialog(value: boolean) {
        this.statutEcoleDoctoraleService.createStatutEcoleDoctoraleDialog= value;
       }
    
    get editStatutEcoleDoctoraleDialog():boolean {
           return this.statutEcoleDoctoraleService.editStatutEcoleDoctoraleDialog;
       }
    set editStatutEcoleDoctoraleDialog(value: boolean) {
        this.statutEcoleDoctoraleService.editStatutEcoleDoctoraleDialog= value;
       }
    get viewStatutEcoleDoctoraleDialog():boolean {
           return this.statutEcoleDoctoraleService.viewStatutEcoleDoctoraleDialog;
       }
    set viewStatutEcoleDoctoraleDialog(value: boolean) {
        this.statutEcoleDoctoraleService.viewStatutEcoleDoctoraleDialog = value;
       }
       
     get searchStatutEcoleDoctorale(): StatutEcoleDoctoraleVo {
        return this.statutEcoleDoctoraleService.searchStatutEcoleDoctorale;
       }
    set searchStatutEcoleDoctorale(value: StatutEcoleDoctoraleVo) {
        this.statutEcoleDoctoraleService.searchStatutEcoleDoctorale = value;
       }



}