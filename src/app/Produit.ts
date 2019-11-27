export class Produit {
    public id:Number;
    public lib:String;
    public name:String;
    public prix:Number;
    public image:String;
    public def:Boolean;
    public date:Date;


    constructor(id:Number,lib:String,name:String,prix:Number,image:String,def:Boolean,date:Date) {
        this.id=id;    
        this.lib=lib; 
        this.name=name;
        this.prix=prix;
        this.image=image;
        this.def=def;
        this.date=date;

    }
}