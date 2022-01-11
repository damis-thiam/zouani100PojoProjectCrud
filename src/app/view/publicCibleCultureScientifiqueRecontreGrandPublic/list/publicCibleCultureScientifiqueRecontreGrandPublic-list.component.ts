import {Component, OnInit} from '@angular/core';
import {PublicCibleCultureScientifiqueRecontreGrandPublicService} from '../../../controller/service/PublicCibleCultureScientifiqueRecontreGrandPublic.service';
import {PublicCibleCultureScientifiqueRecontreGrandPublicVo} from '../../../controller/model/PublicCibleCultureScientifiqueRecontreGrandPublic.model';
import {PublicCibleVo} from '../../../controller/model/PublicCible.model';
import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
import {PaysVo} from '../../../controller/model/Pays.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-publicCibleCultureScientifiqueRecontreGrandPublic-list',
  templateUrl: './publicCibleCultureScientifiqueRecontreGrandPublic-list.component.html',
  styleUrls: ['./publicCibleCultureScientifiqueRecontreGrandPublic-list.component.css']
})

export class PublicCibleCultureScientifiqueRecontreGrandPublicListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private publicCibleCultureScientifiqueRecontreGrandPublicService: PublicCibleCultureScientifiqueRecontreGrandPublicService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadPublicCibleCultureScientifiqueRecontreGrandPublics();
    } 
    
    // methods 
    public async loadPublicCibleCultureScientifiqueRecontreGrandPublics(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("PublicCibleCultureScientifiqueRecontreGrandPublic", "list");
        isPermistted ? this.publicCibleCultureScientifiqueRecontreGrandPublicService.findAll().subscribe(publicCibleCultureScientifiqueRecontreGrandPublics => this.publicCibleCultureScientifiqueRecontreGrandPublics = publicCibleCultureScientifiqueRecontreGrandPublics,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.findByCriteria(this.searchPublicCibleCultureScientifiqueRecontreGrandPublic).subscribe(publicCibleCultureScientifiqueRecontreGrandPublics=>{
            
            this.publicCibleCultureScientifiqueRecontreGrandPublics = publicCibleCultureScientifiqueRecontreGrandPublics;
           // this.searchPublicCibleCultureScientifiqueRecontreGrandPublic = new PublicCibleCultureScientifiqueRecontreGrandPublicVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                {field: 'id', header: 'id'},
                {field: 'publicCible', header: 'publicCible'},
                {field: 'pays', header: 'pays'},
                {field: 'cultureScientifiqueRecontreGrandPublic', header: 'cultureScientifiqueRecontreGrandPublic'},
        ];
    }
    
    public async editPublicCibleCultureScientifiqueRecontreGrandPublic(publicCibleCultureScientifiqueRecontreGrandPublic:PublicCibleCultureScientifiqueRecontreGrandPublicVo){
        const isPermistted = await this.roleService.isPermitted("PublicCibleCultureScientifiqueRecontreGrandPublic", "edit");
         if(isPermistted){
         this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic = publicCibleCultureScientifiqueRecontreGrandPublic;
         this.editPublicCibleCultureScientifiqueRecontreGrandPublicDialog = true;
         this.publicCibleCultureScientifiqueRecontreGrandPublicService.editPublicCibleCultureScientifiqueRecontreGrandPublic$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewPublicCibleCultureScientifiqueRecontreGrandPublic(publicCibleCultureScientifiqueRecontreGrandPublic:PublicCibleCultureScientifiqueRecontreGrandPublicVo){
        const isPermistted = await this.roleService.isPermitted("PublicCibleCultureScientifiqueRecontreGrandPublic", "view");
        if(isPermistted){
       this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic = publicCibleCultureScientifiqueRecontreGrandPublic;
        this.viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreatePublicCibleCultureScientifiqueRecontreGrandPublic(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedPublicCibleCultureScientifiqueRecontreGrandPublic = new PublicCibleCultureScientifiqueRecontreGrandPublicVo();
        this.createPublicCibleCultureScientifiqueRecontreGrandPublicDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deletePublicCibleCultureScientifiqueRecontreGrandPublic(publicCibleCultureScientifiqueRecontreGrandPublic:PublicCibleCultureScientifiqueRecontreGrandPublicVo){
       const isPermistted = await this.roleService.isPermitted("PublicCibleCultureScientifiqueRecontreGrandPublic", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the PublicCibleCultureScientifiqueRecontreGrandPublic ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.publicCibleCultureScientifiqueRecontreGrandPublicService.delete(publicCibleCultureScientifiqueRecontreGrandPublic).subscribe(status=>{
                          if(status > 0){
                          const position = this.publicCibleCultureScientifiqueRecontreGrandPublics.indexOf(publicCibleCultureScientifiqueRecontreGrandPublic);
                          position > -1 ? this.publicCibleCultureScientifiqueRecontreGrandPublics.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'PublicCibleCultureScientifiqueRecontreGrandPublic Deleted',
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

    get publicCibleCultureScientifiqueRecontreGrandPublics(): Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo> {
           return this.publicCibleCultureScientifiqueRecontreGrandPublicService.publicCibleCultureScientifiqueRecontreGrandPublics;
       }
    set publicCibleCultureScientifiqueRecontreGrandPublics(value: Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.publicCibleCultureScientifiqueRecontreGrandPublics = value;
       }

    get publicCibleCultureScientifiqueRecontreGrandPublicSelections(): Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo> {
           return this.publicCibleCultureScientifiqueRecontreGrandPublicService.publicCibleCultureScientifiqueRecontreGrandPublicSelections;
       }
    set publicCibleCultureScientifiqueRecontreGrandPublicSelections(value: Array<PublicCibleCultureScientifiqueRecontreGrandPublicVo>) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.publicCibleCultureScientifiqueRecontreGrandPublicSelections = value;
       }
   
     


    get selectedPublicCibleCultureScientifiqueRecontreGrandPublic():PublicCibleCultureScientifiqueRecontreGrandPublicVo {
           return this.publicCibleCultureScientifiqueRecontreGrandPublicService.selectedPublicCibleCultureScientifiqueRecontreGrandPublic;
       }
    set selectedPublicCibleCultureScientifiqueRecontreGrandPublic(value: PublicCibleCultureScientifiqueRecontreGrandPublicVo) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.selectedPublicCibleCultureScientifiqueRecontreGrandPublic = value;
       }
    
    get createPublicCibleCultureScientifiqueRecontreGrandPublicDialog():boolean {
           return this.publicCibleCultureScientifiqueRecontreGrandPublicService.createPublicCibleCultureScientifiqueRecontreGrandPublicDialog;
       }
    set createPublicCibleCultureScientifiqueRecontreGrandPublicDialog(value: boolean) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.createPublicCibleCultureScientifiqueRecontreGrandPublicDialog= value;
       }
    
    get editPublicCibleCultureScientifiqueRecontreGrandPublicDialog():boolean {
           return this.publicCibleCultureScientifiqueRecontreGrandPublicService.editPublicCibleCultureScientifiqueRecontreGrandPublicDialog;
       }
    set editPublicCibleCultureScientifiqueRecontreGrandPublicDialog(value: boolean) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.editPublicCibleCultureScientifiqueRecontreGrandPublicDialog= value;
       }
    get viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog():boolean {
           return this.publicCibleCultureScientifiqueRecontreGrandPublicService.viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog;
       }
    set viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog(value: boolean) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.viewPublicCibleCultureScientifiqueRecontreGrandPublicDialog = value;
       }
       
     get searchPublicCibleCultureScientifiqueRecontreGrandPublic(): PublicCibleCultureScientifiqueRecontreGrandPublicVo {
        return this.publicCibleCultureScientifiqueRecontreGrandPublicService.searchPublicCibleCultureScientifiqueRecontreGrandPublic;
       }
    set searchPublicCibleCultureScientifiqueRecontreGrandPublic(value: PublicCibleCultureScientifiqueRecontreGrandPublicVo) {
        this.publicCibleCultureScientifiqueRecontreGrandPublicService.searchPublicCibleCultureScientifiqueRecontreGrandPublic = value;
       }



}