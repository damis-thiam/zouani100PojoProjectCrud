import {Component, OnInit} from '@angular/core';
import {InstrumentsEtDispositifsIrdProjetActiviteRechercheService} from '../../../controller/service/InstrumentsEtDispositifsIrdProjetActiviteRecherche.service';
import {InstrumentsEtDispositifsIrdProjetActiviteRechercheVo} from '../../../controller/model/InstrumentsEtDispositifsIrdProjetActiviteRecherche.model';
import {ProjetActiviteRechercheVo} from '../../../controller/model/ProjetActiviteRecherche.model';
import {InstrumentsEtDispositifsIrdVo} from '../../../controller/model/InstrumentsEtDispositifsIrd.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-instrumentsEtDispositifsIrdProjetActiviteRecherche-list',
  templateUrl: './instrumentsEtDispositifsIrdProjetActiviteRecherche-list.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrdProjetActiviteRecherche-list.component.css']
})

export class InstrumentsEtDispositifsIrdProjetActiviteRechercheListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private instrumentsEtDispositifsIrdProjetActiviteRechercheService: InstrumentsEtDispositifsIrdProjetActiviteRechercheService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadInstrumentsEtDispositifsIrdProjetActiviteRecherches();
    } 
    
    // methods 
    public async loadInstrumentsEtDispositifsIrdProjetActiviteRecherches(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrdProjetActiviteRecherche", "list");
        isPermistted ? this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.findAll().subscribe(instrumentsEtDispositifsIrdProjetActiviteRecherches => this.instrumentsEtDispositifsIrdProjetActiviteRecherches = instrumentsEtDispositifsIrdProjetActiviteRecherches,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.findByCriteria(this.searchInstrumentsEtDispositifsIrdProjetActiviteRecherche).subscribe(instrumentsEtDispositifsIrdProjetActiviteRecherches=>{
            
            this.instrumentsEtDispositifsIrdProjetActiviteRecherches = instrumentsEtDispositifsIrdProjetActiviteRecherches;
           // this.searchInstrumentsEtDispositifsIrdProjetActiviteRecherche = new InstrumentsEtDispositifsIrdProjetActiviteRechercheVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'projetActiviteRecherche', header: 'projetActiviteRecherche'},
                {field: 'instrumentsEtDispositifsIrd', header: 'instrumentsEtDispositifsIrd'},
        ];
    }
    
    public async editInstrumentsEtDispositifsIrdProjetActiviteRecherche(instrumentsEtDispositifsIrdProjetActiviteRecherche:InstrumentsEtDispositifsIrdProjetActiviteRechercheVo){
        const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrdProjetActiviteRecherche", "edit");
         if(isPermistted){
         this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche = instrumentsEtDispositifsIrdProjetActiviteRecherche;
         this.editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = true;
         this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.editInstrumentsEtDispositifsIrdProjetActiviteRecherche$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewInstrumentsEtDispositifsIrdProjetActiviteRecherche(instrumentsEtDispositifsIrdProjetActiviteRecherche:InstrumentsEtDispositifsIrdProjetActiviteRechercheVo){
        const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrdProjetActiviteRecherche", "view");
        if(isPermistted){
       this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche = instrumentsEtDispositifsIrdProjetActiviteRecherche;
        this.viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateInstrumentsEtDispositifsIrdProjetActiviteRecherche(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche = new InstrumentsEtDispositifsIrdProjetActiviteRechercheVo();
        this.createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteInstrumentsEtDispositifsIrdProjetActiviteRecherche(instrumentsEtDispositifsIrdProjetActiviteRecherche:InstrumentsEtDispositifsIrdProjetActiviteRechercheVo){
       const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrdProjetActiviteRecherche", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the InstrumentsEtDispositifsIrdProjetActiviteRecherche ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.delete(instrumentsEtDispositifsIrdProjetActiviteRecherche).subscribe(status=>{
                          if(status > 0){
                          const position = this.instrumentsEtDispositifsIrdProjetActiviteRecherches.indexOf(instrumentsEtDispositifsIrdProjetActiviteRecherche);
                          position > -1 ? this.instrumentsEtDispositifsIrdProjetActiviteRecherches.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'InstrumentsEtDispositifsIrdProjetActiviteRecherche Deleted',
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

    get instrumentsEtDispositifsIrdProjetActiviteRecherches(): Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo> {
           return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.instrumentsEtDispositifsIrdProjetActiviteRecherches;
       }
    set instrumentsEtDispositifsIrdProjetActiviteRecherches(value: Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.instrumentsEtDispositifsIrdProjetActiviteRecherches = value;
       }

    get instrumentsEtDispositifsIrdProjetActiviteRechercheSelections(): Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo> {
           return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.instrumentsEtDispositifsIrdProjetActiviteRechercheSelections;
       }
    set instrumentsEtDispositifsIrdProjetActiviteRechercheSelections(value: Array<InstrumentsEtDispositifsIrdProjetActiviteRechercheVo>) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.instrumentsEtDispositifsIrdProjetActiviteRechercheSelections = value;
       }
   
     


    get selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche():InstrumentsEtDispositifsIrdProjetActiviteRechercheVo {
           return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche;
       }
    set selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche(value: InstrumentsEtDispositifsIrdProjetActiviteRechercheVo) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.selectedInstrumentsEtDispositifsIrdProjetActiviteRecherche = value;
       }
    
    get createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog():boolean {
           return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog;
       }
    set createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.createInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog= value;
       }
    
    get editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog():boolean {
           return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog;
       }
    set editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.editInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog= value;
       }
    get viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog():boolean {
           return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog;
       }
    set viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.viewInstrumentsEtDispositifsIrdProjetActiviteRechercheDialog = value;
       }
       
     get searchInstrumentsEtDispositifsIrdProjetActiviteRecherche(): InstrumentsEtDispositifsIrdProjetActiviteRechercheVo {
        return this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.searchInstrumentsEtDispositifsIrdProjetActiviteRecherche;
       }
    set searchInstrumentsEtDispositifsIrdProjetActiviteRecherche(value: InstrumentsEtDispositifsIrdProjetActiviteRechercheVo) {
        this.instrumentsEtDispositifsIrdProjetActiviteRechercheService.searchInstrumentsEtDispositifsIrdProjetActiviteRecherche = value;
       }



}