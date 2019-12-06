import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { UserService } from "./user.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { Error404Component } from './error404/error404.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { SelectedProduitComponent } from './selected-produit/selected-produit.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ModifierComponent } from './modifier/modifier.component';
import { RechercheComponent } from './recherche/recherche.component';
import { NomPipe } from './nom.pipe';

@NgModule({providers: [UserService],
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ProduitsComponent,

    Error404Component,
    ConnecterComponent,
    SelectedProduitComponent,
    AddproduitComponent,
    ModifierComponent,
    RechercheComponent,
    NomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
