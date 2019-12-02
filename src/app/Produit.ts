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
    public get matricule(): number {
        return this.id;
      }
      public set matricule(value: number) {
        this.id = value;
      }
      public get libelle():string {
        return this.lib;
      }
      public set libelle(value:string) {
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
      public get Prix(): number {
        return this.prix;
      }
      public set Prix(value: number) {
        this.prix = value;
      }
      public get dateFabrication(): Date {
        return this.date;
      }
      public set dateFabrication(value: Date) {
        this.date = value;
      }
      public get defi(): boolean {
        return this.def;
      }
      public set defi(value: boolean) {
        this.def = value;
      }
}
