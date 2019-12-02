import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private service:UserService,private router:Router) { }

  ngOnInit() {
  }
  connect(){
    this.router.navigate(['/connecter']);
  }

}
