import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <h1>Welcome to Global Trade Ecommerce</h1>
      <p>Discover our international catalog of high quality products.</p>
      <a routerLink="/catalog" style="background:#007bff; color:white; padding:10px 20px; text-decoration:none; border-radius:4px;">View Catalog</a>
    </div>
  `
})
export class HomeComponent {}
