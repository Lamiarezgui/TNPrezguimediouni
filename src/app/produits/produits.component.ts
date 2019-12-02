import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Produit } from '../Produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

img1="../assets/img1.jpg";
img="../assets/img.jpg";
img2="../assets/pal.jpg";
img3="../assets/img3.jpg";

mesproduit:Produit[];
  indice: number;



  constructor(private  userservice : UserService ) { }

  ngOnInit() {
    this.mesproduit = this.userservice.mesproduit;

  }
  onSupprime(indice:number){
    this.userservice.Delete(this.indice);
  }
   
}

