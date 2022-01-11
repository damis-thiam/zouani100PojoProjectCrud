import {Component, OnInit} from '@angular/core';
import {PaysService} from '../../../controller/service/Pays.service';
import {PaysVo} from '../../../controller/model/Pays.model';
import {ContinentVo} from '../../../controller/model/Continent.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-pays-list',
  templateUrl: './pays-list.component.html',
  styleUrls: ['./pays-list.component.css']
})

export class PaysListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private paysService: PaysService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadPayss();
    } 
    
    // methods 
    public async loadPayss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Pays", "list");
        isPermistted ? this.paysService.findAll().subscribe(payss => this.payss = payss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.paysService.findByCriteria(this.searchPays).subscribe(payss=>{
            
            this.payss = payss;
           // this.searchPays = new PaysVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
                {field: 'continent', header: 'continent'},
        ];
    }
    
    public async editPays(pays:PaysVo){
        const isPermistted = await this.roleService.isPermitted("Pays", "edit");
         if(isPermistted){
         this.selectedPays = pays;
         this.editPaysDialog = true;
         this.paysService.editPays$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewPays(pays:PaysVo){
        const isPermistted = await this.roleService.isPermitted("Pays", "view");
        if(isPermistted){
       this.selectedPays = pays;
        this.viewPaysDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreatePays(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedPays = new PaysVo();
        this.createPaysDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deletePays(pays:PaysVo){
       const isPermistted = await this.roleService.isPermitted("Pays", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Pays ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.paysService.delete(pays).subscribe(status=>{
                          if(status > 0){
                          const position = this.payss.indexOf(pays);
                          position > -1 ? this.payss.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Pays Deleted',
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

    get payss(): Array<PaysVo> {
           return this.paysService.payss;
       }
    set payss(value: Array<PaysVo>) {
        this.paysService.payss = value;
       }

    get paysSelections(): Array<PaysVo> {
           return this.paysService.paysSelections;
       }
    set paysSelections(value: Array<PaysVo>) {
        this.paysService.paysSelections = value;
       }
   
     


    get selectedPays():PaysVo {
           return this.paysService.selectedPays;
       }
    set selectedPays(value: PaysVo) {
        this.paysService.selectedPays = value;
       }
    
    get createPaysDialog():boolean {
           return this.paysService.createPaysDialog;
       }
    set createPaysDialog(value: boolean) {
        this.paysService.createPaysDialog= value;
       }
    
    get editPaysDialog():boolean {
           return this.paysService.editPaysDialog;
       }
    set editPaysDialog(value: boolean) {
        this.paysService.editPaysDialog= value;
       }
    get viewPaysDialog():boolean {
           return this.paysService.viewPaysDialog;
       }
    set viewPaysDialog(value: boolean) {
        this.paysService.viewPaysDialog = value;
       }
       
     get searchPays(): PaysVo {
        return this.paysService.searchPays;
       }
    set searchPays(value: PaysVo) {
        this.paysService.searchPays = value;
       }



}