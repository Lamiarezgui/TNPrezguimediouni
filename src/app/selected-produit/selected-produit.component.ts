import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Produit } from '../Produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-produit',
  templateUrl: './selected-produit.component.html',
  styleUrls: ['./selected-produit.component.css']
})
export class SelectedProduitComponent implements OnInit {
  id:number;
  mesproduit:Produit[];
  produit: Produit;
  
 
  constructor(private activatedRoute:ActivatedRoute,private service:UserService,private router:Router) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.produit = this.service.getProduitByid(this.id);
   
  }
  

  onListproduits()
  {
  this.router.navigate(['/produits']);
  }
}