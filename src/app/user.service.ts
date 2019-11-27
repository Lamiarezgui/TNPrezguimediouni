import { Injectable } from '@angular/core';
import {Produit} from '../app/Produit';
@Injectable({
  providedIn:'root'
})
export class UserService {
  
mesproduit=[
  new Produit(1,'Mac','rouge a lévers nude ',45.000,"../assets/mac1.jpg",true,new Date(25/12/2019)),
  new Produit(3,'Mac',' MASCARA RECOURBANT',75.25,"assets/mac2.jpg",true,new Date(26/12/2019)),
  new Produit(4,'Mac','  FOND DE TEINT FLUIDE STUDIO FIX',106.6,"assets/mac3.jpg",true,new Date(23/12/2019)),
];
getEmployeByid(id:number)
  {
    for(let p of this.mesproduit)
    {
      if(p.id==id)
      {
        return p;
      }
      else
      {
        return null;
      }
    }
  }

  constructor() { }
  ajouterproduit(id:Number,lib:String,name:String,prix:Number,image:String,def:Boolean,date:Date)
   { this.mesproduit.push(new Produit(id,lib,name,prix,image,def,date)); }

}

