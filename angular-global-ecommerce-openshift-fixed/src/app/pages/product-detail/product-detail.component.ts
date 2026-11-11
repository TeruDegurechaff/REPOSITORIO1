import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-product-detail",
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <h2>Product Detail</h2>
      <p>Here are the details of the selected product.</p>
      <a routerLink="/cart" style="background:green; color:white; padding:8px 16px; text-decoration:none; border-radius:4px;">Add to Cart</a>
    </div>
  `
})
export class ProductDetailComponent {}
