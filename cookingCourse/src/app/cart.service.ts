import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	items = [];

  constructor() { }

  addToCart(item){
	this.items.push(item);
	}
}
