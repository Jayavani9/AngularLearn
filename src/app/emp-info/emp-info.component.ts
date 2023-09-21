import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService]
})
export class EmpInfoComponent {

  inforc1: string[] = [];
  inforc2: string[] = [];
  inforc3: string[] = [];
  inforc4: string[] = [];

  serv1(){
    this.inforc1 = this.rser.getinfo1()
  }

  serv2(){
    this.inforc2 = this.rser.getinfo2()
  }

  serv3(){
    this.inforc3 = this.rser.getinfo3()
  }

  serv4(){
    this.inforc4 = this.rser.getinfo4()
  }
  constructor(private rser: RecordsService){

  }
}
