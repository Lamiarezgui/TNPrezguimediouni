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


  id:number;
    ido:number;
    name:string;
    image:string;
    prix:number;
    lib:string;
    def:boolean;
    date:Date;


  constructor() { }
  ajouterproduit(id:number,lib:string,name:string,prix:number,image:string,def:boolean,date:Date)
   { this.mesproduit.push(new Produit(id,lib,name,prix,image,def,date)); 
   }
   getProduitByid(id : number):Produit
    {
      var i:number;
      for(i=0;i<this.mesproduit.length;i++)
      {
        if(id==this.mesproduit[i].id)
        return this.mesproduit[i];
      }
      return null;

    }

    DeleteProduit(id:number):Produit[]
    {
      let i:number
      for(i=0;i<this.mesproduit.length;i++)
      {
        if(id==this.mesproduit[i].id)
        this.mesproduit.splice(i,1);
  
      }
      return this.mesproduit;

    }
    editerProduitserv(ido:number,id:number,lib:string,name:string,image:string,prix:number,def:boolean)
    {

      let obj:Produit=this.getProduitByid(ido);

      
      if(id>=100 && id<1000)
      obj.id=id;

      
      obj.lib=lib;

      
      obj.name=name;


      if(image.length!=0)
      obj.image=image;

      if(prix!=null)
      obj.prix=prix;
      
      if(def==true || def==false)
      obj.def=def;



    }
     

}
