import {Component, OnInit} from '@angular/core';
import {FormatRencontreService} from '../../../controller/service/FormatRencontre.service';
import {FormatRencontreVo} from '../../../controller/model/FormatRencontre.model';

@Component({
  selector: 'app-formatRencontre-create',
  templateUrl: './formatRencontre-create.component.html',
  styleUrls: ['./formatRencontre-create.component.css']
})
export class FormatRencontreCreateComponent implements OnInit {

constructor(private formatRencontreService: FormatRencontreService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.formatRencontreService.save().subscribe(formatRencontre=>{
          
       this.formatRencontres.push({...formatRencontre});
       this.createFormatRencontreDialog = false;
       this.selectedFormatRencontre = new FormatRencontreVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createFormatRencontreDialog  = false;
}

// getters and setters 

get formatRencontres(): Array<FormatRencontreVo> {
    return this.formatRencontreService.formatRencontres;
       }
set formatRencontres(value: Array<FormatRencontreVo>) {
        this.formatRencontreService.formatRencontres = value;
       } 

 get selectedFormatRencontre():FormatRencontreVo {
           return this.formatRencontreService.selectedFormatRencontre;
       }
    set selectedFormatRencontre(value: FormatRencontreVo) {
        this.formatRencontreService.selectedFormatRencontre = value;
       }
  
   get createFormatRencontreDialog():boolean {
           return this.formatRencontreService.createFormatRencontreDialog;
       }
    set createFormatRencontreDialog(value: boolean) {
        this.formatRencontreService.createFormatRencontreDialog= value;
       }


}