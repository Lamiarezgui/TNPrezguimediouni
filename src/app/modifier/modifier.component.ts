import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  ido:number;
  id:number;
  lib:string="";
  name:string="";
  image:string="";
  prix:number;
  def:boolean;
  submitted:boolean=false;
  message:String;
  date: Date;

  constructor(private userservice:UserService,private activatedrouter:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
  editerProduit()
  {

    if(this.userservice.getProduitByid(this.ido)!=null)
    {
    this.userservice.editerProduitserv(this.ido,this.id,this.lib,this.name,this.image,this.prix,this.def);
    this.router.navigate(['/produits']);
    }
    else 
    {
      this.message="L'Id entré n'existe pas !";
      this.submitted=true;
    }

  }

  versProduit()
  {
  this.router.navigate(['/produits']);
  }

}
