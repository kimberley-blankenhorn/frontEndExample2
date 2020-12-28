import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  scrollTo: any;

  constructor() { 
   }
   scroll(){
     setTimeout(() => {
      document.getElementById('scroll').scrollIntoView();
     }, 200);

   }

  ngOnInit(): void {
  }

}
