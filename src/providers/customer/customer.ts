import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomerProvider {
 data:any;
  constructor(public http: HttpClient) {
   // console.log('Hello CustomerProvider Provider');
   this.data=[
    {id:"1", name:"A", tel:"089xxxx01" , add:"90 เทศา เมือง นครปฐม"},
    {id:"2", name:"B", tel:"089xxxx02" , add:"99 พุทธมณฑล นครปฐม"},
    {id:"3", name:"C", tel:"089xxxx03" , add:"80/2 นครชัยศรี นครปฐม"}
   ]
  }
  //รับค่าอย่างไม่มีเงื่อนไข
  loadAll(){
    return Promise.resolve(this.data);
  }
  //รับค่าอย่างมีเงื่อนไข
  getCustomerByID(id) 
  {
    for (var i = 0; i < (this.data).length; i++)
    {
      if (this.data[i].id == id)
      {
        return Promise.resolve(this.data[i]);
      }
    }
  }

}
