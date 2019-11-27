import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { UserService } from "./user.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { SelectedProduitComponent } from './selected-produit/selected-produit.component';
import { AddproduitComponent } from './addproduit/addproduit.component';

@NgModule({providers: [UserService],
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ProduitsComponent,
    ContactComponent,
    Error404Component,
    ConnecterComponent,
    SelectedProduitComponent,
    AddproduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
