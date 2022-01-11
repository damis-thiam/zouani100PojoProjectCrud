import {Component, OnInit} from '@angular/core';
import {PaysCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/PaysCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/PaysCultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-paysCultureScientifiqueRecontreGrandPublicJeunePublic-list',
  templateUrl: './paysCultureScientifiqueRecontreGrandPublicJeunePublic-list.component.html',
  styleUrls: ['./paysCultureScientifiqueRecontreGrandPublicJeunePublic-list.component.css']
})

export class PaysCultureScientifiqueRecontreGrandPublicJeunePublicListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private paysCultureScientifiqueRecontreGrandPublicJeunePublicService: PaysCultureScientifiqueRecontreGrandPublicJeunePublicService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadPaysCultureScientifiqueRecontreGrandPublicJeunePublics();
    } 
    
    // methods 
    public async loadPaysCultureScientifiqueRecontreGrandPublicJeunePublics(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("PaysCultureScientifiqueRecontreGrandPublicJeunePublic", "list");
        isPermistted ? this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.findAll().subscribe(paysCultureScientifiqueRecontreGrandPublicJeunePublics => this.paysCultureScientifiqueRecontreGrandPublicJeunePublics = paysCultureScientifiqueRecontreGrandPublicJeunePublics,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.findByCriteria(this.searchPaysCultureScientifiqueRecontreGrandPublicJeunePublic).subscribe(paysCultureScientifiqueRecontreGrandPublicJeunePublics=>{
            
            this.paysCultureScientifiqueRecontreGrandPublicJeunePublics = paysCultureScientifiqueRecontreGrandPublicJeunePublics;
           // this.searchPaysCultureScientifiqueRecontreGrandPublicJeunePublic = new PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'pays', header: 'pays'},
                {field: 'cultureScientifiqueRecontreGrandPublicJeunePublic', header: 'cultureScientifiqueRecontreGrandPublicJeunePublic'},
        ];
    }
    
    public async editPaysCultureScientifiqueRecontreGrandPublicJeunePublic(paysCultureScientifiqueRecontreGrandPublicJeunePublic:PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo){
        const isPermistted = await this.roleService.isPermitted("PaysCultureScientifiqueRecontreGrandPublicJeunePublic", "edit");
         if(isPermistted){
         this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = paysCultureScientifiqueRecontreGrandPublicJeunePublic;
         this.editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
         this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.editPaysCultureScientifiqueRecontreGrandPublicJeunePublic$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewPaysCultureScientifiqueRecontreGrandPublicJeunePublic(paysCultureScientifiqueRecontreGrandPublicJeunePublic:PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo){
        const isPermistted = await this.roleService.isPermitted("PaysCultureScientifiqueRecontreGrandPublicJeunePublic", "view");
        if(isPermistted){
       this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = paysCultureScientifiqueRecontreGrandPublicJeunePublic;
        this.viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreatePaysCultureScientifiqueRecontreGrandPublicJeunePublic(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = new PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo();
        this.createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deletePaysCultureScientifiqueRecontreGrandPublicJeunePublic(paysCultureScientifiqueRecontreGrandPublicJeunePublic:PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo){
       const isPermistted = await this.roleService.isPermitted("PaysCultureScientifiqueRecontreGrandPublicJeunePublic", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the PaysCultureScientifiqueRecontreGrandPublicJeunePublic ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.delete(paysCultureScientifiqueRecontreGrandPublicJeunePublic).subscribe(status=>{
                          if(status > 0){
                          const position = this.paysCultureScientifiqueRecontreGrandPublicJeunePublics.indexOf(paysCultureScientifiqueRecontreGrandPublicJeunePublic);
                          position > -1 ? this.paysCultureScientifiqueRecontreGrandPublicJeunePublics.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'PaysCultureScientifiqueRecontreGrandPublicJeunePublic Deleted',
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

    get paysCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
           return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.paysCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
    set paysCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.paysCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       }

    get paysCultureScientifiqueRecontreGrandPublicJeunePublicSelections(): Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
           return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.paysCultureScientifiqueRecontreGrandPublicJeunePublicSelections;
       }
    set paysCultureScientifiqueRecontreGrandPublicJeunePublicSelections(value: Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.paysCultureScientifiqueRecontreGrandPublicJeunePublicSelections = value;
       }
   
     


    get selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic():PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic(value: PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
    
    get createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }
    
    get editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.editPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }
    get viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.viewPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = value;
       }
       
     get searchPaysCultureScientifiqueRecontreGrandPublicJeunePublic(): PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo {
        return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.searchPaysCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set searchPaysCultureScientifiqueRecontreGrandPublicJeunePublic(value: PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.searchPaysCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }



}