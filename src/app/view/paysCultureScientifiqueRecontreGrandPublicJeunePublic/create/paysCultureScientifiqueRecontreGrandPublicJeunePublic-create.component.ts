import {Component, OnInit} from '@angular/core';
import {PaysCultureScientifiqueRecontreGrandPublicJeunePublicService} from '../../../controller/service/PaysCultureScientifiqueRecontreGrandPublicJeunePublic.service';
import {PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/PaysCultureScientifiqueRecontreGrandPublicJeunePublic.model';
      import {CultureScientifiqueRecontreGrandPublicJeunePublicVo} from '../../../controller/model/CultureScientifiqueRecontreGrandPublicJeunePublic.model';
      import {PaysVo} from '../../../controller/model/Pays.model';

@Component({
  selector: 'app-paysCultureScientifiqueRecontreGrandPublicJeunePublic-create',
  templateUrl: './paysCultureScientifiqueRecontreGrandPublicJeunePublic-create.component.html',
  styleUrls: ['./paysCultureScientifiqueRecontreGrandPublicJeunePublic-create.component.css']
})
export class PaysCultureScientifiqueRecontreGrandPublicJeunePublicCreateComponent implements OnInit {

constructor(private paysCultureScientifiqueRecontreGrandPublicJeunePublicService: PaysCultureScientifiqueRecontreGrandPublicJeunePublicService
            ) { }
// methods 
ngOnInit(): void {
    }

public save(){
    this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.save().subscribe(paysCultureScientifiqueRecontreGrandPublicJeunePublic=>{
          
       this.paysCultureScientifiqueRecontreGrandPublicJeunePublics.push({...paysCultureScientifiqueRecontreGrandPublicJeunePublic});
       this.createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog = false;
       this.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = new PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo();
    },error=>{
        console.log(error);
    })
}
// methods 

hideCreateDialog(){
    this.createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog  = false;
}

// getters and setters 

get paysCultureScientifiqueRecontreGrandPublicJeunePublics(): Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo> {
    return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.paysCultureScientifiqueRecontreGrandPublicJeunePublics;
       }
set paysCultureScientifiqueRecontreGrandPublicJeunePublics(value: Array<PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo>) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.paysCultureScientifiqueRecontreGrandPublicJeunePublics = value;
       } 

 get selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic():PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo {
           return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic;
       }
    set selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic(value: PaysCultureScientifiqueRecontreGrandPublicJeunePublicVo) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.selectedPaysCultureScientifiqueRecontreGrandPublicJeunePublic = value;
       }
  
   get createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog():boolean {
           return this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog;
       }
    set createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog(value: boolean) {
        this.paysCultureScientifiqueRecontreGrandPublicJeunePublicService.createPaysCultureScientifiqueRecontreGrandPublicJeunePublicDialog= value;
       }


}