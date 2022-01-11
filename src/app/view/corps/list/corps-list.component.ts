import {Component, OnInit} from '@angular/core';
import {CorpsService} from '../../../controller/service/Corps.service';
import {CorpsVo} from '../../../controller/model/Corps.model';
import { MessageService,ConfirmationService } from 'primeng/api';
import { RoleService } from 'src/app/controller/service/role.service';
@Component({
  selector: 'app-corps-list',
  templateUrl: './corps-list.component.html',
  styleUrls: ['./corps-list.component.css']
})

export class CorpsListComponent implements OnInit {
    // declarations
    findByCriteriaShow:boolean=false;
     cols: any[] = [];

    constructor(private corpsService: CorpsService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService) { }

    ngOnInit(): void {
      this.loadCorpss();
    } 
    
    // methods 
    public async loadCorpss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted("Corps", "list");
        isPermistted ? this.corpsService.findAll().subscribe(corpss => this.corpss = corpss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: "", detail: "you don't have enough permissions"});
    }

 public searchRequest(){
        this.corpsService.findByCriteria(this.searchCorps).subscribe(corpss=>{
            
            this.corpss = corpss;
           // this.searchCorps = new CorpsVo();
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
    
    public async editCorps(corps:CorpsVo){
        const isPermistted = await this.roleService.isPermitted("Corps", "edit");
         if(isPermistted){
         this.selectedCorps = corps;
         this.editCorpsDialog = true;
         this.corpsService.editCorps$.next(true);
         }else{
            this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
         }
       
    }
    


    public async viewCorps(corps:CorpsVo){
        const isPermistted = await this.roleService.isPermitted("Corps", "view");
        if(isPermistted){
       this.selectedCorps = corps;
        this.viewCorpsDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
        
    }
    
    public async openCreateCorps(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, "add");
        if(isPermistted){
         this.selectedCorps = new CorpsVo();
        this.createCorpsDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: "", detail: "you don't have enough permissions"
            });
        }
       
    }

    public async deleteCorps(corps:CorpsVo){
       const isPermistted = await this.roleService.isPermitted("Corps", "delete");
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Are you sure you want to delete the Corps ?',
                      header: 'Confirm',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.corpsService.delete(corps).subscribe(status=>{
                          if(status > 0){
                          const position = this.corpss.indexOf(corps);
                          position > -1 ? this.corpss.splice(position, 1) : false;
                                     }
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Corps Deleted',
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

    get corpss(): Array<CorpsVo> {
           return this.corpsService.corpss;
       }
    set corpss(value: Array<CorpsVo>) {
        this.corpsService.corpss = value;
       }

    get corpsSelections(): Array<CorpsVo> {
           return this.corpsService.corpsSelections;
       }
    set corpsSelections(value: Array<CorpsVo>) {
        this.corpsService.corpsSelections = value;
       }
   
     


    get selectedCorps():CorpsVo {
           return this.corpsService.selectedCorps;
       }
    set selectedCorps(value: CorpsVo) {
        this.corpsService.selectedCorps = value;
       }
    
    get createCorpsDialog():boolean {
           return this.corpsService.createCorpsDialog;
       }
    set createCorpsDialog(value: boolean) {
        this.corpsService.createCorpsDialog= value;
       }
    
    get editCorpsDialog():boolean {
           return this.corpsService.editCorpsDialog;
       }
    set editCorpsDialog(value: boolean) {
        this.corpsService.editCorpsDialog= value;
       }
    get viewCorpsDialog():boolean {
           return this.corpsService.viewCorpsDialog;
       }
    set viewCorpsDialog(value: boolean) {
        this.corpsService.viewCorpsDialog = value;
       }
       
     get searchCorps(): CorpsVo {
        return this.corpsService.searchCorps;
       }
    set searchCorps(value: CorpsVo) {
        this.corpsService.searchCorps = value;
       }



}