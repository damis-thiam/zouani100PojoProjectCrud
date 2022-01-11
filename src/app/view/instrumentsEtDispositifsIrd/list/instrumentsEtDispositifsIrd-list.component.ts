import {Component, OnInit} from '@angular/core';
import {InstrumentsEtDispositifsIrdService} from '../../../controller/service/InstrumentsEtDispositifsIrd.service';
import {InstrumentsEtDispositifsIrdVo} from '../../../controller/model/InstrumentsEtDispositifsIrd.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-instrumentsEtDispositifsIrd-list',
  templateUrl: './instrumentsEtDispositifsIrd-list.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrd-list.component.css']
})

export class InstrumentsEtDispositifsIrdListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private instrumentsEtDispositifsIrdService: InstrumentsEtDispositifsIrdService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadInstrumentsEtDispositifsIrds();
    } 
    
    // methods 
    public async loadInstrumentsEtDispositifsIrds(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrd", "list");
        isPermistted ? this.instrumentsEtDispositifsIrdService.findAll().subscribe(instrumentsEtDispositifsIrds => this.instrumentsEtDispositifsIrds = instrumentsEtDispositifsIrds,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.instrumentsEtDispositifsIrdService.findByCriteria(this.searchInstrumentsEtDispositifsIrd).subscribe(instrumentsEtDispositifsIrds=>{
            
            this.instrumentsEtDispositifsIrds = instrumentsEtDispositifsIrds;
           // this.searchInstrumentsEtDispositifsIrd = new InstrumentsEtDispositifsIrdVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'libelle', header: 'libelle'},
                {field: 'code', header: 'code'},
                {field: 'description', header: 'description'},
        ];
    }
    
    public async editInstrumentsEtDispositifsIrd(instrumentsEtDispositifsIrd:InstrumentsEtDispositifsIrdVo){
        const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrd", "edit");
         if(isPermistted){
         this.selectedInstrumentsEtDispositifsIrd = instrumentsEtDispositifsIrd;
         this.editInstrumentsEtDispositifsIrdDialog = true;
         this.instrumentsEtDispositifsIrdService.editInstrumentsEtDispositifsIrd$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewInstrumentsEtDispositifsIrd(instrumentsEtDispositifsIrd:InstrumentsEtDispositifsIrdVo){
        const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrd", "view");
        if(isPermistted){
       this.selectedInstrumentsEtDispositifsIrd = instrumentsEtDispositifsIrd;
        this.viewInstrumentsEtDispositifsIrdDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateInstrumentsEtDispositifsIrd(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedInstrumentsEtDispositifsIrd = new InstrumentsEtDispositifsIrdVo();
        this.createInstrumentsEtDispositifsIrdDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteInstrumentsEtDispositifsIrd(instrumentsEtDispositifsIrd:InstrumentsEtDispositifsIrdVo){
       const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrd", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the InstrumentsEtDispositifsIrd ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.instrumentsEtDispositifsIrdService.delete(instrumentsEtDispositifsIrd).subscribe(status=>{
                          if(status > 0){
                          const position = this.instrumentsEtDispositifsIrds.indexOf(instrumentsEtDispositifsIrd);
                          position > -1 ? this.instrumentsEtDispositifsIrds.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'InstrumentsEtDispositifsIrd Deleted',
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

    get instrumentsEtDispositifsIrds(): Array<InstrumentsEtDispositifsIrdVo> {
           return this.instrumentsEtDispositifsIrdService.instrumentsEtDispositifsIrds;
       }
    set instrumentsEtDispositifsIrds(value: Array<InstrumentsEtDispositifsIrdVo>) {
        this.instrumentsEtDispositifsIrdService.instrumentsEtDispositifsIrds = value;
       }

    get instrumentsEtDispositifsIrdSelections(): Array<InstrumentsEtDispositifsIrdVo> {
           return this.instrumentsEtDispositifsIrdService.instrumentsEtDispositifsIrdSelections;
       }
    set instrumentsEtDispositifsIrdSelections(value: Array<InstrumentsEtDispositifsIrdVo>) {
        this.instrumentsEtDispositifsIrdService.instrumentsEtDispositifsIrdSelections = value;
       }
   
     


    get selectedInstrumentsEtDispositifsIrd():InstrumentsEtDispositifsIrdVo {
           return this.instrumentsEtDispositifsIrdService.selectedInstrumentsEtDispositifsIrd;
       }
    set selectedInstrumentsEtDispositifsIrd(value: InstrumentsEtDispositifsIrdVo) {
        this.instrumentsEtDispositifsIrdService.selectedInstrumentsEtDispositifsIrd = value;
       }
    
    get createInstrumentsEtDispositifsIrdDialog():boolean {
           return this.instrumentsEtDispositifsIrdService.createInstrumentsEtDispositifsIrdDialog;
       }
    set createInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdService.createInstrumentsEtDispositifsIrdDialog= value;
       }
    
    get editInstrumentsEtDispositifsIrdDialog():boolean {
           return this.instrumentsEtDispositifsIrdService.editInstrumentsEtDispositifsIrdDialog;
       }
    set editInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdService.editInstrumentsEtDispositifsIrdDialog= value;
       }
    get viewInstrumentsEtDispositifsIrdDialog():boolean {
           return this.instrumentsEtDispositifsIrdService.viewInstrumentsEtDispositifsIrdDialog;
       }
    set viewInstrumentsEtDispositifsIrdDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdService.viewInstrumentsEtDispositifsIrdDialog = value;
       }
       
     get searchInstrumentsEtDispositifsIrd(): InstrumentsEtDispositifsIrdVo {
        return this.instrumentsEtDispositifsIrdService.searchInstrumentsEtDispositifsIrd;
       }
    set searchInstrumentsEtDispositifsIrd(value: InstrumentsEtDispositifsIrdVo) {
        this.instrumentsEtDispositifsIrdService.searchInstrumentsEtDispositifsIrd = value;
       }



}