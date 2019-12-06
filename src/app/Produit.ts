export class Produit {
    public id:number;
    public lib:string;
    public name:string;
    public prix:number;
    public image:string;
    public def:boolean;
    public date:Date;
  


    constructor(id:number,lib:string,name:string,prix:number,image:string,def:boolean,date:Date) {
        this.id=id;    
        this.lib=lib; 
        this.name=name;
        this.prix=prix;
        this.image=image;
        this.def=def;
        this.date=date;

    }
    public get idt(): number {
        return this.id;
      }
      public set idt(value: number) {
        this.id = value;
      }
      public get libb():string {
        return this.lib;
      }
      public set libb(value:string) {
        this.lib= value;
      }
      public get nom():string {
        return this.name;
      }
      public set nom(value:string) {
        this.name = value;
      }
      public get photo():string {
        return this.image;
      }
      public set photo(value:string) {
        this.image = value;
      }
      public get pri(): number {
        return this.prix;
      }
      public set pri(value: number) {
        this.prix = value;
      }
      public get dat(): Date {
        return this.date;
      }
      public set dat(value: Date) {
        this.date = value;
      }
      public get deff(): boolean {
        return this.def;
      }
      public set deff(value: boolean) {
        this.def = value;
      }
}
