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
onAddStudent(nom:String)
   { this.userService.ajouterproduit(5,'ff',nom,123,'hgdsjf',false,new Date(11/11/11));}

  constructor(private  userService : UserService ) { }

  ngOnInit() {
    this.mesproduit = this.userService.mesproduit;

  }

}
