import {Component, OnInit} from '@angular/core';
import {DoctorantService} from '../../../controller/service/Doctorant.service';
import {DoctorantVo} from '../../../controller/model/Doctorant.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-doctorant-list',
  templateUrl: './doctorant-list.component.html',
  styleUrls: ['./doctorant-list.component.css']
})

export class DoctorantListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private doctorantService: DoctorantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadDoctorants();
    } 
    
    // methods 
    public async loadDoctorants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Doctorant", "list");
        isPermistted ? this.doctorantService.findAll().subscribe(doctorants => this.doctorants = doctorants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.doctorantService.findByCriteria(this.searchDoctorant).subscribe(doctorants=>{
            
            this.doctorants = doctorants;
           // this.searchDoctorant = new DoctorantVo();
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
    
    public async editDoctorant(doctorant:DoctorantVo){
        const isPermistted = await this.roleService.isPermitted("Doctorant", "edit");
         if(isPermistted){
         this.selectedDoctorant = doctorant;
         this.editDoctorantDialog = true;
         this.doctorantService.editDoctorant$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewDoctorant(doctorant:DoctorantVo){
        const isPermistted = await this.roleService.isPermitted("Doctorant", "view");
        if(isPermistted){
       this.selectedDoctorant = doctorant;
        this.viewDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateDoctorant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedDoctorant = new DoctorantVo();
        this.createDoctorantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteDoctorant(doctorant:DoctorantVo){
       const isPermistted = await this.roleService.isPermitted("Doctorant", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Doctorant ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.doctorantService.delete(doctorant).subscribe(status=>{
                          if(status > 0){
                          const position = this.doctorants.indexOf(doctorant);
                          position > -1 ? this.doctorants.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Doctorant Deleted',
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

    get doctorants(): Array<DoctorantVo> {
           return this.doctorantService.doctorants;
       }
    set doctorants(value: Array<DoctorantVo>) {
        this.doctorantService.doctorants = value;
       }

    get doctorantSelections(): Array<DoctorantVo> {
           return this.doctorantService.doctorantSelections;
       }
    set doctorantSelections(value: Array<DoctorantVo>) {
        this.doctorantService.doctorantSelections = value;
       }
   
     


    get selectedDoctorant():DoctorantVo {
           return this.doctorantService.selectedDoctorant;
       }
    set selectedDoctorant(value: DoctorantVo) {
        this.doctorantService.selectedDoctorant = value;
       }
    
    get createDoctorantDialog():boolean {
           return this.doctorantService.createDoctorantDialog;
       }
    set createDoctorantDialog(value: boolean) {
        this.doctorantService.createDoctorantDialog= value;
       }
    
    get editDoctorantDialog():boolean {
           return this.doctorantService.editDoctorantDialog;
       }
    set editDoctorantDialog(value: boolean) {
        this.doctorantService.editDoctorantDialog= value;
       }
    get viewDoctorantDialog():boolean {
           return this.doctorantService.viewDoctorantDialog;
       }
    set viewDoctorantDialog(value: boolean) {
        this.doctorantService.viewDoctorantDialog = value;
       }
       
     get searchDoctorant(): DoctorantVo {
        return this.doctorantService.searchDoctorant;
       }
    set searchDoctorant(value: DoctorantVo) {
        this.doctorantService.searchDoctorant = value;
       }



}