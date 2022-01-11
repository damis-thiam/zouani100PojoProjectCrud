import {Component, OnInit} from '@angular/core';
import {EtudiantService} from '../../../controller/service/Etudiant.service';
import {EtudiantVo} from '../../../controller/model/Etudiant.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})

export class EtudiantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private etudiantService: EtudiantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadEtudiants();
    } 
    
    // methods 
    public async loadEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Etudiant", "list");
        isPermistted ? this.etudiantService.findAll().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.etudiantService.findByCriteria(this.searchEtudiant).subscribe(etudiants=>{
            
            this.etudiants = etudiants;
           // this.searchEtudiant = new EtudiantVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'nom', header: 'nom'},
                {field: 'prenom', header: 'prenom'},
                {field: 'sexe', header: 'sexe'},
                {field: 'anneeNaissance', header: 'anneeNaissance'},
                {field: 'paysNationnalite', header: 'paysNationnalite'},
        ];
    }
    
    public async editEtudiant(etudiant:EtudiantVo){
        const isPermistted = await this.roleService.isPermitted("Etudiant", "edit");
         if(isPermistted){
         this.selectedEtudiant = etudiant;
         this.editEtudiantDialog = true;
         this.etudiantService.editEtudiant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewEtudiant(etudiant:EtudiantVo){
        const isPermistted = await this.roleService.isPermitted("Etudiant", "view");
        if(isPermistted){
       this.selectedEtudiant = etudiant;
        this.viewEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateEtudiant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedEtudiant = new EtudiantVo();
        this.createEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteEtudiant(etudiant:EtudiantVo){
       const isPermistted = await this.roleService.isPermitted("Etudiant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Etudiant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.etudiantService.delete(etudiant).subscribe(status=>{
                          if(status > 0){
                          const position = this.etudiants.indexOf(etudiant);
                          position > -1 ? this.etudiants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Etudiant Deleted',
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

    get etudiants(): Array<EtudiantVo> {
           return this.etudiantService.etudiants;
       }
    set etudiants(value: Array<EtudiantVo>) {
        this.etudiantService.etudiants = value;
       }

    get etudiantSelections(): Array<EtudiantVo> {
           return this.etudiantService.etudiantSelections;
       }
    set etudiantSelections(value: Array<EtudiantVo>) {
        this.etudiantService.etudiantSelections = value;
       }
   
     


    get selectedEtudiant():EtudiantVo {
           return this.etudiantService.selectedEtudiant;
       }
    set selectedEtudiant(value: EtudiantVo) {
        this.etudiantService.selectedEtudiant = value;
       }
    
    get createEtudiantDialog():boolean {
           return this.etudiantService.createEtudiantDialog;
       }
    set createEtudiantDialog(value: boolean) {
        this.etudiantService.createEtudiantDialog= value;
       }
    
    get editEtudiantDialog():boolean {
           return this.etudiantService.editEtudiantDialog;
       }
    set editEtudiantDialog(value: boolean) {
        this.etudiantService.editEtudiantDialog= value;
       }
    get viewEtudiantDialog():boolean {
           return this.etudiantService.viewEtudiantDialog;
       }
    set viewEtudiantDialog(value: boolean) {
        this.etudiantService.viewEtudiantDialog = value;
       }
       
     get searchEtudiant(): EtudiantVo {
        return this.etudiantService.searchEtudiant;
       }
    set searchEtudiant(value: EtudiantVo) {
        this.etudiantService.searchEtudiant = value;
       }



}