import {Component, OnInit} from '@angular/core';
import {ResponsabilitePedagogiqueEcoleDoctoraleService} from '../../../controller/service/ResponsabilitePedagogiqueEcoleDoctorale.service';
import {ResponsabilitePedagogiqueEcoleDoctoraleVo} from '../../../controller/model/ResponsabilitePedagogiqueEcoleDoctorale.model';
import {EcoleDoctoraleVo} from '../../../controller/model/EcoleDoctorale.model';
import {StatutEcoleDoctoraleVo} from '../../../controller/model/StatutEcoleDoctorale.model';
import {EtablissementVo} from '../../../controller/model/Etablissement.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-responsabilitePedagogiqueEcoleDoctorale-list',
  templateUrl: './responsabilitePedagogiqueEcoleDoctorale-list.component.html',
  styleUrls: ['./responsabilitePedagogiqueEcoleDoctorale-list.component.css']
})

export class ResponsabilitePedagogiqueEcoleDoctoraleListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private responsabilitePedagogiqueEcoleDoctoraleService: ResponsabilitePedagogiqueEcoleDoctoraleService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadResponsabilitePedagogiqueEcoleDoctorales();
    } 
    
    // methods 
    public async loadResponsabilitePedagogiqueEcoleDoctorales(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("ResponsabilitePedagogiqueEcoleDoctorale", "list");
        isPermistted ? this.responsabilitePedagogiqueEcoleDoctoraleService.findAll().subscribe(responsabilitePedagogiqueEcoleDoctorales => this.responsabilitePedagogiqueEcoleDoctorales = responsabilitePedagogiqueEcoleDoctorales,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.responsabilitePedagogiqueEcoleDoctoraleService.findByCriteria(this.searchResponsabilitePedagogiqueEcoleDoctorale).subscribe(responsabilitePedagogiqueEcoleDoctorales=>{
            
            this.responsabilitePedagogiqueEcoleDoctorales = responsabilitePedagogiqueEcoleDoctorales;
           // this.searchResponsabilitePedagogiqueEcoleDoctorale = new ResponsabilitePedagogiqueEcoleDoctoraleVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'annee', header: 'annee'},
                {field: 'tempsEstimePourCetteAnnne', header: 'tempsEstimePourCetteAnnne'},
                {field: 'statutEcoleDoctorale', header: 'statutEcoleDoctorale'},
                {field: 'appelServiceRenforcementCapaciteSud', header: 'appelServiceRenforcementCapaciteSud'},
                {field: 'ecoleDoctoraleInternational', header: 'ecoleDoctoraleInternational'},
                {field: 'ecoleDoctorale', header: 'ecoleDoctorale'},
                {field: 'etablissement', header: 'etablissement'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editResponsabilitePedagogiqueEcoleDoctorale(responsabilitePedagogiqueEcoleDoctorale:ResponsabilitePedagogiqueEcoleDoctoraleVo){
        const isPermistted = await this.roleService.isPermitted("ResponsabilitePedagogiqueEcoleDoctorale", "edit");
         if(isPermistted){
         this.selectedResponsabilitePedagogiqueEcoleDoctorale = responsabilitePedagogiqueEcoleDoctorale;
         this.editResponsabilitePedagogiqueEcoleDoctoraleDialog = true;
         this.responsabilitePedagogiqueEcoleDoctoraleService.editResponsabilitePedagogiqueEcoleDoctorale$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewResponsabilitePedagogiqueEcoleDoctorale(responsabilitePedagogiqueEcoleDoctorale:ResponsabilitePedagogiqueEcoleDoctoraleVo){
        const isPermistted = await this.roleService.isPermitted("ResponsabilitePedagogiqueEcoleDoctorale", "view");
        if(isPermistted){
       this.selectedResponsabilitePedagogiqueEcoleDoctorale = responsabilitePedagogiqueEcoleDoctorale;
        this.viewResponsabilitePedagogiqueEcoleDoctoraleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateResponsabilitePedagogiqueEcoleDoctorale(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedResponsabilitePedagogiqueEcoleDoctorale = new ResponsabilitePedagogiqueEcoleDoctoraleVo();
        this.createResponsabilitePedagogiqueEcoleDoctoraleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteResponsabilitePedagogiqueEcoleDoctorale(responsabilitePedagogiqueEcoleDoctorale:ResponsabilitePedagogiqueEcoleDoctoraleVo){
       const isPermistted = await this.roleService.isPermitted("ResponsabilitePedagogiqueEcoleDoctorale", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the ResponsabilitePedagogiqueEcoleDoctorale ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.responsabilitePedagogiqueEcoleDoctoraleService.delete(responsabilitePedagogiqueEcoleDoctorale).subscribe(status=>{
                          if(status > 0){
                          const position = this.responsabilitePedagogiqueEcoleDoctorales.indexOf(responsabilitePedagogiqueEcoleDoctorale);
                          position > -1 ? this.responsabilitePedagogiqueEcoleDoctorales.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'ResponsabilitePedagogiqueEcoleDoctorale Deleted',
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

    get responsabilitePedagogiqueEcoleDoctorales(): Array<ResponsabilitePedagogiqueEcoleDoctoraleVo> {
           return this.responsabilitePedagogiqueEcoleDoctoraleService.responsabilitePedagogiqueEcoleDoctorales;
       }
    set responsabilitePedagogiqueEcoleDoctorales(value: Array<ResponsabilitePedagogiqueEcoleDoctoraleVo>) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.responsabilitePedagogiqueEcoleDoctorales = value;
       }

    get responsabilitePedagogiqueEcoleDoctoraleSelections(): Array<ResponsabilitePedagogiqueEcoleDoctoraleVo> {
           return this.responsabilitePedagogiqueEcoleDoctoraleService.responsabilitePedagogiqueEcoleDoctoraleSelections;
       }
    set responsabilitePedagogiqueEcoleDoctoraleSelections(value: Array<ResponsabilitePedagogiqueEcoleDoctoraleVo>) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.responsabilitePedagogiqueEcoleDoctoraleSelections = value;
       }
   
     


    get selectedResponsabilitePedagogiqueEcoleDoctorale():ResponsabilitePedagogiqueEcoleDoctoraleVo {
           return this.responsabilitePedagogiqueEcoleDoctoraleService.selectedResponsabilitePedagogiqueEcoleDoctorale;
       }
    set selectedResponsabilitePedagogiqueEcoleDoctorale(value: ResponsabilitePedagogiqueEcoleDoctoraleVo) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.selectedResponsabilitePedagogiqueEcoleDoctorale = value;
       }
    
    get createResponsabilitePedagogiqueEcoleDoctoraleDialog():boolean {
           return this.responsabilitePedagogiqueEcoleDoctoraleService.createResponsabilitePedagogiqueEcoleDoctoraleDialog;
       }
    set createResponsabilitePedagogiqueEcoleDoctoraleDialog(value: boolean) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.createResponsabilitePedagogiqueEcoleDoctoraleDialog= value;
       }
    
    get editResponsabilitePedagogiqueEcoleDoctoraleDialog():boolean {
           return this.responsabilitePedagogiqueEcoleDoctoraleService.editResponsabilitePedagogiqueEcoleDoctoraleDialog;
       }
    set editResponsabilitePedagogiqueEcoleDoctoraleDialog(value: boolean) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.editResponsabilitePedagogiqueEcoleDoctoraleDialog= value;
       }
    get viewResponsabilitePedagogiqueEcoleDoctoraleDialog():boolean {
           return this.responsabilitePedagogiqueEcoleDoctoraleService.viewResponsabilitePedagogiqueEcoleDoctoraleDialog;
       }
    set viewResponsabilitePedagogiqueEcoleDoctoraleDialog(value: boolean) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.viewResponsabilitePedagogiqueEcoleDoctoraleDialog = value;
       }
       
     get searchResponsabilitePedagogiqueEcoleDoctorale(): ResponsabilitePedagogiqueEcoleDoctoraleVo {
        return this.responsabilitePedagogiqueEcoleDoctoraleService.searchResponsabilitePedagogiqueEcoleDoctorale;
       }
    set searchResponsabilitePedagogiqueEcoleDoctorale(value: ResponsabilitePedagogiqueEcoleDoctoraleVo) {
        this.responsabilitePedagogiqueEcoleDoctoraleService.searchResponsabilitePedagogiqueEcoleDoctorale = value;
       }



}