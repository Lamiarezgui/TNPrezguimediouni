import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Produit } from '../Produit';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {


 mesproduit:Produit[];
  prix:number=0;
  name:string="";

  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.mesproduit = this.userservice.mesproduit;

  }

}
