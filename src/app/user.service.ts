import { Injectable } from '@angular/core';
import {Produit} from '../app/Produit';
@Injectable({
  providedIn:'root'
})
export class UserService {
  
mesproduit=[
  new Produit(1,'Mac','Rouge a lévres Nude ',45.000,"../assets/mac1.jpg",false,new Date(25/12/2017)),
  new Produit(2,'Mac',' MASCARA RECOURBANT',75.25,"../assets/mac2.jpg",true,new Date(26/11/2015)),
  new Produit(3,'Mac','  FOND DE TEINT FLUIDE STUDIO FIX',106.6,"../assets/mac3.jpg",true,new Date(23/12/2018)),
  new Produit(4,'Mac',' PALETTE POUR LES YEUX ',142.75,"../assets/palette2.jpg",false,new Date(23/12/2018)),
  new Produit(5,'Mac','  CONTOURING STICK PERFECTEUR CORRECTEUR / STUDIO FIX',111.02,"../assets/stick2.jpg",true,new Date(23/12/2018)),

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
  
   getProduitByid(id : number):Produit
    {
      for(let p of this.mesproduit)
      {
        if(p.id==id)
        return p;
      }
      return null;

    }
    ajouterproduit(id:number,lib:string,name:string,prix:number,image:string,def:boolean,date:Date):boolean
   { 
     if(this.getProduitByid(id)==null)
     {  this.mesproduit.push(new Produit(id,lib,name,prix,image,def,date)); 
      return true;  }
      return false;
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
    addProduit(ido:number,id:number,lib:string,name:string,image:string,prix:number,def:boolean,date:Date)
    {

      let obj:Produit=this.getProduitByid(ido);

      
      if(id>0 && id<100)
      obj.id=id;
      else
      obj.id=obj.id;

      
      if(lib.length!=0)
      obj.lib=lib;
      else
      obj.lib=obj.lib;
      
      if(name.length!=0)
      obj.name=name;
      else
      obj.name=obj.name;

      if(image.length!=0)
      obj.image=image;
      else
      obj.image=obj.image;

      if(prix!=null)
      obj.prix=prix;
      else
      obj.prix=obj.prix;

      if(def==true || def==false)
      obj.def=def;
      else
      obj.def=obj.def;



    }
     

}
