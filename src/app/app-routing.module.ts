import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { Error404Component } from './error404/error404.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { SelectedProduitComponent } from './selected-produit/selected-produit.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ModifierComponent } from './modifier/modifier.component';
import { RechercheComponent } from './recherche/recherche.component';


const routes: Routes = [
  {path:'connecter', component:ConnecterComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'produits', component:ProduitsComponent},
  {path:'produits/:id',component:SelectedProduitComponent},
  {path:'addproduits',component:AddproduitComponent},
  {path:'modifier',component:ModifierComponent},
  {path:'recherche',component:RechercheComponent},
  {path:'', redirectTo:'connecter', pathMatch:'full'},
  {path:'**', component:Error404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
