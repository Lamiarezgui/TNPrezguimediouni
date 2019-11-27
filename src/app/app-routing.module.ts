import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { SelectedProduitComponent } from './selected-produit/selected-produit.component';

const routes: Routes = [
  {path:'connecter', component:ConnecterComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'produits', component:ProduitsComponent},
  {path:'produits/:id',component:SelectedProduitComponent},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo:'connecter', pathMatch:'full'},
  {path:'**', component:Error404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
