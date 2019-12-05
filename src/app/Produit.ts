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
    public getid(): Number {
        return this.id;
      }
      public setid(value: number) {
        this.id = value;
      }
      public getlib():string {
        return this.lib;
      }
      public setlib(value:string) {
        this.lib= value;
      }
      public getname():string {
        return this.name;
      }
      public setname(value:string) {
        this.name = value;
      }
      public getimage():string {
        return this.image;
      }
      public setimage(value:string) {
        this.image = value;
      }
      public getprix(): number {
        return this.prix;
      }
      public setprix(value: number) {
        this.prix = value;
      }
      public getdate(): Date {
        return this.date;
      }
      public setdate(value: Date) {
        this.date = value;
      }
      public getdef(): boolean {
        return this.def;
      }
      public setdef(value: boolean) {
        this.def = value;
      }
}
