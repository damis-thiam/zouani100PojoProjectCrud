import {Component, OnInit} from '@angular/core';
import {InstrumentsEtDispositifsIrdChercheurService} from '../../../controller/service/InstrumentsEtDispositifsIrdChercheur.service';
import {InstrumentsEtDispositifsIrdChercheurVo} from '../../../controller/model/InstrumentsEtDispositifsIrdChercheur.model';
import {TypeInstrumentsEtDispositifsIrdVo} from '../../../controller/model/TypeInstrumentsEtDispositifsIrd.model';
import {ChercheurVo} from '../../../controller/model/Chercheur.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-instrumentsEtDispositifsIrdChercheur-list',
  templateUrl: './instrumentsEtDispositifsIrdChercheur-list.component.html',
  styleUrls: ['./instrumentsEtDispositifsIrdChercheur-list.component.css']
})

export class InstrumentsEtDispositifsIrdChercheurListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private instrumentsEtDispositifsIrdChercheurService: InstrumentsEtDispositifsIrdChercheurService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadInstrumentsEtDispositifsIrdChercheurs();
    } 
    
    // methods 
    public async loadInstrumentsEtDispositifsIrdChercheurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrdChercheur", "list");
        isPermistted ? this.instrumentsEtDispositifsIrdChercheurService.findAll().subscribe(instrumentsEtDispositifsIrdChercheurs => this.instrumentsEtDispositifsIrdChercheurs = instrumentsEtDispositifsIrdChercheurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.instrumentsEtDispositifsIrdChercheurService.findByCriteria(this.searchInstrumentsEtDispositifsIrdChercheur).subscribe(instrumentsEtDispositifsIrdChercheurs=>{
            
            this.instrumentsEtDispositifsIrdChercheurs = instrumentsEtDispositifsIrdChercheurs;
           // this.searchInstrumentsEtDispositifsIrdChercheur = new InstrumentsEtDispositifsIrdChercheurVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'typeInstrumentsEtDispositifsIrd', header: 'typeInstrumentsEtDispositifsIrd'},
                {field: 'chercheur', header: 'chercheur'},
        ];
    }
    
    public async editInstrumentsEtDispositifsIrdChercheur(instrumentsEtDispositifsIrdChercheur:InstrumentsEtDispositifsIrdChercheurVo){
        const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrdChercheur", "edit");
         if(isPermistted){
         this.selectedInstrumentsEtDispositifsIrdChercheur = instrumentsEtDispositifsIrdChercheur;
         this.editInstrumentsEtDispositifsIrdChercheurDialog = true;
         this.instrumentsEtDispositifsIrdChercheurService.editInstrumentsEtDispositifsIrdChercheur$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewInstrumentsEtDispositifsIrdChercheur(instrumentsEtDispositifsIrdChercheur:InstrumentsEtDispositifsIrdChercheurVo){
        const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrdChercheur", "view");
        if(isPermistted){
       this.selectedInstrumentsEtDispositifsIrdChercheur = instrumentsEtDispositifsIrdChercheur;
        this.viewInstrumentsEtDispositifsIrdChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateInstrumentsEtDispositifsIrdChercheur(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedInstrumentsEtDispositifsIrdChercheur = new InstrumentsEtDispositifsIrdChercheurVo();
        this.createInstrumentsEtDispositifsIrdChercheurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteInstrumentsEtDispositifsIrdChercheur(instrumentsEtDispositifsIrdChercheur:InstrumentsEtDispositifsIrdChercheurVo){
       const isPermistted = await this.roleService.isPermitted("InstrumentsEtDispositifsIrdChercheur", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the InstrumentsEtDispositifsIrdChercheur ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.instrumentsEtDispositifsIrdChercheurService.delete(instrumentsEtDispositifsIrdChercheur).subscribe(status=>{
                          if(status > 0){
                          const position = this.instrumentsEtDispositifsIrdChercheurs.indexOf(instrumentsEtDispositifsIrdChercheur);
                          position > -1 ? this.instrumentsEtDispositifsIrdChercheurs.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'InstrumentsEtDispositifsIrdChercheur Deleted',
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

    get instrumentsEtDispositifsIrdChercheurs(): Array<InstrumentsEtDispositifsIrdChercheurVo> {
           return this.instrumentsEtDispositifsIrdChercheurService.instrumentsEtDispositifsIrdChercheurs;
       }
    set instrumentsEtDispositifsIrdChercheurs(value: Array<InstrumentsEtDispositifsIrdChercheurVo>) {
        this.instrumentsEtDispositifsIrdChercheurService.instrumentsEtDispositifsIrdChercheurs = value;
       }

    get instrumentsEtDispositifsIrdChercheurSelections(): Array<InstrumentsEtDispositifsIrdChercheurVo> {
           return this.instrumentsEtDispositifsIrdChercheurService.instrumentsEtDispositifsIrdChercheurSelections;
       }
    set instrumentsEtDispositifsIrdChercheurSelections(value: Array<InstrumentsEtDispositifsIrdChercheurVo>) {
        this.instrumentsEtDispositifsIrdChercheurService.instrumentsEtDispositifsIrdChercheurSelections = value;
       }
   
     


    get selectedInstrumentsEtDispositifsIrdChercheur():InstrumentsEtDispositifsIrdChercheurVo {
           return this.instrumentsEtDispositifsIrdChercheurService.selectedInstrumentsEtDispositifsIrdChercheur;
       }
    set selectedInstrumentsEtDispositifsIrdChercheur(value: InstrumentsEtDispositifsIrdChercheurVo) {
        this.instrumentsEtDispositifsIrdChercheurService.selectedInstrumentsEtDispositifsIrdChercheur = value;
       }
    
    get createInstrumentsEtDispositifsIrdChercheurDialog():boolean {
           return this.instrumentsEtDispositifsIrdChercheurService.createInstrumentsEtDispositifsIrdChercheurDialog;
       }
    set createInstrumentsEtDispositifsIrdChercheurDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdChercheurService.createInstrumentsEtDispositifsIrdChercheurDialog= value;
       }
    
    get editInstrumentsEtDispositifsIrdChercheurDialog():boolean {
           return this.instrumentsEtDispositifsIrdChercheurService.editInstrumentsEtDispositifsIrdChercheurDialog;
       }
    set editInstrumentsEtDispositifsIrdChercheurDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdChercheurService.editInstrumentsEtDispositifsIrdChercheurDialog= value;
       }
    get viewInstrumentsEtDispositifsIrdChercheurDialog():boolean {
           return this.instrumentsEtDispositifsIrdChercheurService.viewInstrumentsEtDispositifsIrdChercheurDialog;
       }
    set viewInstrumentsEtDispositifsIrdChercheurDialog(value: boolean) {
        this.instrumentsEtDispositifsIrdChercheurService.viewInstrumentsEtDispositifsIrdChercheurDialog = value;
       }
       
     get searchInstrumentsEtDispositifsIrdChercheur(): InstrumentsEtDispositifsIrdChercheurVo {
        return this.instrumentsEtDispositifsIrdChercheurService.searchInstrumentsEtDispositifsIrdChercheur;
       }
    set searchInstrumentsEtDispositifsIrdChercheur(value: InstrumentsEtDispositifsIrdChercheurVo) {
        this.instrumentsEtDispositifsIrdChercheurService.searchInstrumentsEtDispositifsIrdChercheur = value;
       }



}