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
  id: Number;
  lib: String;
  name: String;
  prix: Number;
  image: String;
  def: Boolean;
  date: Date;

  constructor(private userservice:UserService,private router:Router) { }
  onSubmit(f:NgForm) { 
    
    this.userservice.ajouterproduit(this.id,this.lib,this.name,this.prix,this.image,this.def,this.date);
    this.router.navigate(['/produits']);
    
  }
  ngOnInit() {
  }

}
