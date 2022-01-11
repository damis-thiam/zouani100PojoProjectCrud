import {Component, OnInit} from '@angular/core';
import {DoctorantService} from '../../../controller/service/Doctorant.service';
import {DoctorantVo} from '../../../controller/model/Doctorant.model';
      import {SexeVo} from '../../../controller/model/Sexe.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-doctorant-create',
  templateUrl: './doctorant-create.component.html',
  styleUrls: ['./doctorant-create.component.css']
})
export class DoctorantCreateComponent implements OnInit {

constructor(private doctorantService: DoctorantService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.doctorantService.save().subscribe(doctorant=>{
          
       this.doctorants.push({...doctorant});
       this.createDoctorantDialog = false;
       this.selectedDoctorant = new DoctorantVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createDoctorantDialog  = false;
}

// getters and setters 

get doctorants(): Array<DoctorantVo> {
    return this.doctorantService.doctorants;
       }
set doctorants(value: Array<DoctorantVo>) {
        this.doctorantService.doctorants = value;
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


}