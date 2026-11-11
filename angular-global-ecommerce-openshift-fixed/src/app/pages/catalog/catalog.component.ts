import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-catalog",
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <h2>Product Catalog</h2>
      <ul>
        <li><a routerLink="/product/1">Product 1</a></li>
        <li><a routerLink="/product/2">Product 2</a></li>
      </ul>
    </div>
  `
})
export class CatalogComponent {}
