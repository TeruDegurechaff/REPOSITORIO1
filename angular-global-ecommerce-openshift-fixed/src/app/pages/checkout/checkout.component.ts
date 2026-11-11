import { Component } from "@angular/core";

@Component({
  selector: "app-checkout",
  standalone: true,
  template: `
    <div>
      <h2>Checkout</h2>
      <p>Complete your purchase securely.</p>
      <button style="background:blue; color:white; padding:10px 20px; border:none; border-radius:4px;">Confirm Order</button>
    </div>
  `
})
export class CheckoutComponent {}
