import { UserService } from "./user.service";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { ConnecterComponent } from './connecter/connecter.component';
import {FormsModule} from '@angular/forms';
import { SelectedProduitComponent } from './selected-produit/selected-produit.component';

@NgModule({providers: [UserService],
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ProduitsComponent,
    ContactComponent,
    Error404Component,
    ConnecterComponent,
    SelectedProduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
