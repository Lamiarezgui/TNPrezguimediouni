import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Produit } from '../Produit';

@Component({
  selector: 'app-selected-produit',
  templateUrl: './selected-produit.component.html',
  styleUrls: ['./selected-produit.component.css']
})
export class SelectedProduitComponent implements OnInit {
  id:number;
  mesproduit;
  produit;
  rechercheProduit(){
    for(let p of this.service.mesproduit)
    {
      if(this.id == p.id)
      {
        this.produit = p;
      }
    }
  }
  constructor(private activatedRoute:ActivatedRoute,private service:UserService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.mesproduit = this.service.mesproduit;
    this.rechercheProduit();
  }

}
