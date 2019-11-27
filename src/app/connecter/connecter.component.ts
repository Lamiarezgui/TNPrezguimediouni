import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent implements OnInit {

  constructor(private router:Router) { }
  user:string="eya";
  password:string="lamia";
  onAfficher(form:NgForm)
  {
  if((form.value['user']=="Eya" ||form.value['user']=="Lamia" )&& form.value['password']=="sismakeup")
  {
    this.router.navigate(['/accueil']);
  }
  else
  this.router.navigate(['/error404']);
  }
  
  ngOnInit() {
  }

}
