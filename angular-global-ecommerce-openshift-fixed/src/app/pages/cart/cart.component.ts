import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <h2>Shopping Cart</h2>
      <p>Your cart is currently ready for checkout.</p>
      <a routerLink="/checkout" style="background:#ffc107; color:black; padding:8px 16px; text-decoration:none; border-radius:4px; font-weight:bold;">Proceed to Checkout</a>
    </div>
  `
})
export class CartComponent {}
