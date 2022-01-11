import {Component, OnInit} from '@angular/core';
import {EcoleDoctoraleService} from '../../../controller/service/EcoleDoctorale.service';
import {EcoleDoctoraleVo} from '../../../controller/model/EcoleDoctorale.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-ecoleDoctorale-list',
  templateUrl: './ecoleDoctorale-list.component.html',
  styleUrls: ['./ecoleDoctorale-list.component.css']
})

export class EcoleDoctoraleListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private ecoleDoctoraleService: EcoleDoctoraleService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEcoleDoctorales();
    } 
    
    // methods 
    public async loadEcoleDoctorales(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("EcoleDoctorale", "list");
        isPermistted ? this.ecoleDoctoraleService.findAll().subscribe(ecoleDoctorales => this.ecoleDoctorales = ecoleDoctorales,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.ecoleDoctoraleService.findByCriteria(this.searchEcoleDoctorale).subscribe(ecoleDoctorales=>{
            
            this.ecoleDoctorales = ecoleDoctorales;
           // this.searchEcoleDoctorale = new EcoleDoctoraleVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'intitule', header: 'intitule'},
                {field: 'international', header: 'international'},
                {field: 'paysEtablissement', header: 'paysEtablissement'},
        ];
    }
    
    public async editEcoleDoctorale(ecoleDoctorale:EcoleDoctoraleVo){
        const isPermistted = await this.roleService.isPermitted("EcoleDoctorale", "edit");
         if(isPermistted){
         this.selectedEcoleDoctorale = ecoleDoctorale;
         this.editEcoleDoctoraleDialog = true;
         this.ecoleDoctoraleService.editEcoleDoctorale$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEcoleDoctorale(ecoleDoctorale:EcoleDoctoraleVo){
        const isPermistted = await this.roleService.isPermitted("EcoleDoctorale", "view");
        if(isPermistted){
       this.selectedEcoleDoctorale = ecoleDoctorale;
        this.viewEcoleDoctoraleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEcoleDoctorale(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEcoleDoctorale = new EcoleDoctoraleVo();
        this.createEcoleDoctoraleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEcoleDoctorale(ecoleDoctorale:EcoleDoctoraleVo){
       const isPermistted = await this.roleService.isPermitted("EcoleDoctorale", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the EcoleDoctorale ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.ecoleDoctoraleService.delete(ecoleDoctorale).subscribe(status=>{
                          if(status > 0){
                          const position = this.ecoleDoctorales.indexOf(ecoleDoctorale);
                          position > -1 ? this.ecoleDoctorales.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'EcoleDoctorale Deleted',
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

    get ecoleDoctorales(): Array<EcoleDoctoraleVo> {
           return this.ecoleDoctoraleService.ecoleDoctorales;
       }
    set ecoleDoctorales(value: Array<EcoleDoctoraleVo>) {
        this.ecoleDoctoraleService.ecoleDoctorales = value;
       }

    get ecoleDoctoraleSelections(): Array<EcoleDoctoraleVo> {
           return this.ecoleDoctoraleService.ecoleDoctoraleSelections;
       }
    set ecoleDoctoraleSelections(value: Array<EcoleDoctoraleVo>) {
        this.ecoleDoctoraleService.ecoleDoctoraleSelections = value;
       }
   
     


    get selectedEcoleDoctorale():EcoleDoctoraleVo {
           return this.ecoleDoctoraleService.selectedEcoleDoctorale;
       }
    set selectedEcoleDoctorale(value: EcoleDoctoraleVo) {
        this.ecoleDoctoraleService.selectedEcoleDoctorale = value;
       }
    
    get createEcoleDoctoraleDialog():boolean {
           return this.ecoleDoctoraleService.createEcoleDoctoraleDialog;
       }
    set createEcoleDoctoraleDialog(value: boolean) {
        this.ecoleDoctoraleService.createEcoleDoctoraleDialog= value;
       }
    
    get editEcoleDoctoraleDialog():boolean {
           return this.ecoleDoctoraleService.editEcoleDoctoraleDialog;
       }
    set editEcoleDoctoraleDialog(value: boolean) {
        this.ecoleDoctoraleService.editEcoleDoctoraleDialog= value;
       }
    get viewEcoleDoctoraleDialog():boolean {
           return this.ecoleDoctoraleService.viewEcoleDoctoraleDialog;
       }
    set viewEcoleDoctoraleDialog(value: boolean) {
        this.ecoleDoctoraleService.viewEcoleDoctoraleDialog = value;
       }
       
     get searchEcoleDoctorale(): EcoleDoctoraleVo {
        return this.ecoleDoctoraleService.searchEcoleDoctorale;
       }
    set searchEcoleDoctorale(value: EcoleDoctoraleVo) {
        this.ecoleDoctoraleService.searchEcoleDoctorale = value;
       }



}