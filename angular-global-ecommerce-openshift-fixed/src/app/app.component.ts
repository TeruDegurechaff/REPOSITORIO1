import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    FormsModule
  ],
  template: `
    <header style="background:#333; color:white; padding:1rem; display:flex; justify-content:space-between; align-items:center;">
      <h2 style="margin:0;">Global Trade Ecommerce</h2>
      <nav>
        <a routerLink="/" style="color:white; margin-right:15px; text-decoration:none;">Home</a>
        <a routerLink="/catalog" style="color:white; margin-right:15px; text-decoration:none;">Catalog</a>
        <a routerLink="/cart" style="color:white; margin-right:15px; text-decoration:none;">Cart</a>
      </nav>
    </header>
    <main style="padding: 2rem;">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}
