import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  id: number;
  lib: string;
  name: string;
  prix: number;
  image: string;
  def: boolean;
  date: Date;
  submitted:boolean = false;
  message:string = "";
  constructor(private userservice:UserService,private router:Router) { }
  onSubmit(f:NgForm){
    this.submitted = true;
    if(this.userservice.ajouterproduit(f.value['id'],f.value['lib'],f.value[name],f.value['prix'],f.value['image'],f.value['def'],f.value['date'])!=false){
      this.message = "le produit "+f.value['id']+" a été ajouté avec succes.";
    }else{
      this.message = "le produit "+f.value['id']+" existe déjà !";
    }
    this.router.navigate(['/produits']);
  }
  ngOnInit() {
  }

}
