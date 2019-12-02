import { Injectable } from '@angular/core';
import {Produit} from '../app/Produit';
@Injectable({
  providedIn:'root'
})
export class UserService {
  
mesproduit=[
  new Produit(1,'Mac','Rouge a lévres Nude ',45.000,"../assets/mac1.jpg",false,new Date(25/12/2017)),
  new Produit(3,'Mac',' MASCARA RECOURBANT',75.25,"../assets/mac2.jpg",true,new Date(26/12/2015)),
  new Produit(4,'Mac','  FOND DE TEINT FLUIDE STUDIO FIX',106.6,"../assets/mac3.jpg",true,new Date(23/12/2018)),
];
getProduitByid(id:number)
  {
    var i:number;
    for(i=0;i<this.mesproduit.length;i++)
    {
      if(id==this.mesproduit[i].id)
      return this.mesproduit[i];
    }
    return null;

  }
  public Delete(indice:number)
  {this.mesproduit.splice(indice,1);
  }

  public modifier(index:number,id:number,lib:string,name:string,prix:number,image:String,def:boolean,date:Date)
  {
    this.mesproduit[index].id=id;
    this.mesproduit[index].lib=lib;
    this.mesproduit[index].name=name;
    this.mesproduit[index].prix=prix;
    this.mesproduit[index].image=image;
    this.mesproduit[index].def=def;
    this.mesproduit[index].date=date;
    
  }

  constructor() { }
  ajouterproduit(id:Number,lib:String,name:String,prix:Number,image:String,def:Boolean,date:Date)
   { this.mesproduit.push(new Produit(id,lib,name,prix,image,def,date)); 
   }
}
