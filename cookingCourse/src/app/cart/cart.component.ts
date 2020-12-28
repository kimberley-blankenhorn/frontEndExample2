import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	items = [];
	total = 0;

  constructor(private cart: CartService) {
  	this.items = cart.items;
  }

  ngOnInit(): void {
  	for (var i = 0; i < this.items.length; ++i) {
  		this.total += this.items[i].price;
  	}
  	
  }

}