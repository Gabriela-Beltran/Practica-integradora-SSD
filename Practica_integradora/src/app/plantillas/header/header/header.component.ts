import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  constructor( private router: Router){}
  ngOnInit(): void {
  }


  simplex(){
    this.router.navigate(['simplex']);
  }

  scoring(){
    this.router.navigate(['scoring']);
  }

  mineria(){
    this.router.navigate(['mineria']);
  }

  home(){
    this.router.navigate(['inicio']);
  }


}
