import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // cartItems  = [
  //   // {id:1, productId:1, productName:"asasf1", quantity:4, price:100},
  //   // {id:2, productId:2, productName:"asasf2", quantity:1, price:300},
  //   // {id:3, productId:2, productName:"asasf3", quantity:8, price:1400},

  // ];

  cartItems : any = JSON.parse(localStorage.getItem('cartItem') || '[]')

  cartTotal = JSON.parse(localStorage.getItem('total') || '[]');

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {

    this.cartService.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
      this.shoewData();
      this.cartItems = JSON.parse(localStorage.getItem('cartItem'))
    })
  }

  shoewData() {
    console.log('data ' + this.cartItems)
  }

  addProductToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].quantity++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        quantity: 1,
        price: product.price
      })
    }
    // if(this.cartItems.length === 0) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     quantity: 1, 
    //     price: product.price
    //   })
    // }
    // else {
    //   for(let i in this.cartItems) {
    //     if(this.cartItems[i].productId === product.id) {
    //       this.cartItems[i].quantity++
    //       break;
    //     } else {
    //       this.cartItems.push({
    //         productId: product.id,
    //         productName: product.name,
    //         quantity: product.quantity,
    //         price: product.price
    //       })
    //     }
    //   }
    // }

    localStorage.setItem('cartItem', JSON.stringify(this.cartItems));

    this.cartTotal = 0;
    this.cartItems.forEach(item => {
    this.cartTotal += (item.quantity * item.price)
    localStorage.setItem('total', JSON.stringify(this.cartTotal))
    })
  }

}
